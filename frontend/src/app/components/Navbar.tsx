"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, UserCircle2 } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full px-10 py-4 bg-white/80 backdrop-blur-lg shadow-md fixed top-0 z-50 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold text-gray-900 tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          Precious
        </motion.div>

        <div className="flex gap-8 items-center text-gray-800 font-medium text-lg">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-gray-700">
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6 hover:text-black transition" />
          </Link>
          <Link href="/account">
            <UserCircle2 className="w-6 h-6 hover:text-black transition" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
