import Category from "../models/category.js";
import asyncHandler from "../middlewares/asyncHandler.js";


const createCategory = asyncHandler(async(req, res) => {
       

    const { name } = req.body;

    if(!name){
        res.status(400)
        throw new Error("Category name is required");
    }

    const existingCategory = await Category.findOne({ name: name.trim() });

    if(existingCategory){
        res.status(400)
        throw new Error("Category already exists");
    }

    const category = new Category({ name: name.trim()});
    const createdCategory =  await category.save();
    res.status(201).json(createdCategory)
    
});

export { createCategory }