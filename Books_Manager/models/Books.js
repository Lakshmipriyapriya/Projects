var mongoose= require ('mongoose');
var Schema= mongoose.Schema;
var Books= new Schema({
 isbn:{
 type:Number
},
  title:{
  	type:String
  },
  author:{
  	type:String
  },
  description:{
  	type:String
  },
  published_year:{
  	type:String
  },
  publisher:{
  	type:String
  },
  updated_date:{type: Date,
   default: Date.now}
});
module.exports=mongoose.model('Books',Books);



