var mongoose = require('mongoose');

var MetalHistorySchema = mongoose.Schema({
  Date: { type: String,
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
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true }

}, {collection: 'metalHistory', toJSON: { getters: true } });

module.exports = mongoose.model('MetalHistory', MetalHistorySchema);