var category = require("../controllers/Category.Controller");
var group = require("../controllers/Group.Controller");
var type = require("../controllers/Type.Controller");
// var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/category/add", category.create);
    app.post("/category/list", category.list);
    
    app.post("/group/add", group.create);
    app.post("/group/list", group.list);

    app.post("/type/add", type.create);
    app.post("/type/list", type.list);


};
