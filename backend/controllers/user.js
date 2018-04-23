let models  = require('../models');
let md5 = require('md5');


module.exports = {
  getUserInfo: function (req, res) {
    if (!req.session.user) {
      return '{}';
    }
    res.send(JSON.stringify(req.session.user));
  },

  login: function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    models.hl_user.findOne({
      attributes: ['username', 'account_name', 'pub_key'],
      where: {
        username: username,
        password: md5(password)
      }
    }).then(userInfo => {
      req.session.user = userInfo.dataValues;
      res.send(JSON.stringify(userInfo.dataValues));
    });
  }
};