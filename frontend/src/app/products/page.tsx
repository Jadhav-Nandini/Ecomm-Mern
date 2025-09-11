
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import axios from "../utils/axios";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string | { _id: string; name: string };
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  // Fetch products
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/product", { withCredentials: true });
        if (!mounted) return;

        // ✅ Normalize category into a string always
        const normalized = Array.isArray(data)
          ? data.map((p) => ({
              ...p,
              category:
                typeof p.category === "object" && p.category !== null
                  ? p.category.name
                  : p.category,
            }))
          : [];

        setProducts(normalized);
      } catch (e: any) {
        setErr("Failed to load products.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Derive unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  // Filtered list
  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "All") {
      list = list.filter(
        (p) =>
          (p.category || "").toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, category, search]);

  return (
    <section
      id="collection"
      className="min-h-screen w-full bg-gradient-to-t from-black/70 via-transparent to-black/40 z-0 px-5 sm:px-8 lg:px-14 py-14"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-amber-300 cursor-context-menu">
          Our Exclusive Collection
        </h1>
        <p className="text-center text-gray-300 mt-2">
          Handcrafted designs in gold & diamonds — curated for every occasion.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, category, or keyword..."
            className="w-full rounded-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 px-5 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Category Select */}
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-full bg-white/10 border border-white/20 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-[#282500]">
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto mt-4 hidden md:flex flex-wrap gap-3">
        {categories.map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={[
                "px-4 py-2 rounded-full text-sm transition border",
                active
                  ? "bg-amber-400 text-black border-amber-300"
                  : "bg-white/5 text-white border-white/20 hover:bg-white/15",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-10">
        {loading ? (
          <SkeletonGrid />
        ) : err ? (
          <p className="text-center text-amber-400">{err}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-300">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden bg-white/10 border border-white/20"
        >
          <div className="h-56 w-full bg-white/10 animate-pulse" />
          <div className="p-5 space-y-3">
            <div className="h-5 w-3/4 bg-white/10 animate-pulse rounded" />
            <div className="h-4 w-1/2 bg-white/10 animate-pulse rounded" />
            <div className="h-6 w-1/3 bg-white/10 animate-pulse rounded" />
            <div className="h-10 w-full bg-white/10 animate-pulse rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
