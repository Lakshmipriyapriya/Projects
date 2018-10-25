var express = require('express');
var router= express.Router();
var jwt = require('jsonwebtoken');
var Books=require('../models/Books');
var usersData = require ('../models/user');
var config= require('../config/config');
var data= require ('../models/dataTable');
var passport=require('passport');
router.use(passport.initialize());
passport.serializeUser((user,done)=>  {
  done(null,user.id);

})

router.get('/oauthentication',passport.authenticate('google',{scope:['profile','email']}));
console.log('logging in');
router.get('/authentication',passport.authenticate('google',{ failureRedirect: '/login' }),
function(req,res){
  let token=req.authInfo;
  console.log('oauth token is:',token);
  // res.setHeader("Access-Control-Allow-Origin:*");
  res.send(token);
  console.log('token.....',token)


// res.redirect('http://localhost:4200/books');
// console.log('login to google',res);
console.log('response data  is:',req.authInfo);

});

router.get('/', function(req, res, next) {
  Books.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
    // res.send('connected');
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

router.post('/datatables', function(req, res, next) {
  data.create(req.body, function (err,data) {
    if (err) return next(err);
     res.json(data);

  });
});

router.get('/datatables',function(req,res,next){
data.find(function(err,data){
if(err) return next(err);
res.json(data);
});
});

router.post('/signup',function(req,res,next){
usersData.create(req.body,function(err,data){
if(err) return next(err);
 res.json(data);
});
});

router.post('/login',(req,res)=>{
  let userData = req.body;

  usersData.findOne({email: userData.email}, (err, user,next) => {
    if (err) return err;
    console.log('posted data:',userData);
    if (!err) {
      if(user.password!==userData.password){
        return res.send('invalid Password');
        alert('enter valid password');
      }
      else{
        console.log('successfully loged in')
        var token=jwt.sign({email:usersData.email},config.secret);
        return res.send({token});
      }
    }
 });
});
router.get('/:id', function(req, res, next) {
    Books.findById(req.params.id, function (err, data) {
      if (err) return next(err);
      res.json(data);
      // console.log("id is:",req.params.id);
    });
  });
module.exports=router;
