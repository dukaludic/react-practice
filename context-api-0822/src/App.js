import "./App.css";
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalContextProvider from "./components/GlobalContext"
import Cart from "./components/Cart";
import { AppContext } from "./components/Context";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
      <Router>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/products' exact>
            <Products/>
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
        </Switch>
      </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
