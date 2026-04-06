const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: String,
    location: String,
    category: String,
    price: String,
    desc: String
});

module.exports = mongoose.model('Data', dataSchema);