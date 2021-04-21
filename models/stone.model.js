var mongoose = require('mongoose');

var StoneSchema = mongoose.Schema({
  type: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  shape:{ type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  size: { type: String, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  settingType: { type: String, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  price: { type: Number, required: true,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {  toJSON: { getters: true } });

module.exports = mongoose.model('Stone', StoneSchema);