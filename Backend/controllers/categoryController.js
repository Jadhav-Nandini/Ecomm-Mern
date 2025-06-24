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

const getAllCategory = asyncHandler(async(req,res) => {
    const categories = await Category.find().sort({createdAt: -1});
    res.status(200).json(categories);

});

const updateCategory = asyncHandler(async(req, res) =>{
    const { name } = req.body;
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error("Category not found");
    }

    category.name = name || category.name;

    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory)
})


const deleteCategory = asyncHandler(async(req, res) =>{
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error("Category not found");
    }

    await category.deleteOne();
    res.status(200).json({ message: "Category deleted Successfully" });
});


export { createCategory, getAllCategory, updateCategory, deleteCategory }