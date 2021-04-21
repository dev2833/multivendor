var mongoose = require('mongoose'),
    passport = require('passport');
const Group = mongoose.model('Group');

exports.create = (req, res) => {
    const group = new Group(req.body);
    group.save((err) => {
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

    Group.find(function(err, groups) {
            if (err) {
                res.json(err);
            } else {
                res.json(groups);
            }
        });
};