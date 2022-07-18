import { Schema, model, connect } from 'mongoose';

const newSchema = new mongoose.Schema()

const ProductSchema = newSchema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String
})

module.exports = mongoose.model('Product', ProductSchema);