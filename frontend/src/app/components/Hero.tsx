
"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);


const router = useRouter();
  const handleExploreClick = () => {
  const section = document.getElementById("collection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push("/products");
  }
};

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1a1a1a] text-white px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Discover Our{" "}
            <span className="text-amber-400">Premium Collection</span>
          </h1>

          <p className="text-gray-300 max-w-lg mx-auto lg:mx-0">
            Indulge in elegance with our handcrafted jewelry — where artistry
            meets timeless luxury.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleExploreClick} 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 transition rounded-full shadow-lg flex items-center justify-center gap-2 font-medium"
            >
              Explore Collection <FiArrowRight />
            </button>
            <button
            
              className="px-6 py-3 border border-amber-400 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black transition font-medium"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: imageLoaded ? 1 : 0.5, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
      
          <img
            src="./dragonfly pendant.jpg"
            alt="Luxury Jewelry"
            className="rounded-2xl shadow-sm w-80 h-76 sm:w-100 sm:h-80 object-cover brightness-120"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
}
