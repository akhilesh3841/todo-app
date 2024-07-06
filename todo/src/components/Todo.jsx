// src/components/Todo.jsx
import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center">Todo List</h1>
        <div className="flex items-center my-5 bg-gray-200 rounded-full">
          <input
            className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-3"
            type="text"
            placeholder="Add your task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="border-none bg-blue-500 w-32 h-14 text-white text-lg font-medium cursor-pointer rounded-full"
          >
            Add+
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-4 bg-white shadow mb-2 rounded ${
                todo.isComplete ? 'line-through' : ''
              }`}
            >
              <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
