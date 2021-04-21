var walletHistory = require("../controllers/WalletHistory.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/wallet/save", walletHistory.save);
    app.post("/wallet/history/:id", walletHistory.list);

}