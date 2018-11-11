var mocha = require('mocha');
var test= require('supertest');
var expext = require('chai').expect
var assert= require('assert');
var app= require('../app');
var data= {
     "userName":"priya.k.v",
    "emailId":"priya@gmail.com",
    "ticketType":"case",
    "issueTitle":"method not found",
    "issueDescription":"unable to post or get data",
    "caseSeverity":"low"
  };
  describe('CRUD testing operations for  ticket details',function(){
      it('Api call for posting ticket details',function(done){
          test(app)
          .post('/ticket/')
          .set('Accept','application/json')
          .send(data)
          .expect(200)
          .end(function(err,res){
              if(err) return err
              else{
                  console.log('response is...',res.body);
                assert(res.body.TicketDetails.userName,data.userName);
                assert(res.body.TicketDetails.emailId,data.emailId);
                assert(res.body.TicketDetails.ticketType,data.ticketType);
                assert(res.body.TicketDetails.issueTitle,data.issueTitle);
                assert(res.body.TicketDetails.issueDescription,data.issueDescription);
                assert(res.body.TicketDetails.caseSeverity,data.caseSeverity);
                done();
              }
          })
      });
      it('api call for get one ticket details',function(done){
          test(app)
          .get('/ticket/5be319437063b51de4126d40')
          .set('Accept','application/json')
          .send(data)
          .expect(200,done);
      });
      it('api call for getting all ticket details',function(done){
        test(app)
        .get('/ticket/')
        .set('Accept','application/json')
        .send(data)
        .expect(200,done);
    });
    it('api call for updating ticket details',function(done){
        test(app)
        .put('/ticket/5be319517063b51de4126d41')
        .set('Accept','application/json')
        .send({
            "userName":"sai",
            "emailId":"sai@gmail.com",
            "ticketType":"case",
            "issueTitle":"method not found",
            "issueDescription":"unable to post or get data",
            "caseSeverity":"low"
          })
        .expect(200)
        .end(function(err,res){
            if(err) return err
            else{
                console.log('response is......',res.body);
                assert(res.body.message.userName,data.userName);
                assert(res.body.message.emailId,data.emailId);
                assert(res.body.message.ticketType,data.ticketType);
                assert(res.body.message.issueTitle,data.issueTitle);
                assert(res.body.message.issueDescription,data.issueDescription);
                assert(res.body.message.caseSeverity,data.caseSeverity);
                done();
            }
        })
    });
    it('api call for deleting ticket details',function(done){
        test(app)
        .delete('/ticket/5be319617063b51de4126d42')
        .set('Accept','application/json')
        .expect(200,done);
    });
  });

  var categoryData={
    "visiblity":"true",
    "primary":"priya",
    "secondery":"bhavani",
    "notes":"comments",
    "tag":"searching",
    "images":{"title":"image.png","createdBy":"priya"},
    "attachments":"files"
  }


  describe('CRUD testing operations for  category details',function(){
    it('Api call for posting category  details',function(done){
        test(app)
        .post('/category/')
        .set('Accept','application/json')
        .send(categoryData)
        .expect(200)
        .end(function(err,res){
            if(err) return err
            else{
                console.log('response is...',res.body);
              assert(res.body.Categeorydata.visiblity,categoryData.visiblity);  
              assert(res.body.Categeorydata.primary,categoryData.primary);
              assert(res.body.Categeorydata.secondery,categoryData.secondery);
              assert(res.body.Categeorydata.tag,categoryData.tag);
              assert(res.body.Categeorydata.images,categoryData.images);
              assert(res.body.Categeorydata.attachments,categoryData.attachments);
              done();
            }
        });
    });

    it('api call for get one category details',function(done){
        test(app)
        .get('/category/5be31e494f7f931d409be7f0')
        .set('Accept','application/json')
        .expect(200,done);
    });
    it('api call for getting all category details',function(done){
      test(app)
      .get('/category/')
      .set('Accept','application/json')
      .expect(200,done);
  });
  it('api call for updating category details',function(done){
      test(app)
      .put('/category/5be31e494f7f931d409be7f1')
      .set('Accept','application/json')
      .send({
        "visiblity":"true",
        "primary":"priya",
        "secondery":"bhavani",
        "notes":"comments",
        "tag":"searching",
        "images":{"title":"image.png","createdBy":"priya"},
        "attachments":"files"
         
        })
      .expect(200)
      .end(function(err,res){
          if(err) return err
          else{
              console.log('response for updating api category details***......',res.body);
              assert(res.body.Categeorydata.visiblity,categoryData.visiblity);
              assert(res.body.Categeorydata.primary,categoryData.primary);
              assert(res.body.Categeorydata.secondery,categoryData.secondery);
              assert(res.body.Categeorydata.notes,categoryData.notes);
              assert(res.body.Categeorydata.tag,categoryData.tag);
              assert(res.body.Categeorydata.images,categoryData.images);
              assert(res.body.Categeorydata.attachments,categoryData.attachments);
              done();
          }
      })
  });
});

var signupData= {
    "firstName" : "priya",
    "lastName" : "k.v",
    "role" : "user",
    "email" : "priya.k.v.12@gmail.com",
    "password" : "priya117"
 };
 describe('CRUD testing operations for  signup details',function(){
     it('Api call for posting signup details',function(done){
         test(app)
         .post('/signup/')
         .set('Accept','application/json')
         .send(signupData)
         .expect(200)
         .end(function(err,res){
             if(err) return err
             else{
                 console.log('response is...&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',res.body);
               assert(res.body.firstName,data.firstName);
               assert(res.body.lastName,data.lastName);
               assert(res.body.role,data.role);
               assert(res.body.email,data.email);
               assert(res.body.password,data.password);
               done();
             }
         });
     });
 });

 var loginData={
     "email":"priya.k.v.717@gmail.com",
     "password":"priya117"
 };
 describe('CRUD testing operations for login details',function(){
     it('should login with a given details',function(done){
         test(app)
         .post('/signup/login')
         .send(loginData)
         .expect(200,done);
     })
 })


  

 
