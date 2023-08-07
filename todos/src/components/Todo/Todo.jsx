import "./Todo.css";

export const Todo = ({ id, completed, title, completeTodo, deleteTodo }) => (
  <li key={id} className="todo">
    <input
      type="checkbox"
      checked={completed}
      className="todo-checkbox"
      onClick={() => completeTodo(id)}
      onChange={() => completeTodo(id)}
    />
    <span
      className="todo-title"
      style={completed ? { textDecoration: "line-through" } : {}}
    >
      {title}
    </span>
    <button className="todo-delete" onClick={() => deleteTodo(id)}>
      &times;
    </button>
  </li>
);
