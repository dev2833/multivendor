var mongoose = require('mongoose'),
    passport = require('passport');
const WishList = mongoose.model('WishList');
exports.create = (req, res) => {
    const wishList = new WishList(req.body);
    wishList.save((err) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json({result:"successfully created!"});
        }
    });
};
exports.listByCustomer = (req, res) => {

    WishList.find({customerId:req.params.id},function(err, wishLists) {
            if (err) {
                res.json(err);
            } else {
                res.json(wishLists);
            }
        }).populate(['productId','customerId']);
    
};
