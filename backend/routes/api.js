let express = require('express');
let router = express.Router();
let user = require('../controllers/user.js');
let server = require('../controllers/server.js');

router.get('/user/get', function(req, res, next) {
  user.getUserInfo(req, res);
});

router.post('/user/add', function(req, res, next) {
  user.addUser(req, res);
});

router.post('/login', function(req, res, next) {
  user.login(req, res);
});

router.post('/server/list', function(req, res, next) {
  server.getServer(req, res);
});

router.get('/server/get', function(req, res, next) {
  server.getServerById(req, res);
});

router.post('/server/add', function(req, res, next) {
  server.addServer(req, res);
});

router.post('/server/delete', function(req, res, next) {
  server.delServer(req, res);
});

router.post('/server/modify', function(req, res, next) {
  server.modifyServer(req, res);
});

router.get('/user/list', function(req, res, next) {
  user.listUsers(req, res);
});

router.get('/user/get', function(req, res, next) {
  user.getUser(req, res);
});

router.post('/user/add', function(req, res, next) {
  user.addUser(req, res);
});

router.post('/user/delete', function(req, res, next) {
  user.delUser(req, res);
});

router.post('/User/modify', function(req, res, next) {
  user.modifyUser(req, res);
});


module.exports = router;
