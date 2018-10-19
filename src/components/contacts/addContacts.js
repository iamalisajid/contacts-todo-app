import React from 'react'
import PropTypes from 'prop-types'
import TextInput from "../common/TextInput";

const AddContacts = (props) => {
    return (
        <div>
            <TextInput label="Name" name="name"/>
        </div>

    );
}

//AddContacts.propTypes = {}

export default AddContacts;