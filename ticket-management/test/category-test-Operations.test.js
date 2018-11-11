var mocha = require('mocha');
var assert = require('assert');
var sinon = require ('sinon');
var Category = require('../resources/category-Operations');
var expect = require('chai').expect

describe('should test CRUD operations for Category',function(){
it('should create an category with provided details', function (done) {
    let req = sinon.spy();
    let res = sinon.spy();
        res = { json : sinon.spy(),send:sinon.spy()}
        req = {
          "body":{
            "visiblity" : "true",
            "categoryOwnerName" : "priya",
            "primary":"priya",
            "secondery":"teja",
            "notes":"comments",
            "tag":"searching",
            "images":{"title":"image.png","createdBy":"priya"},
            "attachments":"files"
          }
        }
    Category.createCategoryDetails(req, res).then(function(createdCategoryData){
      assert(createdCategoryData.visiblity, req.body.visiblity);
      assert(createdCategoryData.primary, req.body.primary);
      assert(createdCategoryData.secondery, req.body.secondery);
      assert(createdCategoryData.notes, req.body.notes);
      assert(createdCategoryData.tag, req.body.tag);
      assert(createdCategoryData.images, req.body.images);
      assert(createdCategoryData.attachments, req.body.attachments);
      done();
    });
  });
  it('should check all category data', function(done){
    let req=sinon.spy();
    let res=sinon.spy();
        res={json:sinon.spy(), send: sinon.spy()}
    Category.getAllCategoryDetails(req,res).then(function(getAllCategoryData){
      expect(getAllCategoryData).to.have.length.above(0);
      console.log('done of getting all ticket details');
      done();
    })
  });

  it('should Update category details with provided data', function (done) {
    let req = sinon.spy();
    let res = sinon.spy();
        res = { send : sinon.spy(), json: sinon.spy() }
        req = {
          "params":{
            "id": '5be31d9e4f7f931d409be7ee'
          },
          "body":{
            "visiblity" : "true",
            "primary":"priya",
            "secondery":"teja",
            "notes":"comments",
            "tag":"searching",
            "images":{"title":"image.png","createdBy":"priya"},
            "attachments":"files"

          }

        }
        Category.updateCategoryDetails(req, res).then(function(updateCategoryData){
       assert(updateCategoryData.visiblity, req.body.visiblity);
       assert(updateCategoryData.primary, req.body.primary);
       assert(updateCategoryData.secondery, req.body.secondery);
       assert(updateCategoryData.notes, req.body.notes);
       assert(updateCategoryData.tag, req.body.tag);
       assert(updateCategoryData.images, req.body.images);
       assert(updateCategoryData.attachments, req.body.attachments);

    //User.updateUserDetails(req,res).then(function(updateUserData){
       console.log('updateCategoryDetails....',updateCategoryData);
     done();
    })
  });


  it('should get one category data',function(done){
    let req=sinon.spy();
    let res=sinon.spy();
        res={json:sinon.spy(),send:sinon.spy()}
        req={
          "params" : {
          "id" : "5be31e484f7f931d409be7ef"
          }
        }
        Category.getOneCategoryDetails(req,res).then(function(categoryDetails){
          console.log('deatails of one categeory  are....',categoryDetails);
          done();
        });
    });
});

