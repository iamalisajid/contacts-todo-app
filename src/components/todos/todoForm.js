import React from 'react'

const TodosForm = (props) => {
    return (
        <form>
            <input type="text" className="form-control add-todo" placeholder="Add todo"/>
            <br></br>
            <button type="submit" className="btn btn-success">Mark All As Done</button>
            <hr></hr>
        </form>
    );
}

export default TodosForm