var mongoose = require('mongoose'),
    passport = require('passport');
const WalletHistory = mongoose.model('WalletHistory');

exports.save = (req, res) => {
    const walletHistory = new WalletHistory(req.body);
    walletHistory.save((err) => {
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

    WalletHistory.find({customerId:req.params.id},function(err, walletHistories) {
            if (err) {
                res.json(err);
            } else {
                res.json(walletHistories);
            }
        });
};