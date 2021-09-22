import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProductDetails } from '@/pages/product-details';
import { SideBar } from './SideBar';
import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useUserContext } from './context/user-context';
import { Suspense, lazy } from 'react';

type MenuItemCanView = (props: { isAuthorized: boolean }) => boolean;
type MenuItem = { name: string, to: string, show: MenuItemCanView };
type MenuIconItem = { name: string, to: string, icon: any, show: MenuItemCanView };

const ifAuthorized: MenuItemCanView = ({ isAuthorized }) => isAuthorized;
const ifAnonymous: MenuItemCanView = ({ isAuthorized }) => !isAuthorized;

const menuItems: MenuItem[] = [
  { name: 'Products', to: '/search', show: () => true },
  { name: 'Profile', to: '/authorize/profile', show: ifAuthorized },
  { name: 'Login', to: '/authorize/login', show: ifAnonymous },
  { name: 'Register', to: '/authorize/register', show: ifAnonymous },
];

const menuIconItems: MenuIconItem[] = [
  { name: 'Login', to: '/authorize/login', icon: LoginIcon, show: ifAnonymous },
  { name: 'Profile', to: '/authorize/profile', icon: UserCircleIcon, show: ifAuthorized }
];

const RegisterLazyComponent = lazy(() => import('@/pages/authorize/register'))
const LoginPageLazyComponent = lazy(() => import('@/pages/authorize/login'))
const SearchResultsLazyComponent = lazy(() => import('@/pages/search-results'))
const NotFoundLazyComponent = lazy(() => import('@/pages/notFound'))

function App() {
  const { userId } = useUserContext();
  const menuItemData = { isAuthorized: !!userId };
  const items = menuItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to }));
  const iconItems = menuIconItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to, icon: item.icon }));

  return (
    <Router>
      <SideBar items={items} icons={iconItems} onLogout={async () => { }}>
        <Suspense fallback={<div>Wczytywanie...</div>}>
          <Switch>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/search" component={SearchResultsLazyComponent} />
            <Route path="/authorize/login" component={LoginPageLazyComponent} />
            <Route path="/authorize/register" component={RegisterLazyComponent} />
            <Route path="*" component={NotFoundLazyComponent} />
          </Switch>
        </Suspense>
      </SideBar>
    </Router>
  );
}

export default App;
