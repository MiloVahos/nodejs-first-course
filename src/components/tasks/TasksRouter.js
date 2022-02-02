const { Router } = require('express') 
const { existsValidation } = require('../../middleware/notFound')
const { postTask, getTask } = require('./controllers/TasksController')

const router = Router()

router.post('/', postTask)
router.get('/:id', existsValidation, getTask)

module.exports = router
