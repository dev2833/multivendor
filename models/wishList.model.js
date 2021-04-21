var mongoose = require('mongoose');

var WishListSchema = mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
}, {collection: 'wishlists', toJSON: { getters: true } });

module.exports = mongoose.model('WishList', WishListSchema);