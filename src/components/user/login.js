import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import PasswordInput from "../common/PasswordInput";
import { loginUser } from "../../actions/userActions";

class Login extends Component{
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <TextInput
                            name="username"
                            label="UserName"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <PasswordInput
                                label="Password"
                                name="password"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Submit"/>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }

     handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        this.props.loginUser(user);
    }
}

export default connect(null, { loginUser })(Login);
