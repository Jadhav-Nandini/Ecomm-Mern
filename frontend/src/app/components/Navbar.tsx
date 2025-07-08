
'use client';

import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  User,
  LogIn,
  LogOut,
  Layers,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    await fetch("/users/logout", {
      method: "POST",
      credentials: "include",
    });
    auth?.setUser(null);
  };

  return (
    <>
      {/* Topbar */}
      <div className="h-5 top-0 left-0 w-full flex justify-between items-center px-6 py-8 z-50 bg-[#f3e6d1] border-white/10">
        <h2 className="text-4xl font-bold text-[#d4af37] tracking-wider font-heading">Jewella</h2>
        <button
          className="text-gray-900 dark:text-white hover:scale-110 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Right Slide Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#c9a57ff1] backdrop-blur-xl border-l border-white/10 p-6 z-50"
          >
            <button
              className="absolute top-4 right-4 text-gray-900 hover:scale-110 transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-4 text-gray-800 font-medium mt-12">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-[#d4af37]"
                onClick={() => setIsOpen(false)}
              >
                <Layers size={18} /> Home
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 hover:text-[#d4af37]"
                onClick={() => setIsOpen(false)}
              >
                <Layers size={18} /> Products
              </Link>

              {auth?.user?.isAdmin && (
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-2 hover:text-[#d4af37]"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard size={18} /> Admin Dashboard
                </Link>
              )}

              {auth?.user ? (
                <>
                  <p className="text-sm mt-6 text-gray-600">
                    Hello, {auth.user.username}
                  </p>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 text-red-600 mt-2 hover:text-red-800"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 hover:text-[#d4af37]"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn size={18} /> Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center gap-2 hover:text-[#d4af37]"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} /> Signup
                  </Link>
                </>
              )}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
