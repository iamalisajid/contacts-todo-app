import * as types from './action_types';
import TodosApi from "../api/todosApi";
import {toastr} from 'react-redux-toastr'

const loadTodos = (todos) => ({type: types.FETCH_TODOS, payload: todos});
const addTodo = (todo) => ({type: types.ADD_TODO, payload: todo});
const updateTodo = (todo) => ({type: types.UPDATE_TODO, payload: todo})
export const removeTodo = (id) => ({type: types.TODO_REMOVE, payload: id})
export const updateField = (field) => ({type: types.CURRENT_TODO, payload: field});


export const fetchTodos = () => {
    return (dispatch) => {
        TodosApi.getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}
export const saveTodo = (todo) => {
    return (dispatch) => {
        TodosApi.createTodo(todo).then(res =>{
            toastr.success("Success", "Added Succesfully");
            dispatch(addTodo(res))
        }).catch(error => {
            toastr.error("Error!", "Something went wrong...");
        })
    }
}
export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        const {todos} = getState().todos
        const todo = todos.find(t => t.id === id)
        const toggled = {...todo, isComplete: !todo.isComplete}
        TodosApi.updateTodo(toggled)
            .then(res => dispatch(updateTodo(res)))
    }
}
export const deleteTodo = (id) => {
    return (dispatch) => {
        TodosApi.deleteTodo(id)
            .then(() => {
                dispatch(removeTodo(id))
                toastr.success("Success", "Removed Succesfully");
            }).catch(error => {
                toastr.error("Error!", "Something went wrong...");
            })
    }
}