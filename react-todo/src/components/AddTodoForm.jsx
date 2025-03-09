import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodoText.trim() === "") return;

    onAddTodo({
      id: Date.now(),
      text: newTodoText,
      completed: false,
    });

    setNewTodoText("");
  };

  return (
    <form role="form" onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Enter a new todo"
        className="flex-grow p-2 border rounded-l-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
