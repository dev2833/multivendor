var product = require("../controllers/Product.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/product/add", product.create);
    app.post("/product/list", product.list);
    app.delete("/vendor/deletePendingProduct/:id",product.delete);
    app.post("/vendor/approvePendingProduct/:id",product.approve);



};
