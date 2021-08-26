import { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([
    {
      id: "post1",
      userId: "u1",
      userName: "Luka Dudic",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "post2",
      userId: "u2",
      userName: "Ana Petrovic",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: "post3",
      userId: "u3",
      userName: "Marko Jovanovic",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ]);

  return (
    <PostContext.Provider value={{ posts }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
