const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  product: { type: String, required: true },
  price: { type: String, required: true },
  sellerName: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String], // Array of image filenames


  //   sellerId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Farmer',
  //   required: true
  // }

});

module.exports = mongoose.model('Product', productSchema);
