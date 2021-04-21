var store = require("../controllers/Store.Controller");
var metal = require("../controllers/MetalHistory.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/store/register", store.create);
    app.post("/store/list", VerifyToken,store.list);
    app.post("/store/lists", store.lists);
    app.post("/store/metalHistory",VerifyToken,metal.list);
    app.post("/store/rate",store.update);
    app.post("/store/deleteStore/:id",store.delete);
    app.post("/store/closeStore/:id",store.close);
    app.post("/store/update/:id",store.update)
};
