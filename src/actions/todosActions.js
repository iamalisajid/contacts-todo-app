import * as types from './action_types';
import TodosApi from "../api/todosApi";

const loadTodos = (todos) => ({type: types.FETCH_TODOS, payload: todos});
export const updateField = (field) => ({type: types.CURRENT_TODO, payload: field});
const addTodo = (field) => ({type: types.ADD_TODO, payload: field});

export const fetchTodos = () => {
    return (dispatch) => {
        TodosApi.getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}
export const saveTodo = (name) => {
    alert(name);
    return (dispatch) => {
        TodosApi.createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}