import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/userActions"
import TextInput from "../common/TextInput";
import PasswordInput from "../common/PasswordInput";

class Register extends Component {
    render() {
        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <TextInput
                                name="firstname"
                                label="First Name"

                            />
                        </div>
                        <div className="form-group">
                            <TextInput
                                name="lastname"
                                label="Last Name"
                            />
                        </div>
                        <div className="form-group">
                            <TextInput
                                name="username"
                                label="User Name"
                            />
                        </div>
                        <div className="form-group">
                            <PasswordInput
                                name="password"
                                label="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value="Register"
                                type="submit"
                                className="btn btn-primary"/>
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            username: event.target.username.value,
            password: event.target.password.value
        }
        this.props.registerUser(user);
    }
}


export default connect(null,{ registerUser })(Register);