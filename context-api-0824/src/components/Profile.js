import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UsersContext } from "../context/UsersContext";
import ProductItem from "./ProductItem";

const queryParams = new URLSearchParams(window.location.search);
// let thisUser = queryParams.get("users");

const Profile = (props) => {
  const { users } = useContext(UsersContext);

  let thisUser = [
    {
      id: "u1",
      firstName: "Luka",
      lastName: "Dudic",
      orders: [],
      friends: ["u2"],
      loggedIn: true,
    },
  ];
  //   thisUser.push(users[0]);
  //   console.log(thisUser);
  //   thisUser = [...thisUser];
  (function findUser() {
    // console.log(thisUser);
    console.log(props.user, "PROPS>USER");
    thisUser = users.filter((item) => item.id === props.user);
    console.log(thisUser, "findUser - thisUser");
    console.log(users, "findUser - users");
    console.log(users.id, "findUser - users");
    console.log(props.user, "findUser - props.user");
  })();

  return (
    <div>
      <h1>{`${thisUser[0].firstName} ${thisUser[0].lastName}`}</h1>
      <div className="profileContainer">
        <div className="profileImg"></div>
      </div>
      <button className="btn addFriendBtn">ADD FRIEND</button>
      <p>Orders:</p>
      {thisUser[0].orders.map((item) => (
        <ProductItem
          isSelected={item.isSelected}
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Profile;
