let models  = require('../models');

module.exports = {
  getUserInfo: function (req, res) {
    models.hl_server.create({
      ip: '127.0.0.1',
      name: 'test',
      os_type: 'centos',
      os_version: '6.9'
    });
  }
};