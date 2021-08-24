import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProductDetails } from '@/pages/product-details';
import { SearchResults } from '@/pages/search-results';
import { LoginPage } from './pages/authorize/login';
import { RegisterPage } from './pages/authorize/register';
import { NotFound } from './pages/NotFound';
import { NavigationBar } from './NavigationBar';
import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useUserContext } from './context/user-context';

type MenuItemCanView = (props: { isAuthorized: boolean }) => boolean;
type MenuItem = { name: string, to: string, show: MenuItemCanView };
type MenuIconItem = { name: string, to: string, icon: any, show: MenuItemCanView };

const ifAuthorized: MenuItemCanView = ({ isAuthorized }) => isAuthorized;
const ifAnonymous: MenuItemCanView = ({ isAuthorized }) => !isAuthorized;

const menuItems: MenuItem[] = [
  { name: 'Products', to: '/search', show: ifAuthorized },
  { name: 'Profile', to: '/authorize/profile', show: ifAuthorized },
  { name: 'Login', to: '/authorize/login', show: ifAnonymous },
  { name: 'Register', to: '/authorize/register', show: ifAnonymous },
];

const menuIconItems: MenuIconItem[] = [
  { name: 'Login', to: '/authorize/login', icon: LoginIcon, show: ifAnonymous },
  { name: 'Profile', to: '/authorize/profile', icon: UserCircleIcon, show: ifAuthorized }
];

function App() {
  const user = useUserContext();
  const menuItemData = { isAuthorized: !!user.userId };
  const items = menuItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to }));
  const iconItems = menuIconItems.filter(item => item.show(menuItemData)).map(item => ({ name: item.name, to: item.to, icon: item.icon }));
  
  return (
    <Router>
      <NavigationBar items={items} icons={iconItems}></NavigationBar>
      <Switch>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
        <Route path="/authorize/login">
          <LoginPage />
        </Route>
        <Route path="/authorize/register">
          <RegisterPage />
        </Route>
        <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
