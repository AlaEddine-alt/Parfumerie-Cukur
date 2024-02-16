const express = require('express');
const router = express.Router();
const userController = require ('../controller/user');



//singup 
router.post ('/SignUp', userController.SignUp);

module.exports = router; 