// Too much work setting up a mongo DB local server!
const TODOS = [{ completed: false, text: 'Workout'}]

// Resemble fake API calls
const GET_TODOS = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(TODOS)
        }, 2000)
    })
}

const ADD_TODO = (todo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([todo, ...TODOS])
        }, 2000)
    })
}

const UPDATE_TODO = (todo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const updatedTodos = TODOS
            resolve(updatedTodos)
        }, 2000)
    })
}

const DELETE_TODOS = (todoIds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const updatedTodos = TODOS
            resolve(updatedTodos)
        }, 2000)
    })
}

module.exports = {
    GET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODOS
}