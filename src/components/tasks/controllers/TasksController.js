const { createTask, getTaskById } = require('../services/TasksService')

const postTask = (req, res) => {
  const body = req.body
  const serviceResponse = createTask(body)
  const response = {
    status: 201, //Created
    message: 'New task was created',
    data: serviceResponse
  }
  res.json(response)
}

const getTasksList = (req, res) => {

}

const getTask = (req, res) => {
  const { id } = req.params
  const serviceResponse = getTaskById(id)
  const response = {
    status: 200,
    data: serviceResponse
  }
  res.json(response)
}

const updateTask = (req, res) => {
  
}

const deleteTask = (req, res) => {

}

module.exports = { postTask, getTasksList, getTask, updateTask, deleteTask }