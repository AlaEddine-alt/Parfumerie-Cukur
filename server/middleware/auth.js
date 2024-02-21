const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken._id;      //userId = the authenticated user's id
    if (req.body._id && req.body._id !== userId) {
      throw 'Invalid user ID';
    } else {
      console.log(userId);
      next(); 
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};