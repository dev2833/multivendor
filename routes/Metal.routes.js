var metal = require("../controllers/MetalHistory.Controller");
var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/all/metalHistory",metal.list);
    app.post("/metal/metalHistory",VerifyToken,metal.create);

};
