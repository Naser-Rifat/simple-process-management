const express = require('express');
const router = express.Router();
const { getAllProcesses,getSingleProcesses, createProcess, deleteProcess } = require('../controller/processController');

router.get('/get-all', getAllProcesses);  // get all process
router.get('/get-single/:id', getSingleProcesses); // get single process
router.post('/create-process', createProcess); // create process
router.delete('/delete-process/:pid', deleteProcess); // delete process

module.exports = router;
