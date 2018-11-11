var Signup = require('../models/signup');
var bcrypt = require('bcrypt');
var jwt=require('jsonwebtoken');
var config= require('config');
var saltRounds = 10;
     var signupDetails=function(req,res,next) {
    //  var userDetails=req.body
      let myOriginalData=req.body;
      myOriginalData.tenantId = config.tenantId.id;
      let userPassword=myOriginalData.password;
      bcrypt.hash(userPassword,saltRounds,function(err,hashedPassword){
      myOriginalData.password=hashedPassword;
      // console.log('tenant id is...',myOriginalData.tenantId);
      Signup.create(myOriginalData,function(err,data,next){
            if(err) return err
            else{
            res.json(data);
            }
      });
  });
}
  var loginDetails= function(req,res){
      let userData = req.body;
         password=userData.password;
        return Signup.findOne({email: userData.email},function(err,data){
            hash=data.password;
            console.log('hash pw:',hash);
            if (err) return err;
            console.log('posted data:',userData);
            if (!err) {
              bcrypt.compare(password,hash,function(err,response){
                console.log('response is....',response)
                  if(response==false){
                    return res.json('invalid Password');
                  }
                  else{
                    console.log('successfully loged in')
                    var token=jwt.sign({email:userData.email},config.secretKey.secret);
                    return res.json({token});
                  }
              });
            }
          })
      }

exports.signupDetails=signupDetails;
exports.loginDetails=loginDetails;
