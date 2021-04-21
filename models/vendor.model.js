// Schema for Make collection.
// Collection name is specified.  Non-specifid name will be plural of the model name by default.

var mongoose = require('mongoose');

var vendorSchema = new mongoose.Schema({
  businessName: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  displayName: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  gstNumber: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  vatNumber: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  identification: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  businessYears: { type: Number, 
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  photo:String,
  wallet:Number,
  terms:String,
  bio:String,
  services:[String]
  
}, {_id: true, toJSON: { getters: true } });

module.exports = vendorSchema;