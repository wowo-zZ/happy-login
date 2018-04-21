let mysql = require('mysql');
let mysqlConfig = require('../config/');

let env = process.env.NODE_ENV || 'development';
if (mysqlConfig[env]) {
  mysqlConfig = mysqlConfig[env];
}
exports.createMysqlPool = module.exports.createMysqlPool = function () {
  return mysql.createPool({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
  });
};