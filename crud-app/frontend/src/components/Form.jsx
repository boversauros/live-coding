/* eslint-disable react/prop-types */
import "./Form.css";

export function Form({ handleSubmit }) {
  return (
    <form className="users-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add user..." />
      <button type="submit"> Add </button>
    </form>
  );
}
