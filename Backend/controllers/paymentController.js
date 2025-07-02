import Stripe from "stripe"
import asyncHandler from "../middlewares/asyncHandler.js";
console.log("STRIPE KEY:", process.env.STRIPE_SECRET_KEY);


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPayment = asyncHandler(async(req, res) => {
    const { amount } = req.body; 

    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency:"INR",
            payment_method_types: ["card"],
        });

        res.status(200).json({
            clientSecret:paymentIntent.client_secret,
        });
        
        
    } catch (error) {
        res.status(500).json({
            message:"Payment intent creation failed",
            error:error.message,
        });
        
    }

});

export { createPayment }
