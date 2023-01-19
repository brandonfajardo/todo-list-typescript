const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const todosController = require('./controllers/todosController')

app.use(cors())
app.use(bodyParser.json())

app.get('/todos', todosController.getTodos)
app.post('/todos', todosController.addTodo)
app.put('/todos', todosController.updateTodo)
app.delete('/todo', todosController.deleteTodos)

app.listen(8080, () => console.log('Server is running on port 8080'))