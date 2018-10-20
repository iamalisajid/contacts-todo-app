export const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'active':
            return todos.filter(t => !t.isComplete);
        case 'completed':
            return todos.filter(t => t.isComplete);
        default:
            return todos
    }
}
