const express = require('express');
const taskController = require('../controller/user.cont');

const router = express.Router();

router.post('/create', taskController.createTask);
router.get('/all', taskController.getTasks);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;
