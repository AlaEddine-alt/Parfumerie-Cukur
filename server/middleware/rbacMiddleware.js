const Role = require('../api/models/role');
const Permissions = require('../api/models/permission');
const jwt = require('jsonwebtoken');


// Check if the user has the required permission for a route
exports.checkPermission = (permission) => {
  return (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userRole = decodedToken.role;
    const userPermissions = new Permissions().getPermissionsByRoleName(userRole);
    if (userPermissions.includes(permission)) {
      return next();
    } else {
      return res.status(403).json({ error: 'Access denied' });
    }
  };
};