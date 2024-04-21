import { useState } from "react";

export default function UpdateList({ todos, setTodos }) {
  const deleteTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

//   const markComplete =(id) => {
//     let updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
//     setTodos(updatedTodos)

//   }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {/* <input type="checkbox" checked={todo.completed} onChange={() => markComplete(todo.id)} />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span> */}
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
