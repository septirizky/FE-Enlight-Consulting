import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Perencanaan ", completed: false },
    { id: 2, task: "Desain ", completed: false },
    { id: 3, task: "Pengembangan Frontend ", completed: false },
    { id: 4, task: "Pengembangan Backend", completed: false },
    { id: 5, task: "Pengembangan Fitur Khusus ", completed: false },
    { id: 6, task: "Testing & Debugging ", completed: false },
    { id: 7, task: "Optimisasi ", completed: false },
    { id: 8, task: "Deployment ", completed: false },
    { id: 9, task: "Maintenance ", completed: false },
  ]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-3xl text-center font-bold mb-6 text-yellow-500">
        TO DO LIST
      </h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className={`h-6 w-6 rounded-lg mr-4 border-4 ${
                todo.completed ? "border-green-500" : "border-pink-500"
              }`}
            />
            <span
              className={`flex-1 text-xl ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.task}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
