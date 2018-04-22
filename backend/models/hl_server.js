'use strict';
module.exports = (sequelize, DataTypes) => {
  var hl_server = sequelize.define('hl_server', {
    id: DataTypes.NUMBER,
    ip: DataTypes.STRING,
    name: DataTypes.STRING,
    os_type: DataTypes.STRING,
    os_version: DataTypes.STRING
  }, {});
  hl_server.associate = function(models) {
    // associations can be defined here
  };
  return hl_server;
};