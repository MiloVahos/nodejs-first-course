const express = require('express')
const mainRouter = require('./src/components/MainRouter')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('', mainRouter)


// Three layers model
// Route - Controller -> Unwrap the request
  // Extract the body and the params
  // Run validations
  // Prepare response - execute the response
// Service - Bussiness Logic
// DAO - Data Access Object - Accesing the data 
  // ORM

/*
app.get('/list', (req, res) => {
  // Return the complete list
  res.json(tasks.find(task => task.status !== 'ARCHIVED'))
})

app.get('/:id', existsValidation, (req, res) => {
  
})

app.put('/:id', existsValidation, (req, res) => {
  // PUT AND PATCH
  const { id } = req.params
  const task = JSON.parse( JSON.stringify(tasks.find( task => task.id === id )) )
  const { description, dueDate } = req.body
  task.description = description
  task.dueDate = dueDate
  res.json(task)
})

app.delete('/:id', existsValidation, (req, res) => {
  const { id } = req.params
  const task = tasks.find( task => task.id === id )
  task.status = 'ARCHIVED'
  res.json({ message: 'Task was deleted' })
})
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})