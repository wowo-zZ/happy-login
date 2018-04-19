var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUserInfo', function(req, res, next) {
  res.send('{"uid":1,"username":"wowo"}');
});

module.exports = router;
