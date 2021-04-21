var mongoose = require('mongoose');

var StoreSchema = mongoose.Schema({
  name: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  gold_22:Number,
  gold_18:Number,
  gold_14:Number,
  gold_24:Number,
  silverRate: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  location: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  discount: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  approve:Boolean,
  offers:[String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, {collection: 'stores', toJSON: { getters: true } });

module.exports = mongoose.model('Store', StoreSchema);