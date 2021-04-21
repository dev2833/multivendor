var mongoose = require('mongoose');

var WalletHistorySchema = mongoose.Schema({
  date: { type: Date,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  description: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  amount: { type: Number,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  type: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },

  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },


}, {collection: 'walletHistory', toJSON: { getters: true } });

module.exports = mongoose.model('WalletHistory', WalletHistorySchema);