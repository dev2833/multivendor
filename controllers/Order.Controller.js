var mongoose = require('mongoose'),
    passport = require('passport');
const Order = mongoose.model('Order');
exports.create = (req, res) => {
    const order = new Order(req.body);
    order.save((err) => {
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
        Order.find(function(err, orders) {
            if (err) {
                res.json(err);
            } else {
                res.json(orders);
            }
        }).populate(['productId','customerId']);
    }
};
exports.lists = (req, res) => {

    Order.find(function(err, orders) {
            if (err) {
                res.json(err);
            } else {
                res.json(orders);
            }
        }).populate(['productId','customerId']);
    
};
exports.listByCustomer = (req, res) => {

    Order.find({customerId:req.params.id},function(err, orders) {
            if (err) {
                res.json(err);
            } else {
                res.json(orders);
            }
        }).populate(['productId','customerId']);
    
};

exports.save = (req, res) => {
const orders = req.body;
console.log(req.body);
    for(let i =0;i<orders.length; i ++){
        data = {
            productId:orders[i].productId._id,
            quantity:orders[i].quantity,
            customerId:orders[i].customerId._id,
            orderDate:new Date(),
            total:orders[i].total,
            status:"paid",
            orderStatus:"not delivery",
            complete:false,
            storeId:orders[i].storeId._id 
        }
        const order = new Order(data);
        order.save();
        
    }
    res.status(200).json({result:"successfully saved!"});
    
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

