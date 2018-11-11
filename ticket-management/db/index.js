var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/ticket',function(err,res){
if(err){
	// console.log('Error in connction'+err);
}
else{
	console.log('connected to database');
}
});
