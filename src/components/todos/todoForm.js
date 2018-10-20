import React from 'react'
import { PropTypes } from 'prop-types';

const TodosForm = ({currentTodo, handleInput, handleSubmit}) =>{
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   onChange={handleInput}
                   className="form-control add-todo"
                   value ={currentTodo}
                   placeholder="Add todo"/>
            <br/>
            <input type="submit" className="btn btn-success" value ="Submit"/>
            <hr/>
        </form>
    );
}

TodosForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default TodosForm;