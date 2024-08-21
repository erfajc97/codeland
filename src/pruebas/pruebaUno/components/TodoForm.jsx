import { useState } from "react";

const TodoForm = ({ setTodo, todo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setTodo([
      ...todo,
      { id: crypto.randomUUID(), text: inputValue, completed: false },
    ]);
    setInputValue("");
    // Aquí puedes manejar el valor, como guardarlo en el estado global, enviarlo a un servidor, etc.
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputField">Escribe algo:</label>
        <input
          id="inputField"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default TodoForm;
