var express=require('express');
var router = express.Router();
var category = require('../models/category');
router.post('/',function(req,res,next){
   category.create(req.body,function(err,data){
      if(err) return next(err)
      res.json(data);
  });
});
router.get('/',function(req,res,next){
  category.find(function(err,data){
     if(err) return next(err)
     res.json(data);
 });
});
router.get('/:id',function(req,res,next){
  category.findById(req.params.id,function(err,data){
     if(err) return next(err)
     res.json(data);
 });
});
router.put('/:id',function(req,res,next){
  category.findOneAndUpdate(req.params.id,req.body,function(err,data){
     if(err) return next(err)
     res.json(data);
 });
});
module.exports = router;
