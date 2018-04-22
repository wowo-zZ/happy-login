'use strict';
module.exports = (sequelize, DataTypes) => {
  var hl_authorized_dir = sequelize.define('hl_authorized_dir', {
    uid: DataTypes.INTEGER,
    sid: DataTypes.INTEGER,
    dirs: DataTypes.STRING
  }, {});
  hl_authorized_dir.associate = function(models) {
    // associations can be defined here
  };
  return hl_authorized_dir;
};