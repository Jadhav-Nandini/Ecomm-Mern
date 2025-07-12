
"use client";

import { useState, useContext, FormEvent } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axios";

export default function AuthPage() {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isSignup ? "/users" : "/users/login";
      const { data } = await axios.post(endpoint, formData);
      setUser(data);
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 relative ">
      <div className="absolute inset-0 blur-3xl z-0" />
      
      <div className="relative z-10 max-w-lg w-full bg-white/10 border border-white/30 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#3a2c1e] cursor-context-menu">
          {isSignup ? "Create an Account" : "Welcome Back!"}
        </h2>
        <p className="text-center text-sm text-[#5a4b3e] cursor-context-menu mb-6">
          {isSignup ? "Sign up to get started" : "Login to your account"}
        </p>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="relative mb-4">
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-300 focus:ring-2 focus:ring-gold-700 outline-none"
              />
              <FiUser className="absolute right-3 top-4 text-gray-300" size={20} />
            </div>
          )}

          <div className="relative mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:ring-1 focus:ring-[#59582c] focus:border-0 outline-none"
            />
            <FiMail className="absolute right-3 top-4 text-gray-500" size={20} />
          </div>

          <div className="relative mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-[#59582c] focus:border-0 outline-none"
            />
            <FiLock className="absolute right-3 top-4 text-gray-500" size={20} />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gold-700 text-white font-semibold py-2 rounded-lg bg-[#d4af37] hover:bg-[#b38b2d] transition duration-300"
          >
            {isSignup ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 cursor-pointer text-gold-300 hover:underline"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}
