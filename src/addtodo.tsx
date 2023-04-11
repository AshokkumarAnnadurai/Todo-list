import React, { useContext, useState } from "react";
import { data } from "./context";

function Addtodo() {
  const { todolist, setTodolist } = useContext(data);
  const [todo, setTodo] = useState("");

  const addTodo = (): void => {
    if (todo.trim() !== "") {
      setTodolist([...todolist, todo]);
      setTodo("");
    }
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const ClickEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={onchange}
          onKeyPress={ClickEnter}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default Addtodo;
