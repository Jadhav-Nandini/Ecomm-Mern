
"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // 👈 import add karo


type Props = {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: {_id: string; name: string} | string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl"
    >
      {/* Media */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.category && (
          <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-amber-100 text-black shadow">
           {typeof product.category === "object"
      ? product.category.name
      : product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-300 mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-[#e6e1c8]">₹{product.price}</p>
          <Link
            href={`/products/${product._id}`} // dynamic route

          className="px-4 py-2 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-300 transition">
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
