var tryHome = require("../controllers/TryHome.Controller");
var wishList = require("../controllers/WishList.Controller");

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/tryHome/add", tryHome.create);
    app.post("/tryHome/list", tryHome.lists);
    app.post("/tryHome/listByCustomer/:id", tryHome.listByCustomer);

    app.post("/wishList/add", wishList.create);
    app.post("/wishList/listByCustomer/:id", wishList.listByCustomer);

};
