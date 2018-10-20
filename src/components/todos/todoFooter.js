import React from 'react'
import PropTypes from 'prop-types'

const TodoFooter = ({todosLeft}) => {
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos"/>
            </strong> Items Left: {todosLeft}
        </div>
    );
}
TodoFooter.propTypes = {
    todosLeft: PropTypes.number.isRequired
}
export default TodoFooter