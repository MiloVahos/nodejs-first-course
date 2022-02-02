const { readDatabase, writeDatabase } = require('../dao/TasksDao')

const uuid = require('uuid')

const createTask = (task) => {
  const uniqueId = uuid.v4()
  const { description, dueDate } = task
  const newTask = {
    id: uniqueId,
    description: description,
    dueDate: dueDate,
    status: 'TO-DO'
  }
  writeDatabase(newTask)
  return newTask
}

const getTaskById = (id) => {
  const tasks = readDatabase()
  const task = tasks.find( task => task.id === id )
  if (task.status === 'ARCHIVED') res.status(404).json({ message: `The task with id ${id} was not found` })
  return task
}

module.exports = { createTask, getTaskById }