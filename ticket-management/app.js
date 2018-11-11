var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors =require('cors');
var ticket = require('./routes/ticket-route-Operations');
var signup = require('./routes/signup-route-Operations');
var category = require('./routes/category-route-Operations');
var app= express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/ticket',ticket);
app.use('/signup',signup);
app.use('/category',category);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var db=require('./db/index');
module.exports=app;
