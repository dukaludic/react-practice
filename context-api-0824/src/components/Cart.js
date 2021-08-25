import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, clearOrders } = useContext(AppContext);

  const calculateTotal = () => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
    });
    return Math.trunc(sum * 100) / 100;
  };

  return (
    <div>
      <h1>Cart</h1>
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
      <div className="total">
        <h3>Total:</h3>
        <p>{`$${calculateTotal()}`}</p>
      </div>
    </div>
  );
};

export default Cart;
