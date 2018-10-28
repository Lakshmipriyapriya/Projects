var express = require ('express');
var router = express.Router();
var bcrypt= require('bcrypt');
var jwt=require('jsonwebtoken');
var saltRounds=10;
var signup= require('../models/signup');
var config=require('../config/configJwt');
var ticket=require('./ticket-Operations');
router.post('/',function(req,res,next){
      let myOriginalData=req.body;
      let userPassword=myOriginalData.password;
      bcrypt.hash(userPassword,saltRounds,function(err,hashedPassword){
      myOriginalData.password=hashedPassword;
      signup.create(myOriginalData,function(err,data){
            if(err) return next(err);
            res.json(data);
      });
  });
});
router.post('/login',function(req,res,next){
      let userData=req.body;
      let email=req.body.email;
      let password=req.body.password;
  signup.findOne({email: userData.email},{password:userData.password},(err,user,next) => {
    hash=user.password
    if(err) return next(err);
    if(!err){
      bcrypt.compare(password,hash,function(err,result){
        if(result==false){
          res.send("Sorry!Invalid Account");
        }
        if(result==true){
          var token=jwt.sign({email:signup.email},config.secret);
          return res.send({token});
        }
      });
    }
  })
})
router.use('/ticket',ticket);
module.exports=router
