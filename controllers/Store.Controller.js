var mongoose = require('mongoose'),
    passport = require('passport');
const Store = mongoose.model('Store');
const MetalHistory = mongoose.model('MetalHistory')
exports.create = (req, res) => {
    const store = new Store(req.body);
    store.save((err) => {
        if (err) {
            console.log(err)
            res.status(404).json(err);
        } else {
            Store.findById(store._id,function(err, store) {
                if (err) {
                    res.json(err);
                } else {
                    res.status(200).json({store:store});
                }
            }).populate('owner');            
        }
    });
};

exports.list = (req, res) => {

    var role = req.type;
    var userId = req.userId;
    if( role == "Vendor"){
        Store.find({'owner':userId},function(err, Stores) {
            if (err) {
                res.json(err);
            } else {
                res.json(Stores);
            }
        });
    }
    else{

        Store.find(function(err, Stores) {
            if (err) {
                
                res.json(Stores);
            }
        }).populate('owner');
    }
};
exports.lists = (req, res) => {

        Store.find(function(err, Stores) {
            if (err) {
                res.json(err);
            } else {
                res.json(Stores);
            }
        }).populate('owner');
    
};
exports.update = (req,res) => {
    role = req.type;
    userId = req.userId;
    Store.findById(req.params.id, function(err, store) {
        var newHistory = {
            Date:Date(),
            gold_14:store.gold_14,
            gold_18:store.gold_18,
            gold_22:store.gold_22,
            gold_24:store.gold_24,
            silverRate:store.silverRate,
            store:store._id

        }
        Object.assign(store, req.body.store);
        store.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                const metalHistory = new MetalHistory(newHistory);
                metalHistory.save((err) => {
                    if (err) {
                        res.status(404).json(err);
                    } else {
                        res.status(200).json({store:store});
                    }
                });
            }
        });       
    });
};

exports.delete = (req,res) => {
    var id = req.params.id;   
        Store.findByIdAndRemove({_id: ids[i]}, function(err, store){
            if(err){
                console.log(err)
            }
            else{
                res.json({message: "success"})
            }
                
        });        
        

};
exports.close = (req,res) => {
    var id = req.params.id;
        Store.findById(id, function(err, store) {
            console.log(store.approve)
            var approve = {
                approve:!store.approve
            }
            Object.assign(store, approve);
            store.save((err) => {
                console.log(err);
            });
            console.log(store)
            res.json({store:store});
        });
};


