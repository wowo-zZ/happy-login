let models  = require('../models');
let md5 = require('md5');

module.exports = {
  getUserInfo: function (req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    if (req.session.user) {
      result.flag = 0;
      result.errorCode = 0;
      result.data = req.session.user;
    }
    res.send(JSON.stringify(result));
  },

  login: function (req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    let username = req.body.username;
    let password = req.body.password;
    models.hl_user.findOne({
      attributes: ['username', 'account_name', 'pub_key'],
      where: {
        username: username,
        password: md5(password)
      }
    }).then(userInfo => {
      if (userInfo !== null) {
        req.session.user = userInfo.dataValues;
        result.flag = 0;
        result.errorCode = 0;
        result.data = req.session.user;
      }
      res.send(result);
    });
  }
};