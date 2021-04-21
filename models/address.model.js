var mongoose = require('mongoose');

var AddressSchema = mongoose.Schema({
  country: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  state: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  city: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  zipcode: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  address: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  type: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, {collection: 'addresses', toJSON: { getters: true } });

module.exports = mongoose.model('Address', AddressSchema);