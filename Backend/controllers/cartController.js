import Cart from "../models/cart.js";
import Product from "../models/product.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const addToCart = asyncHandler(async(req,res) => {
    const {productId, quantity} = req.body;

});

export { addToCart }