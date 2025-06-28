import mongoose from "mongoose";

const productScheme = mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please enter product name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
    },    
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    },
    image: {
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", //to track which admin created it
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
},
{ timestamps: true });


const Product = mongoose.model("Product", productScheme)

export default Product;