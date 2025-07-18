const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String, // pay attention to capitalization aka the "S" in String
    isReadyToEat: Boolean,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;