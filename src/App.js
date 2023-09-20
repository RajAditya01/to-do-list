import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Function to add a new to-do
  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  // Function to edit a to-do
  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };

  // Function to delete a to-do
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} editingTodo={editingTodo} editTodo={editTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        setEditingTodo={setEditingTodo}
      />
    </div>
  );
}

export default App;