import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProductDetails } from '@/pages/product-details';
import { SearchResults } from '@/pages/search-results';
import { LoginPage } from './pages/authorize/login';
import { RegisterPage } from './pages/authorize/register';

function App() {
  return (
    <Router>
      <div>
        <Link to="/product/1234">Office 365</Link>
        <Link to="/search?search=office+365">Search = Office 365</Link>
        <Link to="/authorize/login">Login</Link>
      </div>
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
      </Switch>
    </Router>
  );
}

export default App;
