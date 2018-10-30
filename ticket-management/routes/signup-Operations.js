var express = require ('express');
var router = express.Router();
var bcrypt= require('bcrypt');
var jwt=require('jsonwebtoken');
var config=require('config');
var saltRounds=10;
var signup= require('../models/signup');
var ticket=require('./ticket-Operations');
router.post('/',function(req,res,next){
    var userDetails=req.body

      let myOriginalData=req.body;
      myOriginalData.tenantId = config.tenantId.id;
      let userPassword=myOriginalData.password;

      bcrypt.hash(userPassword,saltRounds,function(err,hashedPassword){
      myOriginalData.password=hashedPassword;

      console.log('tenant id is...',myOriginalData.tenantId);
      signup.create(myOriginalData,function(err,data){
            if(err) return next(err);
            res.json(data);
      });
  });
});
function otp(){
  return Math.floor(Math.random() *Date.now()).toFixed(0);
 }
router.post('/login',function(req,res,next){
      let userData=req.body;
      // let email=req.body.email;
      let password=req.body.password;
  signup.findOne({email: userData.email},{password:userData.password},(err,user,next) => {
    hash=user.password
    if(err) return next(err);
    if(!err){
      bcrypt.compare(password,hash,function(err,result){
        if(result==false){
          // res.send("Sorry!Invalid Account");

          var sampleotp=otp();
          console.log('otp values is..',sampleotp);
          var otplength= sampleotp.length;
          console.log('total numbers are:',otplength);
          res.send("Sorry!Invalid Account!! " + " Otp to change your password "+sampleotp);
        }
        if(result==true){
          var token=jwt.sign({email:signup.email},config.secretKey.secret);
          return res.send({token});
        }
      });
    }
  });
});
router.use('/ticket',ticket);
module.exports=router
