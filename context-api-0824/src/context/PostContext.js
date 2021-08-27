import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([
    {
      id: "post1",
      userId: "u1",
      userName: "Luka Dudic",
      time: "Fri Aug 27 2021 02:54:00 GMT+0200 (Central European Summer Time)",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      orders: {
        products: [
          {
            id: "p1",
            title: "A Book",
            price: 2.99,
            isSelected: false,
            isAdded: false,
            quantity: 0,
          },
          {
            id: "p2",
            title: "Gaming Mouse",
            price: 10.99,
            isSelected: false,
            isAdded: false,
            quantity: 0,
          },
        ],
        time: [],
      },
    },
    {
      id: "post2",
      userId: "u2",
      userName: "Ana Petrovic",
      time: "Fri Aug 27 2021 02:54:00 GMT+0200 (Central European Summer Time)",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      orders: {
        products: [
          {
            id: "p2",
            title: "Gaming Mouse",
            price: 10.99,
            isSelected: false,
            isAdded: false,
            quantity: 0,
          },
        ],
        time: [],
      },
    },
    {
      id: "post3",
      userId: "u3",
      time: "Fri Aug 27 2021 02:54:00 GMT+0200 (Central European Summer Time)",
      userName: "Marko Jovanovic",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      orders: {
        products: [
          {
            id: "p1",
            title: "A Book",
            price: 2.99,
            isSelected: false,
            isAdded: false,
            quantity: 0,
          },
        ],
        time: [],
      },
    },
  ]);

  return (
    <PostContext.Provider value={{ posts }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
