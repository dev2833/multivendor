var mongoose = require('mongoose'),
    passport = require('passport');
const Category = mongoose.model('Category');

exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err) => {
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

    Category.find(function(err, categoris) {
            if (err) {
                res.json(err);
            } else {
                res.json(categoris);
            }
        });
};