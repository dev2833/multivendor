var vendor = require("../controllers/Vendor.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/vendor/signup", vendor.signup);
    app.post("/vendor/signin", vendor.signin);
    app.post("/vendor/list",vendor.list);
    app.post("/vendor/allVendors",vendor.allVendors);
    app.delete("/vendor/deleteVendor/:id",vendor.delete);
    app.post("/vendor/approvePendingVendor/:id",vendor.approve);
    app.post("/vendor/closeVendor/:id",vendor.close);

};
