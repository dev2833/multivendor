var mongoose = require('mongoose');

var RateSchema = mongoose.Schema({

  goldRate: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  silverRate: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  currency:[{name:String,rate:Number}]


}, { _id: true, toJSON: { getters: true } });

module.exports = mongoose.model('Rate', RateSchema);