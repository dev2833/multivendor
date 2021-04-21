// Schema for Make collection.
// Collection name is specified.  Non-specifid name will be plural of the model name by default.

var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
  anniversary: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  occupation: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  gender: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  birth:String,
  spouse:String,
  
}, {_id: true, toJSON: { getters: true } });

module.exports = customerSchema;