import React, { Component } from 'react'
import { connect } from 'react-redux';
import TodoItem from "./TodoItem";
import './todos.css';
import {fetchTodos} from '../../actions/todosActions'

class TodosList extends Component {
    componentDidMount(){
        this.props.fetchTodos();
    }
    render() {
        console.log(this.props);
        return (
            <ul id="sortable" className="list-unstyled">
                {this.props.todos.todos.map(todos =>
                    <TodoItem name={todos.name} key={todos.id}/>)
                }
            </ul>
        );
    }
}
const mapStateToProps = (store) => {
    console.log(store);
    return {
        todos: store.todos
    }
}
export default connect(mapStateToProps, { fetchTodos })(TodosList)