var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
  group: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  name: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  status: { type: Boolean,
    set: function(val) { return val; },
    get: function(val) { return val; }
  }
}, {collection: 'category', toJSON: { getters: true } });

module.exports = mongoose.model('Category', CategorySchema);