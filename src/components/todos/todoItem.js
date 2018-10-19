import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ key, name }) => {
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
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}
export default TodoItem