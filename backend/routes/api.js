let express = require('express');
let router = express.Router();
let user = require('../controllers/user.js');

router.get('/getUserInfo', function(req, res, next) {
  user.getUserInfo(req, res);
});

router.get('/login', function(req, res, next) {
  user.login(req, res);
});

module.exports = router;
