// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "./utils/axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/product");
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Navbar />
    <Hero/>
    </>

  );
}

    // <main className="p-6">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to Precious Jewelry</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //     {products.map((product) => (
    //       <div key={product._id} className="border rounded p-4">
    //         <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded mb-2" />
    //         <h2 className="text-xl font-semibold">{product.name}</h2>
    //         <p className="text-sm text-gray-600">{product.description}</p>
    //         <p className="font-bold mt-2">₹{product.price}</p>
    //       </div>
    //     ))}
    //   </div>
    // </main>