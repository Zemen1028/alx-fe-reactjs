import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { FaCheck, FaTrash } from "react-icons/fa";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
  { id: 3, text: "Write tests", completed: true },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div
      className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
      data-testid="todo-list component"
      aria-label="todo-list component"
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <ul data-testid="todo-list" aria-label="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`
              flex items-center justify-between p-2 border-b 
              ${todo.completed ? "bg-green-50 line-through text-gray-500" : ""}
            `}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="flex-grow cursor-pointer flex items-center"
            >
              {todo.completed && <FaCheck className="mr-2 text-green-500" />}
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
              aria-label="Delete Todo"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center text-gray-600">
        {todos.filter((todo) => !todo.completed).length} items left
      </div>
    </div>
  );
}

export default TodoList;
