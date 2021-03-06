var mongoose = require ('mongoose');
var Schema=mongoose.Schema;
var category = new Schema({
  visiblity:{
    type:Boolean
    // required:true
  },
  tenantId:{
    type:String
  },
   primary:{
    type:String
  },
  secondery:{
    type:String
  },
  notes:{
    type:String,
    required:true
  },
  tag:{
    type:Array
  },
  images:{
    type:Array,
    title:String,
    uploadedBy:String,
    location:String
  },
  attachments:{
    type:Array,
    title:String,
    createdBy:String,
    location:String
  },
  createdOn:{
    type:Date,
    default:Date.now
  }
});
module.exports=mongoose.model('category',category);
