import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { UsersContext } from "../context/UsersContext";

const Cart = () => {
  const { cart, clearOrders } = useContext(AppContext);
  const { users } = useContext(UsersContext);

  const [message, setMessage] = useState("");

  let thisUser;

  const calculateTotal = () => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
    });
    return Math.trunc(sum * 100) / 100;
  };

  const onCheckout = () => {
    thisUser = users.find((item) => item.id === "u1");
    console.log(thisUser, "thisUser");
    thisUser.orders.push(cart);
    clearOrders();
    setMessage("Thank you for purchasing");
  };

  return (
    <div>
      <h1>Cart</h1>
      {message ? <div></div> : <div>{message}</div>}
      {cart.map((item) => (
        <div key={item.id} onClick={item.onSelect} className="productItem">
          <div>{item.title}</div>
          <div>{item.price}</div>
          <div className="quantity">{item.quantity}</div>
        </div>
      ))}
      {cart[0] && (
        <button onClick={clearOrders} className="removeBtn btn">
          Clear
        </button>
      )}
      {cart[0] && (
        <button onClick={onCheckout} className="checkoutBtn btn">
          Checkout
        </button>
      )}
      <div className="total">
        <h3>Total:</h3>
        <p>{`$${calculateTotal()}`}</p>
      </div>
    </div>
  );
};

export default Cart;
