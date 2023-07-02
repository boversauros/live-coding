/* eslint-disable react/prop-types */
import "./UsersTable.css";

export function UsersTable({ users, handleDelete }) {
  return (
    <table className="users-table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
