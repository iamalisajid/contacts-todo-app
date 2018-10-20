import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as todoActions from "../../actions/todosActions";
import { getVisibleTodos } from '../filters/filter'

import TodosForm from "./todoForm";
import TodosList from "./todoList";
import TodoFooter from "./todoFooter";
import './todos.css';

class Todos extends Component  {
    componentDidMount() {
        this.props.actions.fetchTodos();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.saveTodo(this.props.currentTodo);
    }


    handleInput = (event) => {
        event.preventDefault();
        this.props.actions.updateField(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="todolist not-done">
                            <h1>Todos</h1>
                            <TodosForm
                                currentTodo={this.props.currentTodo}
                                handleInput={this.handleInput}
                                handleSubmit={this.handleSubmit}
                            />
                            <TodosList
                                todos={ this.props.activeTodos }
                                toggleTodo={this.props.actions.toggleTodo}
                                deleteTodo={this.props.actions.deleteTodo}
                            />
                            <TodoFooter
                                todosLeft={this.props.activeTodosCount}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="todolist">
                            <h1>Already Done</h1>
                            <TodosList
                                todos={ this.props.completedTodos }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        currentTodo: state.todos.currentTodo,
        activeTodos: getVisibleTodos(state.todos.todos, "active"),
        completedTodos: getVisibleTodos(state.todos.todos, "completed"),
        activeTodosCount: getVisibleTodos(state.todos.todos, "active").length
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos);