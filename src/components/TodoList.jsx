import { useState } from "react";
import UpdateList from "./UpdateList";

export default function TodoList() {
  const [createTodo, setCreateTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setCreateTodo(e.target.value);
    
  };

  const createNewTodo = (e) => {
    e.preventDefault();

    if(!createTodo ){
      alert("Must enter todo!")
      return
    }

    let newTodo = {
      id: Math.random() * 10000000,
      text: createTodo,
    };

    setTodos([...todos, newTodo]);
    console.log([...todos, newTodo]);
    setCreateTodo("");
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={createTodo}
        placeholder="Enter Todo"
        required
        onChange={handleChange}
      ></input>
      <button type="submit" onClick={createNewTodo}>
        Add Todo
      </button>
      <UpdateList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
