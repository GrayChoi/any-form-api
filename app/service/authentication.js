const bcrypt = require('bcrypt');

module.exports = app => {
  const pwd = securePassword();
  const saltRounds = 10;
  class Authentication extends app.Service {
    async createUserWithEmailAndPassword(email, password) {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          // Store hash, salt, and email to db
        });
      });
    }
    async authenticate(password) {

    }
  }
  return Authentication;
};
