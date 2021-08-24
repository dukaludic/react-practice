import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import User from "./User";

const UserList = () => {
  const { users } = useContext(AppContext);

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <div>
      <h3>Available users</h3>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
