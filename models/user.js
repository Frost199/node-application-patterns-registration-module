const assert = require('assert');
const utility =  require('../lib/utility');
class User {
  constructor (args) {
    assert.ok(args.email, 'Email is required')
    this.email = args.email;
    this.createdAt = args.createdAt || new Date();
    this.status = args.status || 'pending';
    this.signInCount = args.signInCount || 0;
    this.lastLoginAt = args.lastLoginAt || new Date();
    this.currentLoginAt = args.currentLoginAt || new Date();
    this.authenticationToken = args.authenticationToken || utility.randomString(24);
  }
}

module.exports.User = User;
