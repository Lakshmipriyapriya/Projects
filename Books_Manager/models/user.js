var mongoose = require('mongoose');
var Schema = mongoose.Schema
var userInfo = new Schema({
userName:{
  type : String,
  required : true
},
email:{
  type: String,
    unique: true,
    required: true,
    trim: true
},
password:{
  type:String,
  required : true
}

});
module.exports=mongoose.model('userInfo',userInfo);
