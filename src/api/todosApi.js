const baseUrl = "http://localhost:3000/todos"

class TodosApi {
    static getTodos = () => {
        return fetch(baseUrl)
            .then(res => res.json())
    }

    static createTodo = (name) => {
        return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, isComplete: false})
        })
            .then(res => res.json())
    }

    static updateTodo = (todo) => {
        return fetch(`${baseUrl}/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
    }
    static deleteTodo = (id) => {
        return fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export default TodosApi;

