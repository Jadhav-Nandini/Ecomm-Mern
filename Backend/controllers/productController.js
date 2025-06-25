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

const updateProduct = asyncHandler(async(req,res) => {
    const { name, description, price, quantity, category } = req.body;
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        res.status(404);
        throw new Error("Product not found")
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;
    product.category = category || product.category;

    const updatedproduct = await product.save();
    res.json(updatedproduct);
    
})


export { createProduct, updateProduct }