var mongoose = require('mongoose');

var DiamondSchema =new mongoose.Schema({
  totalWeight: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  numOfDiamonds:{ type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  price:Number,
  details:[
    {
      clarity:String,
      color:String,
      numOfDiamonds:Number,
      shape:String,
      weight:Number,
      settingType:String
    }
  ]
}, { _id: true, toJSON: { getters: true } });

module.exports = DiamondSchema;