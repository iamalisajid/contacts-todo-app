import React from 'react'
import PropTypes from 'prop-types'

const TodoFooter = (props) => {
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos"/>
            </strong> Items Left
        </div>
    );
}

export default TodoFooter