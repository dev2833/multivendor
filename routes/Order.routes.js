var order = require("../controllers/Order.Controller");

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/order/add", order.create);
    app.post("/order/list", order.lists);
    app.post("/order/listByCustomer/:id", order.listByCustomer);
    // app.get("/store/metalHistory",VerifyToken,metal.list);
    app.post("/saveOrder",order.save);

};
