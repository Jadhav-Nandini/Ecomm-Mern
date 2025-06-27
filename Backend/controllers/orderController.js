import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/order.js";

const createOrder = asyncHandler(async(req, res) => {
    const { orderItems, shippingAdress, totalAmount } = req.body;

    if(!orderItems || orderItems.length === 0) {
        res.status(404);
        throw new Error("No order items");
    }

    const order = new Order({
        user: req.user._id,
        orderItems,
        shippingAdress,
        totalAmount,
    });

    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
    
});

export { createOrder };