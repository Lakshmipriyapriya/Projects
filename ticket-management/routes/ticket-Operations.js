var express = require('express');
var router= express.Router();
var nodemailer=require('nodemailer');
var ticket=require('../models/ticket');
var config=require('../config/email');
var mailer= nodemailer.createTransport({
  service : 'Gmail',
  auth : {
    user : config.userId ,
    pass : config.password
  }
});
var mailOptionsUser={
  from:'kvpriya9787@gmail.com',
  to:'',
  subject:'Ticket creation',
  text:''
}

var mailOptionsAdmin={
  from:'kvpriya9787@gmail.com',
  to:'lakshmipriya.k.v.1997@gmail.com',
  subject:'Ticket creation',
  text:''
}

var mailOptionsCategory={
  from:'kvpriya9787@gmail.com',
  to:'',
  subject:'Ticket creation',
  text:''
}


function sendMailToUser(email,id,name){
  mailOptionsUser.to=email;
  mailOptionsUser.text= 'Your Ticket is created successfully id is '+id + ' Your issue will be fixed soon Thanks '+ `${name}`;
  mailer.sendMail(mailOptionsUser,function(err,data){
    console.log('mail details is...',mailOptionsUser);
    if(err)
        console.log('err is...',err);
    else{
      console.log('send mail successfully',data);
      // res.send('send mail successfully',data);
    }
    mailer.close();
  });
  return('ticket created');
}

function sendMailToAdmin(id,username){
  mailOptionsAdmin.text='new ticket created by '+username+ ' ' +' id is '+id;
  mailer.sendMail(mailOptionsAdmin,function(err,data){
    console.log('mail details is...',mailOptionsAdmin);
    if(err)
        console.log('err is...',err);
    else{
      console.log('send mail successfully',data);
      // res.send('send mail successfully',data);
    }
    mailer.close();
  });
  return('ticket created');
}

function sendMailToCategory(severity,id,username){
  console.log('sevirity...',severity);
  if(severity=='high'){
  mailOptionsCategory.to='bavabhavani1997@gmail.com';
  mailOptionsCategory.text='new ticket created by '+username+ ' ' +' id is '+id
  +'Please fix the issue as soon as possible';
  }
  else{
      mailOptionsCategory.to='newticketuser@gmail.com';
      mailOptionsCategory.text='new ticket created by '+username+ ' ' +' id is '+id + ' Please fix the issue as soon as possible';
  }
  mailer.sendMail(mailOptionsCategory,function(err,data){
    console.log('mail details is...',mailOptionsCategory);
    if(err)
        console.log('err is...',err);
    else{
      console.log('send mail successfully',data);
      // res.send('send mail successfully',data);
    }
    mailer.close();
  });
  return('ticket created');
}


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
          else{
           var sendDetailsToUser= sendMailToUser(data.emailId,data._id,data.userName);
           var sendDetailsToAdmin=sendMailToAdmin(data._id,data.userName);
           var sendDetailsToCategory=sendMailToCategory(data.caseSeverity,data._id,data.userName);

           console.log('sendDetailsToUser...',sendDetailsToUser);
           console.log('sendDetailsToUser...',sendDetailsToCategory);
           console.log('sendDetailsToAdmin...',sendDetailsToAdmin);
           res.sendStatus(200);

          }
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
