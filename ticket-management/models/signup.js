var mongoose = require('mongoose');
var Schema = mongoose.Schema
var signupInfo = new Schema({
  firstName:{
    type : String,
    required : true
  },
  lastName:{
    type : String,
    required : true
  },
  role:{
    type:String,
    required:true
  },
  email:{
    type: String,
      unique: true,
      required: true
  },
  password:{
    type:String,
    required : true
  },
  tenantId:{
    type:String
  }
});
module.exports=mongoose.model('signupInfo',signupInfo);
