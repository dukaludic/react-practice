import React from "react";

const Todo = (props) => {
  return (
    <div onClick={() => props.onDelete(props.id)} className="todo">
      {props.id} {props.title}
    </div>
  );
};

export default Todo;
