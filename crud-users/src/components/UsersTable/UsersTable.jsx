import "./usersTable.css";

export const UsersTable = ({ users, onDelete }) => {
  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img src={user.avatar} alt={user.name} />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
