import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]); // Lưu danh sách công việc
  const [todoInput, setTodoInput] = useState(''); // Lưu công việc mới nhập
  const [isEditing, setIsEditing] = useState(false); // Trạng thái sửa
  const [currentTodo, setCurrentTodo] = useState({}); // Công việc hiện tại được sửa

  // Thêm công việc mới
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoInput }]);
      setTodoInput(''); // Reset ô nhập sau khi thêm
    }
  };

  // Xóa công việc
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Chuẩn bị sửa công việc
  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setTodoInput(todo.text);
  };

  // Lưu thay đổi sau khi sửa
  const saveTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: todoInput } : todo
      )
    );
    setTodoInput('');
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder=""
      />

      {isEditing ? (
        <button onClick={saveTodo}>Save</button>
      ) : (
        <button onClick={addTodo}>Add</button>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
