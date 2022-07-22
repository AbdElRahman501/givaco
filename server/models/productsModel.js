import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    title: { type: String },
    name: {type: String },
    content: { type: String },
    keywords: { type: String },
    category: { type: String },
    brand: { type: String },
    rating: { type: String },
    numberOfRating: { type: Number },
    price: { type: Number },
    image: { type: String },
    inStoke: [{
        color: { type: String },
        sizes: [{
            size: { type: String },
            qty: { type: Number }
        }]
    }],
    colors: [String],
    sizes: [String],
    sideImages: [String]



}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);
export default Product