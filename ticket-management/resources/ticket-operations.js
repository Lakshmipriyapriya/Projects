var Ticket = require('../models/ticket');
var nodemailer=require('nodemailer');
var config=require('config');


var getAllTicketDetails = function (req, res) {
	return Ticket.find(function (err, tickets) {
		if (!err) {
			return res.json(tickets);
		} else {
			error:err
		}
	});
}

var createTicketDetails = function (req, res) {
    var fullDetails=req.body;
    console.log('***************',fullDetails);
		fullDetails.tenantId = config.tenantId.id;
		console.log('tenant id is...',fullDetails.tenantId);
	   return Ticket.create(fullDetails, function(err,data){
		  console.log('details are...',data);
			if(err) {
        console.log('error from ticket creation : ',err);
        return err;
      }
			  else{
			   return res.json({
				   status:200,
				   TicketDetails:data
			   })

			  }
		 });
	}


var getOneTicketDetails = function (req, res) {
	return Ticket.findById(req.params.id, function (err, ticket) {

		if (!err) {
			return res.json({
				statusCode : 200,
				message : ticket
			});
		} else {
			res.json({
				error:err
			})
		}
	});
}

var tanentId=function(req,res){
	return Ticket.find({tenantId:req.params.tenantId}, function(err,data){
		console.log('data is ***',data);
		if (!err) {
			return res.json({
				statusCode : 200,
				message : data
			});
		} else {
			res.json({
				error:err
			})
		}
	  });
   }

var removeTicketDetails = function (req, res) {
	return Ticket.findById(req.params.id, function (err, ticket) {
		if (!ticket) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}
		return ticket.remove(function (err) {
			if (!err) {
				 return res.json({
					status : 200,
					ticketData: 'Deleted'
				});
			} else {
				 return res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
		})
	});
}

var updateTicketDetails = function (req, res) {
	 	 return Ticket.findByIdAndUpdate(req.params.id,req.body,function(err,data){
			if (!err) {
				return res.json({
					statusCode : 200,
					message : data
				});
			} else {
				error:err
			}
		});
}

exports.tanentId=tanentId
exports.updateTicketDetails=updateTicketDetails
exports.getOneTicketDetails=getOneTicketDetails
exports.removeTicketDetails=removeTicketDetails
exports.createTicketDetails=createTicketDetails
exports.getAllTicketDetails= getAllTicketDetails
