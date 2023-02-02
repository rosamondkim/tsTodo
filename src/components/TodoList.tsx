import React, { useState } from "react";
import "./TodoList.scss";
interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { text: value, completed: false }]);
    setValue("");
  };
  console.log(todos);
  return (
    <div className="todoList">
      <h1>다 울었니? 이제 할일을 하자</h1>
      <form className="todoForm" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할일"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>등록</button>
      </form>
      <ul className="todoUl">
        {todos.map((todo, i) => (
          <li key={i}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
