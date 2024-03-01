const rolejson = require('../../config/roles.json');

class Role {
  constructor() {
    this.role = rolejson.roles;
  }

  getRoleByName(name) {
    return this.role.find((element) => element.name === name);
  }

  getRoles() {
    return this.role;
  }
}

module.exports = Role;