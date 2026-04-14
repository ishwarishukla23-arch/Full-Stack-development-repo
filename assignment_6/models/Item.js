const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: String,
    type: String, // Car or Bike
    price: Number,
    description: String,
    image: String
});
module.exports = mongoose.model('Item', itemSchema);
