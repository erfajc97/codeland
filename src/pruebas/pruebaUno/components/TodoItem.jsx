import React from "react";
import "../style.css";
export default function TodoItem({ thisTodo, todo, setTodo }) {
  const todoCompleted = () => {
    const updatedTodos = todo.map((item) => {
      if (item.id === thisTodo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodo(updatedTodos);
    console.log("Completed");
  };

  const todoDelete = () => {
    const updatedTodos = todo.filter((item) => item.id !== thisTodo.id);
    setTodo(updatedTodos);
  };

  return (
    <div>
      <p className={thisTodo.completed && "completed"}>{thisTodo.text}</p>
      <p>{thisTodo.completed ? "Completed" : "Not completed"}</p>
      <button onClick={todoCompleted}>Completed</button>
      <button onClick={todoDelete}>Delete</button>
    </div>
  );
}
