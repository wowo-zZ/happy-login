let models  = require('../models');

module.exports = {
  getUserInfo: function (req, res) {

    if (!req.cookies.user) {
      return '{}';
    }
    return req.cookies.user;
  }
};