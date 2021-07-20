import React, { useState } from "react";
import axios from "axios";

const TodoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const changeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //kako promeniti state u drugoj komponenti. Ako bih trebao sve stateove da drzim u App.js mozda je ovo dobro za context api

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: enteredTodo,
      })
      .then(console.log(enteredTodo));
  };

  return (
    <div>
      <form>
        <label>New Todo</label>
        <input onChange={changeHandler} type="text" value={enteredTodo}></input>
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
