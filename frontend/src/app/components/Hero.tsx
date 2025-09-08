
// 'use client';

// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <motion.div
//       className="rounded-2xl px-8 py-16 bg-white/20 shadow-2xl backdrop-blur-2xl text-center border border-white/10 max-w-4xl mx-auto"
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4af37] drop-shadow mb-4 tracking-wide ">
//         Discover Timeless Elegance
//       </h1>
//       <p className="text-gray-700 text-lg sm:text-xl max-w-xl mx-auto">
//         Crafted with precision, designed for royalty. Elevate your elegance with Jewella’s signature collection.
//       </p>
//     </motion.div>
//   );
// }


// "use client";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative w-full h-screen bg-black overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/hero-bg.jpg"
//         alt="Jewellery Model"
//         fill
//         className="object-cover opacity-80"
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//       {/* Text Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center h-full">
//         <div className="text-white max-w-lg">
//           <h1 className="text-5xl font-serif tracking-wide">
//             Timeless <span className="text-gold">Elegance</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-200">
//             Handcrafted gold & diamond jewellery for your unforgettable moments.
//           </p>
//           <div className="mt-6 flex gap-4">
//             <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
//               Explore Collection
//             </button>
//             <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
//               View Story
//             </button>
//           </div>
//         </div>

//         {/* Floating Product Card */}
//         <div className="hidden lg:block ml-auto relative z-10">
//           <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-4 shadow-2xl">
//             <Image
//               src="/necklace.png"
//               alt="Gold Necklace"
//               width={350}
//               height={350}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0c2337] to-[#0d1f51] text-white px-6 md:px-12 lg:px-20">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6 text-center lg:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Welcome to <span className="text-pink-400">Your Brand</span>
//           </h1>
//           <p className="text-gray-300 max-w-lg mx-auto lg:mx-0">
//             Discover the elegance of fine craftsmanship with our exclusive
//             collection. Designed for those who value timeless beauty and luxury.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-full shadow-lg flex items-center gap-2">
//               Explore Collection <FiArrowRight />
//             </button>
//             <button className="px-6 py-3 border border-pink-400 rounded-full hover:bg-pink-500 hover:border-pink-500 transition">
//               Contact Us
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex justify-center"
//         >
//           <img
//             src="./dragonfly pendant.jpg"
//             alt="Luxury Jewelry"
//             className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();

//   const handleExploreClick = () => {
//     // Option 1: Scroll to collection section on the same page
//     const collectionSection = document.getElementById("collection");
//     if (collectionSection) {
//       collectionSection.scrollIntoView({ behavior: "smooth" });
//       return;
//     }
//     // Option 2: Navigate to products page
//     router.push("/products");
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0c2337] to-[#0d1f51] text-white px-6 md:px-12 lg:px-20">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6 text-center lg:text-left"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Welcome to <span className="text-pink-400">Jewella</span>
//           </h1>
//           <p className="text-gray-300 max-w-lg mx-auto lg:mx-0">
//             Discover the elegance of fine craftsmanship with our exclusive
//             collection. Designed for those who value timeless beauty and luxury.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button
//               onClick={handleExploreClick}
//               className="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-full shadow-lg flex items-center gap-2"
//             >
//               Explore Collection <FiArrowRight />
//             </button>
//             <button className="px-6 py-3 border border-pink-400 rounded-full hover:bg-pink-500 hover:border-pink-500 transition">
//               Contact Us
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex justify-center"
//         >
//           <img
//             src="./dragonfly pendant.jpg"
//             alt="Luxury Jewelry"
//             className="rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
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
          className="flex justify-center"
        >
          {!imageLoaded && (
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-800 animate-pulse rounded-2xl" />
          )}
          <img
            src="./dragonfly pendant.jpg"
            alt="Luxury Jewelry"
            className="rounded-2xl shadow-xl w-64 h-64 sm:w-80 sm:h-80 object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
}
