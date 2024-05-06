import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from "./actions/Action";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const [selectedTodo, setSelectedTodo] = useState(null);
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo({ id: Date.now(), text: newTodo }));
        setNewTodo('');
      }
    };
  
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };
  
    const handleUpdateClick = (todo) => {
      setSelectedTodo(todo);
      setNewTodo(todo.text);
      dispatch(removeTodo(todo.id));
    };
  
    const handleUpdateTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo({ id: selectedTodo.id, text: newTodo }));
        setNewTodo('');
        setSelectedTodo(null);
      }
    };
  
    return (
      <div>
        <label>Enter your todo:</label>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {selectedTodo ? (
          <button onClick={handleUpdateTodo}>Update Todo</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
        <h2>My todo list</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleUpdateClick(todo)}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
  