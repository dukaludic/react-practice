import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { AppContext } from "./context/AppContext";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import PostContextProvider from "./context/PostContext";
import UsersContextProvider from "./context/UsersContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import AuthNav from "./auth/auth-nav";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import ProtectedRoute from "./auth/protected-route";
import LogoutButton from "./auth/logout-button";
import AuthenticationButton from "./auth/authentication-button";

let tmpCart = [];

function App() {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;
  // console.log(name, "AUTH");

  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "A Book",
      price: 2.99,
      isSelected: false,
      isAdded: false,
      quantity: 0,
    },
    {
      id: "p2",
      title: "Gaming Mouse",
      price: 10.99,
      isSelected: false,
      isAdded: false,
      quantity: 0,
    },
    {
      id: "p3",
      title: "Graphics Card",
      price: 44.99,
      isSelected: false,
      isAdded: false,
      quantity: 0,
    },
  ]);

  const clearOrders = () => {
    setCart([]);
    tmpCart = [];
    setProducts([
      {
        id: "p1",
        title: "A Book",
        price: 2.99,
        isSelected: false,
        isAdded: false,
        quantity: 0,
      },
      {
        id: "p2",
        title: "Gaming Mouse",
        price: 10.99,
        isSelected: false,
        isAdded: false,
        quantity: 0,
      },
      {
        id: "p3",
        title: "Graphics Card",
        price: 44.99,
        isSelected: false,
        isAdded: false,
        quantity: 0,
      },
    ]);
    console.log(cart);
  };

  const [cart, setCart] = useState([]);

  const { isLoading } = useAuth0();

  const productClickHandler = (id) => {
    const tmpState = products;
    const product = products.find((item) => item.id === id);
    // product.isSelected = product.isSelected ? false : true;
    product.quantity++;
    //FIND ne pravi novu varujablu vec koristi staru
    setProducts([...tmpState]);
    tmpCart.push(product);
    console.log(tmpCart);
  };

  return (
    <Router>
      <Auth0ProviderWithHistory>
        {isLoading && <h3>LOADING</h3>}
        <div className="App">
          <ul className="appList">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/users/u1">Profile</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <AuthenticationButton />
            </li>
          </ul>
          <Switch>
            <PostContextProvider>
              <UsersContextProvider>
                <AppContext.Provider
                  value={{
                    clearOrders,
                    cart,
                    tmpCart,
                    setCart,
                    setProducts,
                    products,
                    productClickHandler,
                  }}
                >
                  <Route exact path="/"></Route>
                  <ProtectedRoute path="/products" component={Products} />
                  <ProtectedRoute path="/cart" component={Cart} />
                  <ProtectedRoute exact path="/users/u1" component={Profile} />
                  <ProtectedRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                  />
                </AppContext.Provider>
              </UsersContextProvider>
            </PostContextProvider>
          </Switch>
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
