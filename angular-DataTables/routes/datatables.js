var express = require('express');
var router= express.Router();
var Books=require('../models/Books');



router.get('/', function(req, res, next) {
  Books.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports=router;
