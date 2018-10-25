var mongoose= require ('mongoose');
var Schema= mongoose.Schema;
var google=new Schema({
id :{
  type:Number,
  required:true
},
email:{
type:String,
required:true
},
name:{
  type:String,
  required:true
}
// token:{
// type:String,
// required:true
// }

});
module.exports=mongoose.model('google',google);
