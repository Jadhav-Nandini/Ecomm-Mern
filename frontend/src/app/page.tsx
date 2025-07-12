
'use client';'use client';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import axios from './utils/axios';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { motion } from 'framer-motion';

type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function HomePage() {
  const { user } = useContext(AuthContext)!;
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/product', {
          withCredentials: true,
        });
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <motion.div
      className="min-h-screen p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero/>

      <section className="mt-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#d4af37] tracking-wider mb-10 cursor-context-menu"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {user?.isAdmin ? 'Manage Inventory' : 'Explore Our Premium Collection'}
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} isAdmin={user?.isAdmin} />
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
}
