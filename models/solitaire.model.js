var mongoose = require('mongoose');

var SolitaireSchema = mongoose.Schema({
  totalWeight: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  numOfSolitaires:{ type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  price:Number,
  shape:String,
  clarity:String,
  color:String,
  cutPolishSymmetry:String,
  fluorescence:String,
  certification:String
}, { _id: true, toJSON: { getters: true } });

module.exports = SolitaireSchema;