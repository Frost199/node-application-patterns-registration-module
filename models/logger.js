const assert = require('assert');
class Logger {
  constructor (args) {
    assert.ok(args.subject && args.entry && args.userId, 'Need subject, entry and user id');
    this.subject = args.subject;
    this.entry = args.entry;
    this.userId = args.userId;
    this.createdAt = new Date();
  }
}

module.exports.Logger = Logger;
