let models  = require('../models');

module.exports = {
  getServer: function (req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    models.hl_server.findAll({
      attributes: ['id', 'ip', 'name', 'os_type', 'os_version']
    }).then(function(response) {
      result.flag = 0;
      result.errorCode = 0;
      result.data = response;
      res.send(JSON.stringify(result));
    });

  },

  addServer: function (req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    let serverName = req.body.serverName;
    let IP = req.body.IP;
    let sshKey = req.body.sshKey;
    let osType = req.body.osType;
    let osVersion = req.body.osVersion;

    models.hl_server.create({
      'ip': IP,
      'name': serverName,
      'sshKey': sshKey,
      'os_type': osType,
      'os_version': osVersion,
    }).then(id => {
      if (id !== null) {
        result.flag = 0;
        result.errorCode = 0;
        result.data = id;
      }
      res.send(result);
    });
  },

  getServerById: function(req, res) {
    let result = {
      flag: 1,
      errorCode: 999,
      data: null
    };
    models.hl_server.findById(req.query.id).
    then(function(response) {
      result.flag = 0;
      result.errorCode = 0;
      result.data = response;
      res.send(JSON.stringify(result));
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