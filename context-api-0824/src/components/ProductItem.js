const ProductItem = (props) => {
  return (
    <div
      onClick={props.onSelect}
      style={
        props.quantity > 0
          ? { backgroundColor: "#ddd" }
          : { backgroundColor: "#eee" }
      }
      className="productItem"
    >
      <div>{props.title}</div>
      <div>{props.price}</div>
      <div className="quantity">{props.quantity}</div>
    </div>
  );
};

export default ProductItem;
