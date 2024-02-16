const express = require('express');
const router = express.Router();
const userController = require ('../controller/user');



//singup 
router.post ('/singup', userController.SignUp);

module.exports = router; 