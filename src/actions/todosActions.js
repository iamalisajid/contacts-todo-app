import * as types from './action_types';
import {getTodos} from "../api/todosApi";

export const loadTodos = (todos) => ({type: types.FETCH_TODOS, payload: todos});

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}