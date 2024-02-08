const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Command = require('../models/command');
const commandController = require('../controller/command');

// GET all Commands
router.get('/', commandController.getAllCommands);

// GET a specific command by ID
router.get('/:commandId', commandController.getCommandById);

// POST a new command
router.post('/', commandController.createCommand);

// PATCH/update a command by ID
router.patch('/:commandId', commandController.updateCommand);

// DELETE a command by ID
router.delete('/:commandId', commandController.deleteCommand);

module.exports = router; 