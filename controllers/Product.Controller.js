var mongoose = require('mongoose'),
    passport = require('passport');
const Product = mongoose.model('Product');
var Diamond = require("./Diamond.Controller");
var Solitarie = require("./Solitaire.Controller");
exports.create = (req, res) => {
    var type = req.body.type;
    let imageFile = req.files.file;
  
    imageFile.mv(`client/public/assets/images/product/${req.body.category}/${req.body.fileName}`, function(err) {
      if (err) {
        console.log(err);
      }
    });
    var data = JSON.parse(req.body.product)
  
    if ( type == 'Diamond'){
        Diamond.create(req, res);
    }
    else if( type == 'Solitaire'){
        Solitarie.create(req, res);
    }

    else{
        const product = new Product(data);
        product.save((err) => {
            if (err) {
                
                res.status(404).json(err);
            } else {
                res.status(200).json({data:product});
            }
        });

    }
};
exports.delete = (req,res) => {
    var idArray = req.params.id;
    var ids = idArray.split(',');
    if(ids.length > 0){
        for (let i = 0 ; i < ids.length; i ++ ){
            Product.findByIdAndRemove({_id: ids[i]}, function(err, product){
                    console.log(err)
            });
        }
        res.json('Successfully removed');
    }

};
exports.approve = (req,res) => {
    var idArray = req.params.id;
    var ids = idArray.split(',');

    if(ids.length > 0){
        for (let i = 0 ; i < ids.length; i ++ ){
            Product.findById(ids[i], function(err, product) {
                var approve = {
                    approved:true
                }
                Object.assign(product, approve);

                product.save((err) => {
                    console.log(err);
                });
            });
        }
        res.json('Successfully approved');
    }
};
// exports.update = (req, res) => {
//     var type = req.body.type;
//     if ( type == 'NumberPlates'){
//         NumberPlates.update(req, res);
//     }
//     else if( type == 'Motorcycle'){
//         Motorcycle.update(req, res);
//     }
//     else if( type == 'Boats'){
//         Boat.update(req, res);
//     }
//     else if( type == 'HeavyVehicle'){
//         HeavyVehicle.update(req, res);
//     }
//     else if( type == 'Vehicle'){
//         Vehicle.update(req, res);
//     }
//     else if( type == 'Cars'){
//         Car.update(req, res);
//     }
//     else{
//         res.json('sorry, this type is not exist');
//     }
// };
// exports.delete = (req, res) => {
//     var type = req.body.type;
//     if ( type == 'NumberPlates'){
//         NumberPlates.delete(req, res);
//     }
//     else if( type == 'Motorcycle'){
//         Motorcycle.delete(req, res);
//     }
//     else if( type == 'Boats'){
//         Boat.delete(req, res);
//     }
//     else if( type == 'HeavyVehicle'){
//         HeavyVehicle.delete(req, res);
//     }
//     else if( type == 'Vehicle'){
//         Vehicle.delete(req, res);
//     }
//     else if( type == 'Cars'){
//         Car.delete(req, res);
//     }
//     else{
//         res.json('sorry, this type is not exist');
//     }
// };

// //dynamic sarch 
// exports.serch = (req, res) => {
//     var query = {};
//     if(req.body.make){
//         Object.assign(query,{'make':mongoose.Types.ObjectId(req.body.make)});
//     }
//     if(req.body.model){
//         Object.assign(query,{'model':mongoose.Types.ObjectId(req.body.model)});
//     }
//     if(req.body.fuelType){
//         Object.assign(query,{'fuelType':req.body.fuelType});
//     }
//     if(req.body.condition){
//         Object.assign(query,{'condition':req.body.condition});
//     }
//     if(req.body.minPrice ){
//         Object.assign(query,{price:{ $gte: req.body.minPrice}});
//         if(req.body.maxPrice){
//             Object.assign(query.price,{$lte:req.body.maxPrice});
//         }
//     }
//     if(req.body.maxPrice ){
//         Object.assign(query,{price:{ $lte: req.body.maxPrice}});
//         if(req.body.minPrice){
//             Object.assign(query.price,{$gte:req.body.minPrice});
//         }
//     }
//     if( req.body.from){
//         Object.assign(query,{year:{$gte:parseInt(req.body.from, 10)}});
//         if( req.body.from && req.body.to){
//             Object.assign(query.year,{$lte:parseInt(req.body.to,10)});
//         }
//     }
//     if( req.body.to){
//         Object.assign(query,{year:{$lte:parseInt(req.body.to,10)}});
//         if( req.body.from && req.body.to){
//             Object.assign(query.year,{$gte:parseInt(req.body.from, 10)});
//         }
//     }
//     AdModel.find(query,function(err, adModels) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(adModels);
//         }
//     }).populate(['make','model']).exec();
// };
// //approve admodels based on roles
// exports.approve = (req, res) => {
//     role = req.type;
//     if (role != 2){
//         AdModel.findById(req.params.id, function(err, admodel) {
//             admodel.status = true;
//             admodel.save((err) => {
//                 if (err) {
//                     res.status(404).json(err);
//                 } else {
//                     res.status(200).json({result:"successfully approved!"});
//                 }
//             });
//         });  
//     }else{
//         res.json('you are allowed to approve this. this can be approved by admin or moderator')
//     }
// };

exports.list = (req, res) => {
    var role = req.type;
    var userId = req.userId;

        Product.find(function(err, products) {
            if (err) {
                res.json(err);
            } else {
                res.json(products);
            }
        }).populate('storeId');
};