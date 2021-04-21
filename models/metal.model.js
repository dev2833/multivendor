var mongoose = require('mongoose');

var MetalSchema = mongoose.Schema({
  type: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  purity:{ type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  weight: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, { _id: true, toJSON: { getters: true } });

module.exports = mongoose.model('Metal', MetalSchema);