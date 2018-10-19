import React from 'react'
import TodoItem from "./todoItem";
import './todos.css';

const TodosList = (props) => {
    return (
            <ul id="sortable" className="list-unstyled">
               <TodoItem/>
            </ul>
    );
}

export default TodosList