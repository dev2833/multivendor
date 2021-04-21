var mongoose = require('mongoose'),
    passport = require('passport');
const User = mongoose.model('User');
const Customer = mongoose.model('Customer')
const Vendor = mongoose.model('Vendor'); 
var nodemailer = require('nodemailer');

exports.signup = async (req, res) =>  {  
    if(req.body.role === "Customer"){
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.json({ email: "user already exists" });
            } else {
                const user = new Customer(req.body);
                user.setPassword(req.body.password);
                user.save((err) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({result:"success"});
                    }
                }); 
            }
        });   
    }
    else if(req.body.role === "Vendor"){
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.json({ message: "user already exists" });
            } else {
                const vendor = new Vendor(req.body);
                vendor.setPassword(req.body.password);
                vendor.save((err) => {
                    if (err) {    
                        console.log(err)
                        res.status(500).json(err);
                    } else {          
                
                        res.status(200).json({result:"success"})
                    }
                }); 
            }         
        })                       
    }   
};



exports.sendOTP = (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.json({ message: "user already exists" });
        } else {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: 25,
                auth: {
                    user: 'superpunch727@gmail.com',
                    pass: 'rams1998727'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            var code = '';
            for (let i = 0 ; i < 4 ; i++){
                code = code + Math.floor(Math.random()*10);
            }
            let HelperOptions = {
                from: 'Verify Notification',
                to: req.body.email,
                subject: 'Verify Notification',
                text: 'Verfiy Code :' + code,
            };
            transporter.sendMail(HelperOptions, (error, info) => {
                if (!info) {
                    return res.json({message:"invalid email address"})
                } else {                    
                    return res.status(200).json({code:code,message:"sent code"});
                }        
            })
        }
    })
}

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
            res.json({ success: true, token: token ,user:user});
        } else {
            res.json(info);
        }
    })(req, res);
};
exports.signout = (req, res) => {
    res.json({ success: true });
};
exports.update = (req,res) => {
    console.log(req.body)
    User.findById(req.body._id, function(err, customer) {
        if (!customer)
            res.status(404).send("data is not found");
        else
            Object.assign(customer, req.body);
            console.log(customer)
            customer.save().then(user => {
                console.log(customer)
                res.json({message:"success",user:customer});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

};
exports.passChange = (req,res) => {
    console.log(req.body)
    User.findById(req.body.id, function(err, customer) {
        if (!customer.ValidPassword(req.body.oldPass)) {
            res.json({message:"incorrect current password"});
        }
        else{
            customer.setPassword(req.body.newPass);
            customer.save().then(user => {
                res.json({message:"successfully changed"});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
      
    });

};
exports.delete = (req,res) => {
    var userId = req.userId;
    var role = req.type;
    if (role == 0){
        User.findByIdAndRemove({_id: req.params.id}, function(err, business){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
    }
    else if(role == 2){
        if(userId == req.params.id){
            User.findByIdAndRemove({_id: req.params.id}, function(err, business){
                if(err) res.json(err);
                else res.json('Successfully removed');
            });
        }
        else {
            res.json('You are not owner of this profile. You are not permited');
        }
    }
    else{
        res.json('you are not permited , cannot delete !');
    }
};
exports.findById = (req,res) => {
    var role = req.type;
    if (role == 0){
        User.findById(req.params.id, function(err, user) {
            if (!user)
                res.status(500).send("data is not found");
            else
                res.status(200).json(user);    
        });
    }
    else{
        res.json('you are not admin , cannot access !');
    }
}

exports.allUsers = (req, res) => {
    Customer.find(function(err, users) {
        if (err) {
            res.json(err);
        } else {
            res.json(users);
        }
    });

};

exports.delete = (req,res) => {
    var id = req.params.id;

            Customer.findByIdAndRemove({_id: id}, function(err, store){
                    console.log(err)
            });

        res.json('Successfully removed');

};

exports.close = (req,res) => {
    var id = req.params.id;
    Customer.findById(id, function(err, customer) {
        var approve = {
            approved:!customer.aprroved
        }
        Object.assign(customer, approve);
        customer.save((err) => {
            console.log(err);
        });
        res.json({user:customer})
    });
    
};