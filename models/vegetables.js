const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vegetableSchema = new Schema({
    name: { type: String, required: true },
    isGreen: Boolean,
}, { timestamps: true });

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable;