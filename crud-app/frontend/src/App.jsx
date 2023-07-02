import { useState, useEffect } from "react";
import { UsersTable } from "./components/UsersTable";
import { Form } from "./components/Form";
import "./App.css";

const API_URL = "http://localhost:3000";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        //handle error
        if (!data) return;
        setUsers(data);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const input = document.querySelector("input");
    // handle this error
    if (!input.value) return;

    const mail = `${input.value.toLowerCase().split(" ").join(".")}@mail.com`;

    const userData = {
      name: input.value,
      mail,
    };

    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        // handle error
        if (!data) return;

        const newUsers = [...users, data];
        setUsers(newUsers);
        input.value = "";
      });
  }

  function handleDelete(id) {
    fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    }).then((res) => {
      // handle Error
      if (!res.ok) return;

      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    });
  }

  return (
    <>
      <header>
        <h1>CRUD USERS</h1>
      </header>
      <main>
        <Form handleSubmit={handleSubmit} />
        {users.length > 0 ? (
          <UsersTable users={users} handleDelete={handleDelete} />
        ) : (
          <p>No users</p>
        )}
      </main>
    </>
  );
}

export default App;
