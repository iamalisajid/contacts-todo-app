import { combineReducers } from 'redux';
import UsersReducer from './reducer-users';
import TodosReducer from "./reducer-todos";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    user: UsersReducer,
    todos: TodosReducer,
    toastr: toastrReducer
});

export default rootReducer;