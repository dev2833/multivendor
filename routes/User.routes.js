var user = require("../controllers/User.Controller");
var address = require("../controllers/Address.Controller")

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/user/signup", user.signup);
    app.post("/user/signin", user.signin);
    app.post("/user/signout", user.signout);
    app.post("/user/:id",VerifyToken,user.findById);
    app.post("/users/allUsers",user.allUsers);
    app.delete("/deleteUser/:id",user.delete);
    app.put("/user/closeUser/:id",user.close);
    app.post("/sendOTP",user.sendOTP);
    app.post("/customer/update",user.update);
    app.post("/customer/passChange",user.passChange);
    app.post("/address/update",address.update);
    app.post("/address/list/:id",address.list)
    app.delete("/address/delete/:id",address.delete)
};
