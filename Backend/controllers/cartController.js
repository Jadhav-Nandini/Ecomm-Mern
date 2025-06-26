import Cart from "../models/cart.js";
import Product from "../models/product.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const addToCart = asyncHandler(async(req,res) => {
    const {productId, quantity} = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if(!cart) {
        cart = new Cart({
            user: req.user._id,
            cartItems: [],
        });
    }

    const existingItem = cart.cartItems.find(
        (item) => item.product.toString() === productId
    );

    if(existingItem) {
        existingItem.quantity += quantity;
    }else {
        cart.cartItems.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);

});

const getCart = asyncHandler(async(req, res) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate("cartItems.product");

    if(!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }
    res.json(cart);
})

export { addToCart, getCart }