var mongoose = require('mongoose');
jwt = require('jsonwebtoken'),
crypto = require('crypto');
var vendorSchema = require('./vendor.model');
var customerSchema = require('./customer.model');
var UserSchema = new mongoose.Schema({
    firstName: { type: String , required: true},
    lastName: { type: String , required: true},
    email: { type: String , required: true, unique: true},
    phoneNumber: { type: String, required: true},
    approved:Boolean,
    verified: {
      type: Boolean,
      default: false
    },
    created_on: { type: Date, required: true, default: Date.now},
    updated_on: { type: Date, required: true, default: Date.now},
    hash: {type: String, required: true},
    salt: {type: String, required: true}
}, {discriminatorKey: 'role', toJSON: { getters: true }} );

UserSchema.methods.setPassword = function(password)  {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


UserSchema.methods.ValidPassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 1);
  return jwt.sign({
        _id: this._id,
        username: this.firstName + this.lastName,
        type : this.role,
        exp: Math.floor(Date.now() / 1000) + (60 * 15 )
      }, // 1 Hour
      "secretKey");
};

var User = mongoose.model('User', UserSchema);


const Vendor =User.discriminator("Vendor", new mongoose.Schema({vendor:vendorSchema}));
const Customer = User.discriminator("Customer", new mongoose.Schema({customer:customerSchema}));


module.exports = Vendor;
module.exports = User;
module.exports = Customer;

