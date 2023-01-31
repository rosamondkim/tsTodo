import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: new todo 생성하기
    console.log(todo);
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="무엇을하실건가여"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button>등록</button>
    </form>
  );
};

export default TodoForm;
