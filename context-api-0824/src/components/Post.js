import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { UsersContext } from "../context/UsersContext";
import ProductItem from "./ProductItem";

const Post = (props) => {
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);

  (function () {
    console.log("HELLO", props.products);
  })();

  return (
    <div>
      <p>{props.content}</p>
      {props.products.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#ddd",
            padding: "5px",
            margin: "5px 0",
          }}
        >
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
