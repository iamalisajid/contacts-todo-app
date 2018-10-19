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
}

export default TodosApi;

