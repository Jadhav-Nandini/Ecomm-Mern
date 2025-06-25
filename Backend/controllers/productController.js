import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/product.js";

const createProduct = asyncHandler(async(req, res) => {
    console.log(req.body);
    const { name, description, price, quantity, ratings, category } = req.body;
    

    if(!name || !description || !price || !category) {
        res.status(400);
        throw new Error("All Fields are required");
    }

    const product = new Product({
        name,
        description,
        price,
        quantity,
        category,
        createdBy: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
    
});

export { createProduct }