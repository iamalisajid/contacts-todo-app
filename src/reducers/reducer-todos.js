import * as types from '../actions/action_types'

const initState = { todos: [], currentTodo: '' };

export default function TodosReducer(state = initState, action){
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                currentTodo: '',
                todos: state.todos.concat(action.payload)
            }
        default:
            return state
    }
}
