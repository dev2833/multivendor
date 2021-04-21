var mongoose = require('mongoose'),
    passport = require('passport');
const Rate = mongoose.model('Rate');

exports.create = (req, res) => {
    const rate = new Rate(req.body);
    rate.save((err) => {
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

        Rate.find(function(err, rates) {
            if (err) {
                res.json(err);
            } else {
                res.json(rates[0]);
            }
        });
};