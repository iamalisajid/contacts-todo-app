import { combineReducers } from 'redux';
import UsersReducer from './reducer-users';
import TodosReducer from "./reducer-todos";

const rootReducer = combineReducers({
    user: UsersReducer,
    todos: TodosReducer
});

export default rootReducer;