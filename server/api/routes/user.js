const express = require('express');
const router = express.Router();
const userController = require('../controller/user');



//singup 
router.post('/signup', userController.signUp);

module.exports = router;