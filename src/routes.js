import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/user/login';
import Register from './components/user/register';
import Home from "./components/dashboard/home";
import Contacts from "./components/contacts/contacts";
import Todos from "./components/todos/todos";

const Routes = () => (
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/todos" component={Todos}/>
    </Switch>
);

export default Routes;