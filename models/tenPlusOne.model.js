var mongoose = require('mongoose');

var TenPlusOneSchema = mongoose.Schema({
  address: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  pincode: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  nominee: String,
  relationshop:String,
  nationality:String,
  date:String,
  numOfMonthes:Number,
  monthlyPlan:Number,
  totalPlan:Number,
  complete:Boolean,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }


}, {collection: 'tenPlusOnes', toJSON: { getters: true } });

module.exports = mongoose.model('TenPlusOne', TenPlusOneSchema);