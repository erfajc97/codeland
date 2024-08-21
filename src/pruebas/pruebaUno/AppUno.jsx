import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function AppUno() {
  const arrayTodo = [
    {
      id: crypto.randomUUID(),
      text: "Todo 1",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      text: "Todo 2",
      completed: false,
    },
  ];
  const [todo, setTodo] = useState(arrayTodo);
  return (
    <div>
      <TodoForm todo={todo} setTodo={setTodo} />
      {todo?.map((item) => (
        <div key={item.id}>
          <TodoItem thisTodo={item} todo={todo} setTodo={setTodo} />
        </div>
      ))}
    </div>
  );
}
