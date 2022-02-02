const { readDatabase } = require('../components/tasks/dao/TasksDao')

function existsValidation (req, res, next) {
  const { id } = req.params
  console.log(id)
  const tasks = readDatabase()
  const task = tasks.find( task => task.id === id )
  console.log(task)
  if (!task) res.status(404).json({ message: `The task with id ${id} was not found` })
  next()
}

module.exports = { existsValidation }