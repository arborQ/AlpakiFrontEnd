import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProductDetails } from '@/pages/product-details';
import { SearchResults } from '@/pages/search-results';

function App() {
  return (
    <Router>
      <div>
        <Link to="/product/1234">Office 365</Link>
        <Link to="/search?search=office+365">Search = Office 365</Link>
      </div>
      <Switch>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
