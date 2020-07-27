const should = require('chai').should();
const { User } = require('../models/user')

describe('User', () => {
  describe('defaults', () => {
    let user = {}
    before(() => {
      user = new User({ email: 'emmaldini12@gmail.com' });
    })
    it('email is emmaldini12@gmail.com', () => {
      user.email.should.equal('emmaldini12@gmail.com');
    });
    it('has an authentication token', () => {
      user.authenticationToken.should.not.be.undefined;
    });
    it('has a pending status', () => {
      user.status.should.equal('pending');
    });
    it('has a created date', () => {
      user.createdAt.should.not.be.undefined;
    });
    it('has a signIn count of 0', () => {
      user.signInCount.should.equals(0);
    });
    it('has lastLogin', () => {
      user.lastLoginAt.should.not.be.undefined;
    });
    it('has currentLogin', () => {
      user.currentLoginAt.should.not.be.undefined;
    });
  })
})
