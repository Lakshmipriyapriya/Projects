var express = require('express');
var router= express.Router();
var Books=require('../models/Books');

router.get('/', function(req, res, next) {
  Books.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
    // res.send('connected');
  });
});
router.get('/:id', function(req, res, next) {
  Books.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
    // console.log("id is:",req.params.id);
  });
});
router.post('/', function(req, res, next) {
  Books.create(req.body, function (err,data) {
    if (err) return next(err);
     res.json(data);

  });
});
router.put('/:id', function(req, res, next) {
  Books.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
    console.log("posteddata:",data);
  });
});
router.delete('/:id', function(req, res, next) {
  Books.findByIdAndRemove(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports=router;
