import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/>
                    Take out the trash
                </label>
            </div>
        </li>
    );
}
export default TodoItem