const fakeClient = require('../fake')

const getTodos = async (req, res) => {
    try {
        const todos = await fakeClient.GET_TODOS()
        return res.json(todos)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const addTodo = async (req, res) => {
    try {
        const { text } = req.body
        const todos = await fakeClient.ADD_TODO(text)
        return res.json(todos)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const updateTodo = async (req, res) => {
    try {
        const { todo } = req.body
        const todos = await fakeClient.UPDATE_TODO(todo)
        return res.json(todos)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const deleteTodos = async (req, res) => {
    try {
        const { id } = req.body
        const todoId = await fakeClient.DELETE_TODOS(id)
        return res.json(todoId)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodos
}