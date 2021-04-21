var mongoose = require('mongoose'),
    passport = require('passport');
const Vendor = mongoose.model('Vendor');

exports.signup = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({message: "All fields required"});
    }
    Vendor.findOne({ email: req.body.email }).then(vendor => {
        if (vendor) {
            return res.status(400).json({ email: "user already exists" });
        } else {

            const vendor = new Vendor(req.body);
            vendor.setPassword(req.body.password);
            vendor.save((err) => {
                if (err) {
                    res.status(500).json(err);
                } else {
                    const token = vendor.generateJwt();
                    res.status(200).json("Registered successfully");
                }
            }); 
        }
    });
};

exports.signin = (req, res) => {
    if (!req.body.username || !req.body.hash) {
        return res.status(400).json(req.body.username);
    }
    passport.authenticate("local", (err, user, info) => {
        let token;
        if (err) {
            return res.status(500).json(err);
        }
        if (user) {
            token = user.generateJwt();
            res.json({ success: true, token: token });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};

exports.list = (req, res) => {
    // var role = req.type;
    // var userId = req.userId;

        Vendor.find(function(err, vendors) {
            if (err) {
                res.json(err);
            } else {
                res.json(vendors);
            }
        });
};
exports.allVendors = (req, res) => {
    // var role = req.type;
    // var userId = req.userId;

        Vendor.find(function(err, vendors) {
            if (err) {
                res.json(err);
            } else {
                res.json(vendors);
            }
        });
};
exports.delete = (req,res) => {
    var id = req.params.id;
        Vendor.findByIdAndRemove({_id: id}, function(err, store){
                console.log(err)
        });
        res.json({message:"success"});
};
exports.approve = (req,res) => {
    var idArray = req.params.id;
    var ids = idArray.split(',');

    if(ids.length > 0){
        for (let i = 0 ; i < ids.length; i ++ ){
            Vendor.findById(ids[i], function(err, vendor) {
                var approve = {
                    approved:true
                }
                Object.assign(vendor, approve);
                console.log(vendor)
                vendor.save((err) => {
                    console.log(err);
                });
            });
        }
        res.json('Successfully approved');
    }
};
exports.close = (req,res) => {
    var id = req.params.id;
    // var ids = idArray.split(',');
        Vendor.findById(id, function(err, vendor) {
            var approve = {
                approved:!vendor.approved
            }
            Object.assign(vendor, approve);
            vendor.save((err) => {
                console.log(err);
            });
            res.json({vendor:vendor});
        });
};

// exports.update = (req,res) => {
//     var role = req.type;
//     var userId = req.userId;
//     if (role == 0){
//         User.findById(req.params.id, function(err, user) {
//             if (!user)
//                 res.status(404).send("data is not found");
//             else
//                 Object.assign(user, req.body);
//                 user.setPassword(req.body.hash);
//                 user.save().then(user => {
//                     res.json('user updated!');
//                 })
//                 .catch(err => {
//                     res.status(400).send("Update not possible");
//                 });
//         });
//     }
//     else{
//         if (userId == req.params.id){
//             User.findById(req.params.id, function(err, user) {
//                 if (!user)
//                     res.status(404).send("data is not found");
//                 else
//                     Object.assign(user, req.body);
//                     user.setPassword(req.body.hash);
//                     user.save().then(user => {
//                         res.json('user updated!');
//                     })
//                     .catch(err => {
//                         res.status(400).send("Update not possible");
//                     });
//             });
//         }
//         else {
//              res.json('You are not owner of this profile. So you cannot update');
//         }
//     }    
// };
// exports.delete = (req,res) => {
//     var userId = req.userId;
//     var role = req.type;
//     if (role == 0){
//         User.findByIdAndRemove({_id: req.params.id}, function(err, business){
//             if(err) res.json(err);
//             else res.json('Successfully removed');
//         });
//     }
//     else if(role == 2){
//         if(userId == req.params.id){
//             User.findByIdAndRemove({_id: req.params.id}, function(err, business){
//                 if(err) res.json(err);
//                 else res.json('Successfully removed');
//             });
//         }
//         else {
//             res.json('You are not owner of this profile. You are not permited');
//         }
//     }
//     else{
//         res.json('you are not permited , cannot delete !');
//     }
// };
// exports.findById = (req,res) => {
//     var role = req.type;
//     if (role == 0){
//         User.findById(req.params.id, function(err, user) {
//             if (!user)
//                 res.status(500).send("data is not found");
//             else
//                 res.status(200).json(user);    
//         });
//     }
//     else{
//         res.json('you are not admin , cannot access !');
//     }
// }
