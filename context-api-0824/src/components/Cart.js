import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { PostContext } from "../context/PostContext";
import { UsersContext } from "../context/UsersContext";

let time;

const Cart = () => {
  const { cart, setCart, clearOrders } = useContext(AppContext);
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);

  const [message, setMessage] = useState("");

  let [loggedUser] = users.filter((item) => item.id === "u1");

  const calculateTotal = () => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
    });
    return Math.trunc(sum * 100) / 100;
  };

  const onCheckout = () => {
    console.log(loggedUser, "loggedUser");
    console.log(cart, "prvo");
    // const cartDeconstruct = { ...cart };
    // for (let i = 0; i < cartDeconstruct.length; i++) {
    //   loggedUser.orders.push(cartDeconstruct[i]);
    // }
    loggedUser.orders.products.push(cart);
    time = new Date().toString();
    loggedUser.orders.time.push(time);
    console.log(loggedUser.orders, "loggedUser.orders");
    console.log(cart, "CART");
    clearOrders();
    setMessage("Thank you for purchasing");

    const newPost = {
      id: `post${posts.length + 1}`,
      userId: loggedUser.id,
      userName: `${loggedUser.firstName} ${loggedUser.lastName}`,
      time: time,
      postContent: "Something",
      orders: {
        products: cart,
        time: time,
      },
    };
    posts.push(newPost);
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
