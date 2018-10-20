import * as types from '../actions/action_types'

const initState = { todos: [], currentTodo: '', activeTodos: 0 };

export default function TodosReducer(state = initState, action){
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
                activeTodos: action.payload.filter(t => !t.isComplete)
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
        case types.UPDATE_TODO:
            return{
                ...state,
                todos: state.todos
                    .map(todo=>todo.id === action.payload.id ? action.payload : todo)
            }

        case types.TODO_REMOVE:
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== action.payload)
            }
        default:
            return state
    }
}
