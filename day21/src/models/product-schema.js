const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    price:{
        type: Number,
        required:true,
    },
    description:{
        type: String,
    },
    stock:{
        type :Number,
        min:0,
    },
    tags : {
        type: [String],
        default: [],
    }
})

const Product = mongoose.model('product', productSchema);


module.exports = Product;