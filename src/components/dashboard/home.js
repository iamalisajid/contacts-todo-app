import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <p>Welcome User</p>
            <Link to="/contacts"  className="btn btn-primary">Contacts</Link>
            <Link to="/todos" className="btn btn-danger">Todos</Link>
        </div>
    );
}

//Home.propTypes = {}

export default Home;