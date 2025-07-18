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

const getMyOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({user: req.user._id}).populate("user", "username email")
    res.status(200).json(orders)
});

const getAllOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find().populate("user", "username email");
    res.status(200).json(orders)
});

const updateDeliveryStatus = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);

    if(order) {
        order.deliveryStatus = "Delivered";
        await order.save();
        res.json({message: "Order Delivered"});
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

export { createOrder, getMyOrders, getAllOrders, updateDeliveryStatus };