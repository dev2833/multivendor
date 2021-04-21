var mongoose = require('mongoose'),
    passport = require('passport');
const Coin = mongoose.model('Coin');

exports.create = (req, res) => {
    const coin = new Coin(req.body);
    coin.save((err) => {
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

        Coin.find(function(err, coins) {
            if (err) {
                res.json(err);
            } else {
                res.json(coins);
            }
        }).populate('storeId');
};