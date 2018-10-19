import * as types from './action_types';

export function loginRequest(user){
    return {type: types.LOGIN_REQUEST, user}
}
export function loginSuccess(user){
    return {type: types.LOGIN_SUCCESS, user}
}
export function loginFailure(user){
    return {type: types.LOGIN_FAILURE, user}
}

export function registerRequest(user){
    return {type: types.LOGIN_REQUEST, user}
}
export function registerSuccess(user){
    return {type: types.LOGIN_SUCCESS, user}
}
export function registerFailure(user){
    return {type: types.LOGIN_FAILURE, user}
}

export const loginUser = (user) => dispatch => {
    console.log(user);
    dispatch(loginSuccess(user));
};

export const registerUser = (user) => dispatch => {
    console.log(user);
    dispatch(registerSuccess(user));
};