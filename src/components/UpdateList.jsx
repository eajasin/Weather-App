import { useState } from "react";

export default function UpdateList({ todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const deleteTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //   const markComplete =(id) => {
  //     let updatedTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  //     setTodos(updatedTodos)

  //   }

  const editTodo = (id) => {
    setIsEditing(!isEditing);
    setEditedTodoId(id);
    setEditedTodo(todos.find((todo) => todo.id === id).text);

    console.log(
      "text to be edited:",
      todos.find((todo) => todo.id === id).text
    );
  };

  const updateTodo = () => {
    let updatedTodo = todos.map((todo) =>
      todo.id === editedTodoId ? { ...todo, text: editedTodo } : todo
    );

    setTodos(updatedTodo);
    console.log(updatedTodo);
    setIsEditing(false);
    setEditedTodo("");
    setEditedTodoId(null);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={() => updateTodo(editedTodo.id)}>Update</button>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            {/* <input type="checkbox" checked={todo.completed} onChange={() => markComplete(todo.id)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span> */}
            {todo.text}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
