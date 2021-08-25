import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { AppContext } from "./context/AppContext";
import Profile from "./components/Profile";

let tmpCart = [];

function App() {
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

  const productClickHandler = (id) => {
    const tmpState = products;
    const product = products.find((item) => item.id === id);
    product.isSelected = product.isSelected ? false : true;
    product.quantity++;
    //FIND ne pravi novu varujablu vec koristi staru
    setProducts([...tmpState]);
    tmpCart.push(product);
    console.log(tmpCart);
  };

  return (
    <Router>
      <div className="App">
        <ul className="appList">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Switch>
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
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </AppContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
