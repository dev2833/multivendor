var mongoose = require('mongoose'),
    passport = require('passport');
const Type = mongoose.model('Type');

exports.create = (req, res) => {
    const type = new Type(req.body);
    type.save((err) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json({result:"successfully created!"});
        }
    });
};
exports.list = (req, res) => {
    // var role = req.type;
    // var userId = req.userId;

    Type.find(function(err, types) {
            if (err) {
                res.json(err);
            } else {
                res.json(types);
            }
        });
};