var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
  status: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  quantity: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  orderStatus: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  orderDate: { type: Date,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  total: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  complete:Boolean,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }

}, {collection: 'orders', toJSON: { getters: true } });

module.exports = mongoose.model('Order', OrderSchema);