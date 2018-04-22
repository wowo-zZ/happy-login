'use strict';
module.exports = (sequelize, DataTypes) => {
  var hl_user = sequelize.define('hl_user', {
    id: DataTypes.NUMBER,
    username: DataTypes.STRING,
    account_name: DataTypes.STRING,
    pub_key: DataTypes.STRING
  }, {});
  hl_user.associate = function(models) {
    // associations can be defined here
  };
  return hl_user;
};