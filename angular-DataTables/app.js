var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors =require('cors');

var datatables = require('./routes/datatables');

var app= express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/datatables',datatables);
// app.use(function(req, res, next)
//  {
//   var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
var db=require('./db/index');
module.exports=app;
