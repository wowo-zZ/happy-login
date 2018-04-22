'use strict';
module.exports = (sequelize, DataTypes) => {
  var hl_authorizor = sequelize.define('hl_authorizor', {
    uid: DataTypes.INTEGER,
    sid: DataTypes.INTEGER,
    authorize_type: DataTypes.STRING,
    expire_time: DataTypes.STRING
  }, {});
  hl_authorizor.associate = function(models) {
    // associations can be defined here
  };
  return hl_authorizor;
};