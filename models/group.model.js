var mongoose = require('mongoose');

var GroupSchema = mongoose.Schema({
  name: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  status: { type: Boolean,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
  description: { type: String,
    set: function(val) { return val; },
    get: function(val) { return val; }
  },
}, {collection: 'group', toJSON: { getters: true } });

module.exports = mongoose.model('Group', GroupSchema);