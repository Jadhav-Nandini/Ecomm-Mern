
'use client';

import { motion } from 'framer-motion';

export default function ProductCard({ product, isAdmin }: any) {
  return (
    <motion.div
      className="rounded-xl bg-white/40 backdrop-blur-md p-4 shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-xl font-bold text-[#d4af37] mt-2">₹{product.price}</p>

      {isAdmin && (
        <div className="flex gap-2 mt-3">
          <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
            Edit
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      )}
    </motion.div>
  );
}

