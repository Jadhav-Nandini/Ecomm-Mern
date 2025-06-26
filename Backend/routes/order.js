import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },

      name: String,
      quantity: Number,
      price: Number,
    },
  ],

  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  paymentStatus: {
    type:String,
    default: "Not Paid",
  },

  deliveryStatus: {
    type: String,
    default: "Pending",
  },
  
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;

