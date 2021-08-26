import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: "u1",
      firstName: "Luka",
      lastName: "Dudic",
      orders: [],
      friends: ["u2"],
      loggedIn: true,
    },
    {
      id: "u2",
      firstName: "Ana",
      lastName: "Petrovic",
      orders: [],
      friends: ["u1"],
      loggedIn: false,
    },
    {
      id: "u3",
      firstName: "Marko",
      lastName: "Jovanovic",
      orders: [],
      friends: [],
      loggedIn: false,
    },
  ]);

  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
