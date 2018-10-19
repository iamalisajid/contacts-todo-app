import React from 'react'
import './todos.css';
import TodosForm from "./TodoForm";
import TodosList from "./TodoList";
import TodoFooter from "./TodoFooter";

const Todos = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <TodosForm/>
                        <TodosList/>
                        <TodoFooter/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" className="list-unstyled">
                            <li>Some item
                                <button className="remove-item btn btn-default btn-xs pull-right">
                                    <span className="glyphicon glyphicon-remove"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Todos