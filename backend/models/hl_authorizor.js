'use strict';
module.exports = (sequelize, DataTypes) => {
  var hl_authorizor = sequelize.define('hl_authorizor', {
    id: DataTypes.NUMBER,
    uid: DataTypes.NUMBER,
    sid: DataTypes.NUMBER,
    authorize_type: DataTypes.STRING,
    expire_time: DataTypes.STRING
  }, {});
  hl_authorizor.associate = function(models) {
    // associations can be defined here
  };
  return hl_authorizor;
};