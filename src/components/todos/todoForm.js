import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateField, saveTodo } from '../../actions/todosActions';

class TodosForm extends Component{
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    };

    handleInputChange =(event) => {
        this.props.updateField(event.target.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       onChange={this.handleInputChange}
                       className="form-control add-todo"
                       value ={this.props.currentTodo}
                       placeholder="Add todo"/>
                <br/>
                <input type="submit" className="btn btn-success" value ="Submit"/>
                <hr/>
            </form>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        currentTodo: store.todos.currentTodo
    }
}

export default connect(mapStateToProps,{updateField, saveTodo})(TodosForm);