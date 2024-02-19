const express = require('express');
const router = express.Router();
const userController = require('../controller/user');



//getAllUsers
router.get('/', userController.getAllUsers);
//getUserById
router.get('/:id', userController.GetUserById);
//signUp 
router.post('/signup', userController.signUp);
//update
router.patch('/:id', userController.updateUser);
//Delete
router.delete('/:id', userController.deleteUser);
//signIn
router.post('/signin', userController.signIn);






module.exports = router;
