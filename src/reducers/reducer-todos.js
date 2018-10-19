import * as types from '../actions/action_types'

const initState = { todos: [], currentTodo: '' };

export default function TodosReducer(state = initState, action){
    debugger;
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                cureentTodo: '',
                todos: action.payload
            };
        case types.CURRENT_TODO:
            return{
                ...state,
                currentTodo: action.payload
            };
        case types.ADD_TODO:
            return{
                ...state,
                currentTodo: '',
                todos: state.todos.concat(action.payload)
            }
        default:
            return state
    }
}
