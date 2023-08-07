import { useEffect, useState } from "react";
import { TodoList } from "./components/todoList/TodoList";
import { Form } from "./components/Form/Form";
import "./App.css";

const todosMock = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Redux Saga",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTodos(todosMock);
  }, []);

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todos</h1>
      <Form addTodo={(todo) => setTodos([...todos, todo])} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
