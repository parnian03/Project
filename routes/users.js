var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const userCtrl = require('./user/user');

// router.post('/signup', userCtrl.signup);
// router.post('/login', userCtrl.login);

// module.exports = router;




