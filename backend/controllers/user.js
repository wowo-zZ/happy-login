let models = require('../models');
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

  listUsers: function(req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    models.hl_user.findAll().then(users => {
      if (users != null) {
        result.flag = 0;
        result.errorCode = 0;
        result.data = users;
      }
      res.send(result);
    });
  },

  addUser: function (req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    let username = req.body.username;
    let password = req.body.password;
    let accountName = req.body.accountName;
    let pubKey = req.body.pubKey;

    models.hl_user.create({
      username: username,
      password: password,
      account_name: accountName,
      pub_key: pubKey
    }).then(id => {
      if (id !== null) {
        result.flag = 0;
        result.errorCode = 0;
        result.data = id;
      }
      res.send(result);
    });
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