import cron from "node-cron";
import Order from "../models/order.js";
import Product from "../models/product.js";

const startCronJobs = () => {

  // Run every 10 minutes
  cron.schedule("*/10 * * * *", async () => {
    console.log("⏰ Checking unpaid orders...");

    try {
      const thirtyMinAgo = new Date(Date.now() - 30 * 60 * 1000);

      const unpaidOrders = await Order.find({
        paymentStatus: "Pending",
        createdAt: { $lt: thirtyMinAgo },
        orderStatus: "Placed"
      });

      for (const order of unpaidOrders) {

        // restore stock
        for (const item of order.orderItems) {
          await Product.findByIdAndUpdate(
            item.product,
            { $inc: { stock: item.quantity } }
          );
        }

        // cancel order
        order.orderStatus = "Cancelled";
        await order.save();

        console.log("❌ Cancelled Order:", order._id);
      }

    } catch (error) {
      console.error('Cron failed', error.message );   
    }


  });
};

export default startCronJobs;