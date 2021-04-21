const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const Mongoose = require('./config/mongoose');
const Passport = require('./config/passport');
const MongoDB = require('./config/mongodb');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/logo')); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//Connect to mongodb
var mongo = MongoDB();
var mongoose = Mongoose();
var passports = Passport();

//Routes
require('./routes/User.routes')(app);
require('./routes/Vendor.routes')(app);
require('./routes/Product.routes')(app);
require('./routes/Store.routes')(app);
require('./routes/Coin.routes')(app);
require('./routes/Rate.routes')(app);
require('./routes/Category.routes')(app);
require('./routes/Metal.routes')(app);
require('./routes/Order.routes')(app);
require('./routes/Try_Home.routes')(app);
require('./routes/TenPlusOne.routes')(app);
require('./routes/Wallet.routes')(app);

const port = process.env.PORT || 5000;  //process.env.port is Heroku's port if you choose to deplay the app there
app.listen(port, () => console.log("Server up and running on port " + port));