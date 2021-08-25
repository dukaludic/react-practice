import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import ProductItem from "./ProductItem";

const Products = () => {
  const {
    cart,
    clearOrders,
    tmpCart,
    setCart,
    setProducts,
    products,
    productClickHandler,
  } = useContext(AppContext);

  useEffect(() => {
    console.log("context", products);
  }, []);

  const btnClickHandler = () => {
    const cartSet = [...new Set(tmpCart)];
    setCart(cartSet);
    console.log(tmpCart);
  };

  //   const productClickHandler = (e) => {
  //     console.log("clikce", e.target);
  //   };

  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => (
        <ProductItem
          onSelect={() => productClickHandler(item.id)}
          isSelected={item.isSelected}
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <div className="btns">
        <button className="btn" onClick={btnClickHandler}>
          Add to Cart
        </button>
        <button onClick={clearOrders} className="removeBtn btn">
          Clear
        </button>
      </div>
      {/* <button onClick={changeState}>SET_STATE</button> */}
    </div>
  );
};

export default Products;
