var rate = require("../controllers/Rate.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/rate/add", rate.create);
    app.post("/rate/list", rate.list);


};
