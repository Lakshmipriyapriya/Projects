var express = require('express');
var request = require('request');
var router = express.Router();

var category = require('../resources/category-Operations');

router.get('/',function(req,res,next){
     category.getAllCategoryDetails(req,res)
});

router.get('/:id',function(req,res,next){
    category.getOneCategoryDetails(req,res)
});

router.post('/',function(req,res){
    category.createCategoryDetails(req,res)
});

router.put('/:id',function(req,res){
    category.updateCategoryDetails(req,res)
});

module.exports=router;
