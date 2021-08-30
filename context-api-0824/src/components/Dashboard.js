import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import Profile from "./Profile";
import Post from "./Post";

const queryParams = new URLSearchParams(window.location.search);
let params = queryParams.get("/");

const Dashboard = () => {
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);
  const [clickedUser, setClickedUser] = useState("");

  let history = useHistory();
  console.log(window.location);

  //   const linkClick = (id) => {
  //     console.log(id);
  //     clickedUser = id;
  //     console.log(clickedUser);
  //   };

  useEffect(() => {
    console.log(posts);
    console.log(users);
  }, []);

  return (
    <div>
      <Router basename="users">
        <Switch>
          <Route path="/dashboard">
            {posts
              .slice(0)
              .reverse()
              .map((item) => (
                <div className="postContainer">
                  <div className="userDetails">
                    <div className="postImg"></div>
                    <div>
                      <h3 onClick={() => setClickedUser(item.userId)}>
                        <Link to={`/${item.userId}`}>{item.userName}</Link>
                      </h3>
                      <p>{item.time}</p>
                      <p>
                        {item.userId === users[0].id
                          ? "You"
                          : users[0].friends.includes(item.userId)
                          ? "Friends"
                          : "Not a friend"}
                      </p>
                    </div>
                  </div>
                  <Post
                    content={item.postContent}
                    products={item.orders.products}
                  />
                </div>
              ))}
            {/* {posts.map((item) => (
              <div className="postContainer">
                <div className="userDetails">
                  <div className="postImg"></div>
                  <div>
                    <h3 onClick={() => setClickedUser(item.userId)}>
                      <Link to={`/${item.userId}`}>{item.userName}</Link>
                    </h3>
                    <p>
                      {item.userId === users[0].id
                        ? "You"
                        : users[0].friends.includes(item.userId)
                        ? "Friends"
                        : "Not a friend"}
                    </p>
                  </div>
                </div>
                <p>{item.postContent}</p>
              </div>
            ))} */}
          </Route>
          <Route path={`/${clickedUser}`}>
            <Profile user={clickedUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
