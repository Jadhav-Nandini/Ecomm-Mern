"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "../../utils/axios";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string | { _id: string; name: string };
};

export default function ProductDetails() {
  const { id } = useParams(); // yahan id milega
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/product/${id}`);
        setProduct(data);
      } catch (e: any) {
        console.error(e);
        setErr("Failed to load product.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-gray-400">Loading...</p>;
  if (err) return <p className="text-center mt-10 text-red-400">{err}</p>;
  if (!product) return <p className="text-center mt-10 text-gray-400">Product not found.</p>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0c2337] to-[#0d1f51] px-5 sm:px-10 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl w-full h-96 object-cover shadow-lg"
        />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          <p className="text-gray-300">{product.description}</p>
          <p className="text-2xl font-semibold text-amber-300">₹{product.price}</p>
          {product.category && (
            <span className="inline-block px-4 py-1 rounded-full bg-amber-400 text-black text-sm font-medium">
              {typeof product.category === "string" ? product.category : product.category.name}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
