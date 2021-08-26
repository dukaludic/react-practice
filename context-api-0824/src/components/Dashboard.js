import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import Profile from "./Profile";

const Dashboard = () => {
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);
  const [clickedUser, setClickedUser] = useState("");

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
      <Router>
        <Switch>
          <Route path="/dashboard">
            {posts.map((item) => (
              <div className="postContainer">
                <div className="userDetails">
                  <div className="postImg"></div>
                  <div>
                    <h3 onClick={() => setClickedUser(item.userId)}>
                      <Link to={`/users=${item.userId}`}>{item.userName}</Link>
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
            ))}
          </Route>
          <Route path={`/users=${clickedUser}`}>
            <Profile user={clickedUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
