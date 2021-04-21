var mongoose = require('mongoose');

var CoinSchema = mongoose.Schema({
    category: { type: String,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    name: { type: String,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    productCode: { type: String,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    price:{type: Number,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    height: { type: Number,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    width: { type: String,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    weight: { type: Number,
        set: function(val) { return val; },
        get: function(val) { return val; }
    },
    type:String,
    discount:String,
    pictures: [String],
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    variants:[{"color":String,"images":String}],

}, { _id: true, toJSON: { getters: true } });

module.exports = mongoose.model('Coin', CoinSchema);