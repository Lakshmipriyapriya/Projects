var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/book',function(err,res){
if(err){
	console.log('Error in connction'+err);
}
else{
	console.log('connected to database');
}
})