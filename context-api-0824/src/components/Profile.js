import React, { useEffect, useContext, useState, useCallback } from "react";
import { UsersContext } from "../context/UsersContext";
import ProductItem from "./ProductItem";

const queryParams = new URLSearchParams(window.location.search);
// let thisUser = queryParams.get("users");

const Profile = (props) => {
  const { users } = useContext(UsersContext);
  //Force update
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  // JS in JSX
  const runCallback = (cb) => {
    return cb();
  };

  let [loggedUser] = users.filter((item) => item.id === "u1");
  let thisUser = loggedUser;

  const addRemove = () => {
    const [friend] = loggedUser.friends.filter((item) => item === thisUser.id);
    const thisUserIndex = loggedUser.friends.indexOf(friend);
    const loggedUserIndex = thisUser.friends.indexOf(loggedUser.id);
    console.log(thisUserIndex);

    if (thisUserIndex === -1) {
      loggedUser.friends.push(thisUser.id);
      thisUser.friends.push(loggedUser.id);
    } else {
      loggedUser.friends.splice(thisUserIndex, 1);
      thisUser.friends.splice(loggedUserIndex, 1);
    }

    console.log(loggedUser.friends, "u1 friends");
    console.log(thisUser.friends, "thisUser friends");
    // console.log(loggedUser.friends.indexOf(removed[0]));
    forceUpdate();
  };

  (function findUser() {
    if (props.user) {
      console.log(props.user, "PROPS>USER");
      let [tmpUser] = users.filter((item) => item.id === props.user);
      thisUser = tmpUser;
    }
  })();

  return (
    <div>
      <h1>{`${thisUser.firstName} ${thisUser.lastName}`}</h1>
      <div className="profileContainer">
        <div className="profileImg"></div>
      </div>
      {thisUser.id !== loggedUser.id &&
        (loggedUser.friends.includes(thisUser.id) ? (
          <button onClick={addRemove} className="btn addFriendBtn">
            REMOVE FRIEND
          </button>
        ) : (
          <button onClick={addRemove} className="btn addFriendBtn">
            ADD FRIEND
          </button>
        ))}
      <p>Orders:</p>
      {console.log(thisUser.orders, "CL")}
      <div>
        {runCallback(() => {
          const row = [];
          for (var i = thisUser.orders.products.length - 1; i > -1; i--) {
            row.push(<h4>{thisUser.orders.time[i].toString()}</h4>);
            row.push(
              thisUser &&
                thisUser.orders.products[i].map((item) => {
                  return (
                    <ProductItem
                      isSelected={item.isSelected}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  );
                })
            );
          }
          return row;
        })}
      </div>

      {/* {thisUser.orders.time.map((i) => {
        return (
          <>
            <h4>{i.toString()}</h4>
            <>
              {thisUser &&
                thisUser.orders.products[0].map((item) => {
                  return (
                    <ProductItem
                      isSelected={item.isSelected}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  );
                })}
            </>
          </>
        );
      })} */}
    </div>
  );
};

export default Profile;
