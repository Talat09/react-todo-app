import React, { useState } from 'react';
import './TodoApp.css'
function TodoApp() {
    const [todos, setTodos] = useState([
        { text: 'Learn React', isCompleted: false },
        { text: 'Build a todo app', isCompleted: false },
        { text: 'Deploy the app', isCompleted: false },
    ]);

    function addTodo(text) {
        setTodos([...todos, { text, isCompleted: false }]);
    }

    function completeTodo(index) {
        setTodos(
            todos.map((todo, i) => {
                if (i === index) {
                    return {
                        ...todo,
                        isCompleted: true
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(index) {
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return (
        <div className='todo'>
            <h1 className='Title'>Todo App</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(e.target.elements.todo.value);
                e.target.elements.todo.value = '';
            }}>
                <input id='add-field' type="text" name="todo" placeholder="Add a todo" />
                <button id='add' type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</span>
                        <button className='complete-btn' onClick={() => completeTodo(index)}>Complete</button>
                        <button className='delete' onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
