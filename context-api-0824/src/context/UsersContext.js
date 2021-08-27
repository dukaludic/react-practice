import { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: "u1",
      firstName: "Luka",
      lastName: "Dudic",
      orders: { products: [], time: [] },
      friends: ["u2"],
      loggedIn: true,
    },
    {
      id: "u2",
      firstName: "Ana",
      lastName: "Petrovic",
      orders: { products: [], time: [] },
      friends: ["u1"],
      loggedIn: false,
    },
    {
      id: "u3",
      firstName: "Marko",
      lastName: "Jovanovic",
      orders: { products: [], time: [] },
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
