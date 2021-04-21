var mongoose = require('mongoose');

var TryHomeSchema = mongoose.Schema({
  date: { type: Date,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  time: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  pincode: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  street: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  city: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  apartNum: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  complete:Boolean,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }]

}, {collection: 'tryHomes', toJSON: { getters: true } });

module.exports = mongoose.model('TryHome', TryHomeSchema);