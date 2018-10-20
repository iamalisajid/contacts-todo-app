import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import TodoItem from "./todoItem";
import './todos.css';

const TodosList = ({ todos, toggleTodo, deleteTodo }) => {
        return (
            <ul id="sortable" className="list-unstyled">
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        isComplete={todo.isComplete}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />)
                }
            </ul>
        );
}

TodosList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default TodosList;
