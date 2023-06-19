/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./app.css";

const URL_API = "http://localhost:3000";

const UsersTable = ({ users }) => {
  return (
    <table className="table">
      <tbody className="table-body">
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/users`)
      .then((res) => res.json())
      .then((data) => {
        // TODO: handle error
        if (!data) return;

        setUsers(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const userName = formData.get("user");

    //need to handle this error
    if (!userName) console.log("user required");

    const newUser = {
      name: userName,
      mail: `${userName}@mail.com`,
    };

    console.log({ ...newUser });

    fetch(`${URL_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // TODO: handle error
        if (!data) return;

        const usersCopy = [...users, data];
        setUsers(usersCopy);
      });
  };

  return (
    <>
      <header className="header">
        <h1>Users Crud</h1>
      </header>
      <main className="main">
        <form onSubmit={handleSubmit} className="form" id="form">
          <input type="text" name="user" />
          <button type="submit">Add</button>
        </form>
        <section>
          {users ? <UsersTable users={users} /> : <p>no users</p>}
        </section>
      </main>
    </>
  );
}

export default App;
