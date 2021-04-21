var mongoose = require('mongoose'),
    passport = require('passport');
const Diamond = mongoose.model('Diamond');

exports.create = (req, res) => {
    // var role = req.type;
    // if (role == 0 ){
        var data = JSON.parse(req.body.product)
        const diamond = new Diamond(data);
        diamond.save((err) => {
            if (err) {
                console.log(err)
                res.status(404).json(err);
            } else {
                res.status(200).json({data:diamond});
            }
        });
    // }
    // else{
    //     res.json('you are not allowed to add products');
    // }    
};

// exports.update = (req,res) => {
//     role = req.type;
//     userId = req.userId;
//     if (role == 0 || role == 2){
//         NumberPlates.findById(req.params.id, function(err, numberPlates) {
//             if(role == 2){
//                 if(numberPlates.owner == req.userId){ // identify that user is owner of this model
//                     Object.assign(numberPlates, req.body);
//                     numberPlates.save((err) => {
//                         if (err) {
//                             res.status(404).json(err);
//                         } else {
//                             res.status(200).json({result:"successfully Updated!"});
//                         }
//                     });
//                 }
//                 else{
//                     res.json('This is not your admodel,so you cannot update it');
//                 }
//             }
//             else{       
//                 Object.assign(vehicle, req.body);                               //admin
//                 numberPlates.save((err) => {
//                     if (err) {
//                         res.status(404).json(err);
//                     } else {
//                         res.status(200).json({result:"successfully Updated!"});
//                     }
//                 });
//             }
//         });
//     }
//     else{
//         res.json("You are moderator. So you cannot update.");
//     }
// };

// exports.delete = (req,res) => {
//     var role = req.type;
//     var userId = req.userId;
//     if(role == 0){
//         NumberPlates.findByIdAndRemove({_id: req.params.id}, function(err, business){
//             if(err) res.json(err);
//             else res.json('Successfully removed');
//         });
//     }
//     else if(role == 2){
//         NumberPlates.findById(req.params.id, function(err, numberPlates) {
//             if (userId == numberPlates.owner){
//                 NumberPlates.findByIdAndRemove({_id: req.params.id}, function(err, business){
//                     if(err) res.json(err);
//                     else res.json('Successfully removed');
//                 });
//             }
//             else{
//                 res.json('this model is not yours , so you cannot delete it')
//             }
//         });  
//     }
//     else{
//         res.json('you are not admin, u are not allowed to delete it');
//     }
// };
