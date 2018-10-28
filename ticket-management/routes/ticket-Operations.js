var express = require('express');
var router= express.Router();
var ticket=require('../models/ticket');
router.get('/',function(req,res,next){
  ticket.find(function(err,data){
      if(err) return next(err);
      res.json(data);
   });
})
router.get('/:id',function(req,res,next){
  ticket.findById(req.params.id, function(err,data){
      if(err) return next(err);
      res.json(data);
   });
})
router.post('/',function(req,res,next){
    ticket.create(req.body, function(err,data){
        if(err) return next(err);
        res.json(data);
     });
})
router.put('/:id',function(req,res,next){
  ticket.findOneAndUpdate( req.params.id,req.body, function(err,data){
      if(err) return next(err);
      console.log('prenting data is....',data);
      res.json(data);
   });
});
router.delete('/:id',function(req,res,next){
  ticket.findByIdAndRemove( req.params.id, function(err,data){
      if(err) return next(err);
      console.log('data is....',data);
      res.send('data deleted');
   });
});
module.exports=router;
