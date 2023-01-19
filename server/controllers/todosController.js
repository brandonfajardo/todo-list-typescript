const {
    GET_TODOS,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODOS
} = require('../fake')

const getTodos = async (req, res) => {
    try {
        const todos = await GET_TODOS()
        // Add validation
        res.json(todos)
    } catch (error) {
        throw error
    }
}

const addTodo = async (req, res) => {
    try {
        const todos = await ADD_TODO()
        res.json(todos)
    } catch (error) {
        throw error
    }
}

const updateTodo = async (req, res) => {
    try {
        const todos = await UPDATE_TODO()
        res.json(todos)
    } catch (error) {
        throw error
    }
}

const deleteTodos = async (req, res) => {
    try {
        const todos = await DELETE_TODOS()
        res.json(todos)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodos
}