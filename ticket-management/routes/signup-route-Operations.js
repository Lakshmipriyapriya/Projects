var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome ');
});

var signup = require('../resources/signup-operations');

router.post('/', function(req, res,next) {
  signup.signupDetails(req, res)
});
router.post('/login',function(req,res,next){
  signup.loginDetails(req,res)
});
module.exports = router;
