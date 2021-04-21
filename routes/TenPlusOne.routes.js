var tenPlusOne = require("../controllers/TenPlusOne.Controller");

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/tenPlusOne/save", tenPlusOne.create);
    app.post("/tenPlusOne/list", tenPlusOne.lists);
    app.post("/tenPlusOne/listByCustomer/:id", tenPlusOne.listByCustomer);    
    // app.get("/store/metalHistory",VerifyToken,metal.list);
    // app.put("/store/rate",store.update);

};
