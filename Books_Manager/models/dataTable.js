var mongoose = require('mongoose');
var Schema = mongoose.Schema
var datatables = new Schema({
  isbn:{
    type:Number,
    required:true
   },
   title:{
    type: String,
    requiredTrue :true
  },
  author:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  publisher:{
    type:String,
    required:true
  },
  updated_date:{type: Date,
    default: Date.now}
});
module.exports = mongoose.model('datatables',datatables);
