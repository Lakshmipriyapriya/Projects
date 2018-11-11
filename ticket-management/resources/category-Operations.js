var Category = require('../models/category');
var config=require('config');


var createCategoryDetails = function (req, res) {
	var fullDetails=req.body;
		fullDetails.tenantId = config.tenantId.id;
		console.log('tenant id is...',fullDetails.tenantId);
		 return Category.create(fullDetails, function(err,data){
		  console.log('details are...',data);
			if(err) return err;
			  else{
			  return res.json({
                Categeorydata:data
               })

			  }
		 });
    }

var getAllCategoryDetails = function(req,res){
    return Category.find(function(err,category){
        if(!err){
        return res.send(category);
        }
        else{
            res.statusCode = 500;
            res.json({
               error : 'Server error'
           });
        }

    })
}

var getOneCategoryDetails = function(req,res){
    return Category.findById(req.params.id,function(err,category){
        console.log('getting one category details...',category);
        if (!err) {
			return res.send({
				statusCode : 200,
				categoryData : category
			});
		} else {
			res.json({
				error:err
			})
		}

    })
}

var updateCategoryDetails = function(req,res){
        return Category.findById( req.params.id, function (err, data) {
            //console.log("..........", user)

            if (!data ) {
                return res.json({
                    statusCode : 404,
                    error : 'Not found'
                });
            }
            if (req.body.visibility != null)
                data.visibility = req.body.visibility;
            if (req.body.primary != null)
                data.primary = req.body.primary;
            if (req.body.secondery != null)
                data.secondery = req.body.secondery;
            if (req.body.notes != null)
            data.notes = req.body.notes;
            if (req.body.tag != null)
            data.tag = req.body.tag;
            if (req.body.images != null)
            data.images = req.body.images;
            if (req.body.attachments != null)
            data.attachments = req.body.attachments;

            return data.save(function (err) {
                if (!err) {

                    return res.json({
                        statusCode : 200,
                        Categeorydata : data
                    });
                } else {
                    if (err.name == 'ValidationError') {
                        res.json({
                            statusCode : 400,
                            error : 'Validation error'
                        });
                    } else {
                        res.json({
                            statusCode : 500,
                            error : 'Server error'
                        });
                    }
                }
            });
        });
    }

exports.updateCategoryDetails=updateCategoryDetails
exports.getOneCategoryDetails=getOneCategoryDetails;
exports.createCategoryDetails=createCategoryDetails;
exports.getAllCategoryDetails=getAllCategoryDetails;
