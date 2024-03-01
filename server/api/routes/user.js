const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const auth = require('../../middleware/auth');
const rbacMiddleware = require('../../middleware/rbacMiddleware');




//getAllUsers
router.get('/',auth, userController.getAllUsers);
//getUserById
router.get('/:id',auth, userController.GetUserById);
//update
router.patch('/:id',auth, userController.updateUser);
//Delete
router.delete('/:id',auth,rbacMiddleware.checkPermission('delete_user'), userController.deleteUser);
//signUp 
router.post('/signup', userController.signUp);
//signIn
router.post('/signin', userController.signIn);






module.exports = router;
