import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => {

    if (isComplete === false) {
        return (
            <li className="ui-state-default">
                <span className='delete-item'>
                    <button onClick={() => deleteTodo(id)}>X</button>
                </span>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={isComplete}
                            onChange={() => toggleTodo(id)}
                        />
                        {name}
                    </label>
                </div>
            </li>
        );
    }
    else {
        return (
            <ul id="done-items" className="list-unstyled">
                <li>
                      <span className='delete-item'>
                          <button onClick={() => deleteTodo(id)}>X</button>
                      </span>
                    {name}
                </li>
            </ul>
        )
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}
export default TodoItem