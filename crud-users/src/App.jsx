import { useState, useEffect } from "react";
import { UsersTable } from "./components/UsersTable/UsersTable";
import { useFetch } from "./hooks/useFetch";
import { parseUsers } from "./utils/parseUsers";
import { API_URL } from "./constants/api";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const { data, error, loading } = useFetch(`${API_URL}/?results=10`);

  const deleteUsers = (id) => {
    if (!id) return;
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  useEffect(() => {
    if (data && data.results) {
      const parsedUsers = parseUsers(data.results);
      setUsers(parsedUsers);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <header>
        <h1>Users</h1>
      </header>
      <main className="users">
        {users.length > 0 ? (
          <UsersTable users={users} onDelete={deleteUsers} />
        ) : (
          <p>No users</p>
        )}
      </main>
    </>
  );
}

export default App;
