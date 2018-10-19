import { combineReducers } from 'redux';
import UsersReducer from './reducer-users';

const rootReducer = combineReducers({
    user: UsersReducer
});

export default rootReducer;