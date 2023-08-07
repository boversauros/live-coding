import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

export const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      id: uuidv4(),
      title: value,
      completed: false,
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todos-form">
      <input
        type="text"
        name="todo"
        placeholder="Add something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
