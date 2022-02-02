const express = require('express')

const mainRouter = express()

mainRouter.use('/task', require('./tasks/TasksRouter'))

module.exports = mainRouter