import mongoose from '../mongodb.js';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

export const Product = mongoose.model('Product', productSchema);