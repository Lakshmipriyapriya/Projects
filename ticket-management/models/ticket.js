var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ticket = new Schema({
  referenceId:{
    type:Number,
    required:true
  },
  tenantId:{
    type:String
  },
  userName:{
    type:String,
    required:true
  },
  emailId:{
    type:String,
    required:true
  },
  ticketType:{
    type:String,
    required:true
  },
  issueTitle:{
    type:String,
    required:true
  },
  issueDescription:{
    type:String,
    required:true
  },
  notes:{
    type:String,

  },
  caseSeverity:{
    type:String,
    required:true
  },
  rating:{
    type:Number
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
module.exports=mongoose.model('ticket',ticket);
