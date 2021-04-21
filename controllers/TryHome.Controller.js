var mongoose = require('mongoose'),
    passport = require('passport');
const TryHome = mongoose.model('TryHome');
exports.create = (req, res) => {
    const tryHome = new TryHome(req.body);
    tryHome.save((err) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json({result:"successfully created!"});
        }
    });
};

exports.list = (req, res) => {
    var role = req.type;
    // var userId = req.userId;
    if( role === "Vendor" ){
        TryHome.find(function(err, tryHomes) {
            if (err) {
                res.json(err);
            } else {
                res.json(tryHomes);
            }
        }).populate(['productId','customerId']);
    }
};
exports.lists = (req, res) => {

    TryHome.find(function(err, tryHomes) {
            if (err) {
                res.json(err);
            } else {
                res.json(tryHomes);
            }
        }).populate(['productId','customerId']);
    
};

exports.listByCustomer = (req, res) => {

    TryHome.find({customerId:req.params.id},function(err, tryHomes) {
            if (err) {
                res.json(err);
            } else {
                res.json(tryHomes);
            }
        }).populate(['productId','customerId']);
    
};
// exports.update = (req,res) => {
//     role = req.type;
//     userId = req.userId;
//     console.log(req.body)
//     Store.findById(req.body.storeId, function(err, store) {
//         var newHistory = {
//             Date:Date(),
//             gold_14:store.gold_14,
//             gold_18:store.gold_18,
//             gold_22:store.gold_22,
//             gold_24:store.gold_24,
//             silverRate:store.silverRate,
//             owner:store.owner

//         }
//         const metalHistory = new MetalHistory(newHistory);
//         metalHistory.save((err) => {
//             if (err) {
//                 res.status(404).json(err);
//             } else {
//                 Object.assign(store, req.body.updateData);
//                 store.save((err) => {
//                     if (err) {
//                         res.status(404).json(err);
//                     } else {
//                         res.status(200).json({result:"successfully Updated!"});
//                     }
//                 });
//             }
//         });
        

    
//     });

// };

