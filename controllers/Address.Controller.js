var mongoose = require('mongoose'),
    passport = require('passport');
const Address = mongoose.model('Address');



exports.update = (req, res) => {
    console.log(req.body)
    if(req.body.id){
        Address.findById(req.body.id, function(err, address) {
            if (!address)
                res.status(404).send("data is not found");
            else
                Object.assign(address, req.body);

                address.save().then(user => {
                    res.json({message:"success",address:address});
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    }
    else{
        const address = new Address(req.body);
        address.save((err) => {
            if (err) {
                console.log(err)
                res.status(404).json(err);
            } else {
                res.status(200).json({address:address});          
            }
        });
    }
};

exports.list = (req,res) =>{

    Address.find({customerId:req.params.id},function(err, addresses) {
        if (err) {
            res.json(err);
        } else {
            res.json({addresses:addresses});
        }
    });
}

exports.delete = (req,res) => {
    var id = req.params.id;   
        Address.findByIdAndRemove({_id: id}, function(err, address){
            if(err){
                console.log(err)
            }
            else{
                res.json({message: "success"})
            }
                
        });        
        

};
