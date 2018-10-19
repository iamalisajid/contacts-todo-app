import React from 'react'
import PropTypes from 'prop-types'
import AddContacts from "./addContacts";
import ContactsList from "./listCotacts";

const Contacts = (props) => {
    return (
        <div>
            <div className="jumbotron container-fluid">
                <div style={"clear:both;"}>
                    <h3>Contacts</h3>
                </div>
            </div>
            <AddContacts/>
            <ContactsList/>
        </div>
    );
}

//Contacts.propTypes = {}

export default Contacts;