var coin = require("../controllers/Coin.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/coin/add", coin.create);
    app.post("/coin/list", coin.list);


};
