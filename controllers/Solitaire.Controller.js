var mongoose = require('mongoose'),
    passport = require('passport');
const Solitaire = mongoose.model('Solitaire');

exports.create = (req, res) => {
    // var role = req.type;
    // if (role == 0 ){
        var data = JSON.parse(req.body.product)
        const solitaire = new Solitaire(data);
        solitaire.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json({data:solitaire});
            }
        });
    // }
    // else{
    //     res.json('you are not allowed to add products');
    // }    
};