import * as types from '../actions/action_types';

const initialState = {};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log('logged in');
            return {
                loggedIn: true,
                user: action.user
            };
        case types.REGISTER_SUCCESS:
            console.log('Registered.');
            return {};
        default:
            return state
    }
}