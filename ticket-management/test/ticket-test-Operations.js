 var mocha = require('mocha');
 var assert = require('assert');
 var sinon=require('sinon');
  var tools= require("../db/index");
 var Ticket = require('../resources/ticket-operations');
 var expect= require("chai").expect;
 var idForOperation;
 describe('perform ticket crud operations', function () {
  it('should create an tickets with provided details', function (done) {
    let req = sinon.spy();
    let res = sinon.spy();
        res = { json : sinon.spy() }
        req = {
          "body":{
            "userName":"priya",
            "emailId":"kowsalyasenthamaraikannan@gmail.com",
            "ticketType":"case",
            "issueTitle":"method not found",
            "issueDescription":"unable to post or get data",
            "caseSeverity":"low"
          }
        }
    Ticket.createTicketDetails(req, res).then(function(createdTicketData){
      assert(createdTicketData.userName, req.body.userName);
      assert(createdTicketData.emailId, req.body.emailId);
      assert(createdTicketData.ticketType, req.body.ticketType);
      assert(createdTicketData.issueTitle, req.body.issueTitle);
      assert(createdTicketData.issueDescription, req.body.issueDescription);
      assert(createdTicketData.caseSeverity, req.body.caseSeverity);
     //idForOperation=createdUserData._id;
     // console.log('createUserDetails',idForOperation);
      console.log('createTicketDetails',createdTicketData);
      idForOperation = createdUserData._id
      //save this id for next test cases : createdUserData._id

      done();
    });

  });

  it('should check one ticket details with provided Id', function (done) {
    let req = sinon.spy();
    let res = sinon.spy();
        res = { json : sinon.spy(), send:sinon.spy()}
        req = {
          "params":{
            "id": '5be3181f5d7ce44c344d930d'
          }
        }
    Ticket.getOneTicketDetails(req,res).then(function(getOneTicketData){
      let id=getOneTicketData._id;
      // expect(id).to.be.equal(req.params.id);
      assert(id,req.params.id);

      console.log('getOneTicketDetails', getOneTicketData);
      done();
    })
  });


  it('should check all ticket data', function(done){
        let req=sinon.spy();
        let res=sinon.spy();
            res={json:sinon.spy(), send: sinon.spy()}
        Ticket.getAllTicketDetails(req,res).then(function(getAllTicketData){
          expect(getAllTicketData).to.have.length.above(0);
          console.log('done of getting all ticket details');
      //  console.log('getAllTicketDetails....', getAllTicketData);
          done();
        })
      });


      it('should Update ticket details with provided data', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { send : sinon.spy(), json: sinon.spy() }
            req = {
              "params":{
                "id": '5be3193b5d7ce44c344d930e'
              },
              "body":{
                "userName":"priya",
                "emailId":"priya12@gmail.com",
                "ticketType":"forum",
                "issueTitle":"method unable to find",
                "issueDescription":"unable to post or get data",
                "caseSeverity":"high"
                // "createdOn": new Date()
              }

            }
            Ticket.updateTicketDetails(req, res).then(function(updateTicketData){
           assert(updateTicketData.userName, req.body.userName);
           assert(updateTicketData.emailId, req.body.emailId);
           assert(updateTicketData.ticketType, req.body.ticketType);
           assert(updateTicketData.issueTitle, req.body.issueTitle);
           assert(updateTicketData.issueDescription, req.body.issueDescription);
           assert(updateTicketData.caseSeverity, req.body.caseSeverity);

        //User.updateUserDetails(req,res).then(function(updateUserData){
           console.log('updateTicketDetails....',updateTicketData);
         done();
        })
      });

      it('should delete ticket details with provided data', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json : sinon.spy(),send:sinon.spy() };
            req = {
              "params":{
                "id": '5be3193b5d7ce44c344d930f'
              }
            }
        Ticket.removeTicketDetails(req,res).then(function(removeTicketData){
          console.log('removeTicketDetails', removeTicketData);
          done();
       });
   });
});

