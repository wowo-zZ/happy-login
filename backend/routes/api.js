let express = require('express');
let router = express.Router();
let user = require('../controllers/user.js');
let server = require('../controllers/server.js');

router.get('/user/get', function(req, res, next) {
  user.getUserInfo(req, res);
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

module.exports = router;
