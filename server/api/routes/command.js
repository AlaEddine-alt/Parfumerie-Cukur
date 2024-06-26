const express = require('express');
const router = express.Router();
const commandController = require('../controller/command');
const auth = require('../../middleware/auth');
const rbacMiddleware = require('../../middleware/rbacMiddleware');


// GET all Commands
router.get('/',auth,rbacMiddleware.checkPermission('get_commands'), commandController.getAllCommands);   //est ce que ken ladmin ynajam yaamel get command ? 

// GET a specific command by ID
router.get('/:commandId',auth,rbacMiddleware.checkPermission('get_command'), commandController.getCommandById);

// POST a new command
router.post('/',auth, commandController.createCommand);

// PATCH/update a command by ID
router.patch('/:commandId',auth, commandController.updateCommand);

// DELETE a command by ID
router.delete('/:commandId',auth, commandController.deleteCommand);

module.exports = router; 