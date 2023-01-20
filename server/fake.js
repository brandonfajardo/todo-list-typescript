const { v4: uuidv4 } = require('uuid');

// Too much work setting up a mongo DB local server!
// Mutate this array
let TODOS = []

// Resemble fake API calls
const GET_TODOS = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(TODOS)
        }, 1300)
    })
}

const ADD_TODO = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const id = uuidv4()
            const todo = { id, text, completed: false }

            TODOS.unshift(todo)
            resolve(todo)
        }, 1300)
    })
}

const UPDATE_TODO = (todo) => {
    return new Promise((resolve, reject) => {
        const updatedTodos = TODOS.map((todoItem) => {
            return todoItem.id === todo.id
                ? { ...todo}
                : todoItem
        })

        TODOS = updatedTodos
        resolve(todo)
    })
}

const DELETE_TODO = (id) => {
    return new Promise((resolve, reject) => {
        const updatedTodos = TODOS.filter((todo) => todo.id !== id)

        TODOS = updatedTodos
        resolve(id)
    })
}

module.exports = {
    GET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
}