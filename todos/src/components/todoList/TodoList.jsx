import "./TodoList.css";
import { Todo } from "../Todo/Todo";

export const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos ? (
        todos.map(({ id, title, completed }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>no todos </p>
      )}
    </ul>
  );
};
