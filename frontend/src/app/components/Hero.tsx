"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-[#fff8f1] to-[#f9e8dd] text-center">
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Timeless Luxury Jewelry
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Discover pieces that speak elegance, grace, and heritage.
      </motion.p>

      <motion.button
        className="mt-8 px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
      >
        Explore Collection
      </motion.button>
    </section>
  );
};

export default Hero;
