let express = require('express');
let router = express.Router();
let user = require('../controllers/user.js');

router.get('/getUserInfo', function(req, res, next) {
  res.send(user.getUserInfo(req, res));
});

module.exports = router;
