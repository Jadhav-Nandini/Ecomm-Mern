
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      className="rounded-2xl px-8 py-16 bg-white/20 shadow-2xl backdrop-blur-2xl text-center border border-white/10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4af37] drop-shadow mb-4 tracking-wide">
        Discover Timeless Elegance
      </h1>
      <p className="text-gray-700 text-lg sm:text-xl max-w-xl mx-auto">
        Crafted with precision, designed for royalty. Elevate your elegance with Jewella’s signature collection.
      </p>
    </motion.div>
  );
}
