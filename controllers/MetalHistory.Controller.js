var mongoose = require('mongoose'),
    passport = require('passport');
const MetalHistory = mongoose.model('MetalHistory');

exports.create = (req, res) => {
    console.log(req.body)
    const metalHistory = new MetalHistory(req.body);
    console.log("adad")
    metalHistory.save((err) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json({result:"successfully created!"});
        }
    });
};

exports.list = (req, res) => {

    var role = req.type;
    var userId = req.userId;
    // if( role == "Vendor"){
        MetalHistory.find(function(err, metalHistory) {
            if (err) {
                res.json(err);
            } else {
                res.json(metalHistory);
            }
        });
    // }
    // else{

    //     MetalHistory.find(function(err, Stores) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(Stores);
    //         }
    //     }).populate('owner');
    // }




};