// Schema for Make collection.
// Collection name is specified.  Non-specifid name will be plural of the model name by default.

var mongoose = require('mongoose');
var Metal = require('./metal.model');
var Stone = require('./stone.model')
var DiamondSchema = require('./diamond.model');
var solitaire = require('./solitaire.model');
var MakeSchema = new mongoose.Schema({
  
  name: { type: String, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  price: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  discount: { type: String, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  stock: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  gst:Number,
  makingCharge:Number,
  new:Boolean,
  occasion:[String],
  color:[String],
  tags:[String],
  variants:[{color:String,images:String}],
  metal:Metal.schema,
  nextDay:Boolean,
  productCode:String,
  height:String,
  width:String,
  weight:String,
  collections:String,
  approved:Boolean,
  category:String,
  tenPlusOne:Boolean,
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  
}, {discriminatorKey: 'type', toJSON: { getters: true }});

var Product = mongoose.model('Product', MakeSchema);


const Diamond =Product.discriminator("Diamond", new mongoose.Schema({Diamond:DiamondSchema}));
const Solitaire = Product.discriminator("Solitaire", new mongoose.Schema({Solitaire:solitaire}));

module.exports = Product;
module.exports = Diamond;
module.exports = Solitaire;

