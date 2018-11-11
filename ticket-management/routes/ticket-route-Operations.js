var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome ');
});

var ticket = require('../resources/ticket-operations');
router.get('/all', function(req, res, next) {
  ticket.getAllTicketDetails(req, res)
});

router.get('/:id', function(req, res, next) {
  ticket.getOneTicketDetails(req, res)
});

router.get('/allData/:id', function(req, res) {
  ticket.tanentId(req, res)
});

router.post('/', function(req, res, next) {
  ticket.createTicketDetails(req, res)
});

router.put('/:id', function(req, res, next) {
  ticket.updateTicketDetails(req, res)
});

router.delete('/:id', function(req, res, next) {
  ticket.removeTicketDetails(req, res)
});
module.exports = router;
