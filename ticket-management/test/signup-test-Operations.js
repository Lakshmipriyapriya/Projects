var mocha = require('mocha');
var assert = require('assert');
var sinon=require('sinon');
var tools= require("../db/index");
var signup = require('../resources/signup-operations');
var expect= require("chai").expect;
var arr = new Array();

describe('should create signup details',function(){
    it('should  signup with provided details', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            res = { json : sinon.spy() }
                req = {
                    "body":{
                      "firstName":"charan",
                      "lastName":"k.v",
                      "role":"user",
                      "email":"charan@gmail.com",
                      "password":"priya123"
                    }
                  }
        signup.signupDetails(req, res).then(function(createdSignupData){
          assert(createdSignupData.firstName, req.body.firstName);
          assert(createdSignupData.lastName, req.body.lastName);
          assert(createdSignupData.role, req.body.role);
          assert(createdSignupData.email, req.body.email);
          assert(createdSignupData.password,req.body.password);
          console.log('createSignupDetails',createdSignupData);
          done();
        });

      });
      it('should login with given details',function(done){
        let req= sinon.spy();
        let res= sinon.spy();
            res={json:sinon.spy()}
            req={
                 "body":{
                   "email":"charan@gmail.com",
                   "password":"priya123"
                 }
            }
            signup.loginDetails(req,res).then(function(loginData){
              console.log('login details **********',req.body);
            })
            done();
      });
});
