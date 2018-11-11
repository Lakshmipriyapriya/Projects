var mocha = require('mocha');
var test= require('supertest');
var expext = require('chai').expect
var assert= require('assert');
var app= require('../app');
var data= {
     "userName":"priya",
    "emailId":"teja@gmail.com",
    "ticketType":"case",
    "issueTitle":"method not found",
    "issueDescription":"unable to post or get data",
    "caseSeverity":"low"
  };
  describe('CRUD negative testing operations for  ticket details',function(){
      it('should not post ticket details',function(done){
          test(app)
          .post('/ticket/')
          .set('Accept','application/json')
          .send(data)
          .expect(400); //bad request
          done();
      });

     it('should not get one ticket details',function(done){
    test(app)
    .get('/ticket/5be049ca9eafa44714279')
    .set('Accept','application/json')
    .expect(400); //bad request
    done();
});
it('should not get all ticket details',function(done){
    test(app)
    .get('//abc45')
    .set('Accept','application/json')
    .expect(404)
    done()
});
it('should not update ticket details',function(done){
    test(app)
    .put('/ticket/5be048c89efa447147b2275')
    .set('Accept','application/json')
    .send({
        "userName":777,
        "emailId":"priya@gmail.com",
        "ticketType":"case",
        "issueTitle":"method not found",
        "issueDescription":"unable to post or get data",
        "caseSeverity":"low"
      })
    .expect(400)
    done();
  });
  it('should not remove ticket details',function(done){
    test(app)
    .get('/ticet/5be049479')
    .set('Accept','application/json')
    .expect(400)
    done()
  });
});

var data= {
    "primary":"priya",
    "secondery":"bhavani",
    "notes":"comments",
    "tag":"searching",
    "images":{"title":"image.png","createdBy":"priya"},
    "attachments":"files"
 };
 describe('CRUD negative testing operations for  category details',function(){
     it('should not post category details',function(done){
         test(app)
         .post('/category/')
         .set('Accept','application/json')
         .send(data)
         .expect(400); //bad request
         done();
     });
     it('should not get one category details',function(done){
        test(app)
        .get('/category/5be049ca9eafa44714279')
        .set('Accept','application/json')
        .expect(400); //bad request
        done();
    });
    it('should not get all category details',function(done){
        test(app)
        .get('//abc45')
        .set('Accept','application/json')
        .expect(404)
        done()
    });
    it('should not update category details',function(done){
        test(app)
        .put('/category/5be048c89efa447147b2275')
        .set('Accept','application/json')
        .send({
                "primary":"priya",
                "secondery":"bhavani",
                "notes":"comments",
                "tag":"searching",
                "images":{"title":"image.png","createdBy":"priya"},
                "attachments":"files"
          })
        .expect(400)
        done();
      });
});
