const baseUrl = "http://localhost:3000/todos"

export const getTodos = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}
