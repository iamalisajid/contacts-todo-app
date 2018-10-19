import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ id, name }) => {
    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/>
                    {name}
                </label>
            </div>
        </li>
    );
}

TodoItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired

}
export default TodoItem