const Role = require('./role'); 


class Permission {
    constructor() {
      this.permission = [];
    }
  
  getPermissionsByRoleName(roleName) {

      const userRoles = new Role();
      const role = userRoles.role.find((r) => r.name === roleName);
      return role ? role.permissions : [];
    }
  }
  module.exports = Permission;