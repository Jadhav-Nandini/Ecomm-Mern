// "use client";
// import { motion } from "framer-motion";

// interface ProductProps {
//   _id: string;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
// }

// const ProductCard = ({ product }: { product: ProductProps }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all"
//       whileHover={{ scale: 1.02 }}
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-56 w-full object-cover rounded-lg mb-4"
//       />
//       <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
//       <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
//       <p className="mt-2 font-bold text-lg text-gray-800">₹{product.price}</p>
//     </motion.div>
//   );
// };

// export default ProductCard;



// export default function ProductCard({ product, isAdmin }: any) {
//   return (
//     <div className="rounded-lg bg-white/40 backdrop-blur-md p-4 shadow-md hover:shadow-xl transition">
//       <img src={product.image} className="h-48 w-full object-cover rounded mb-3" />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-sm text-gray-600">{product.description}</p>
//       <p className="text-xl font-bold mt-2">₹{product.price}</p>
//       {isAdmin && (
//         <div className="flex gap-2 mt-3">
//           <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
//           <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
//         </div>
//       )}
//     </div>
//   );
// }


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

