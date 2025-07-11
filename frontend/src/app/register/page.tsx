"use client";

import { FormEvent, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

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
      const { data } = await axios.post("/users", formData);
      setUser(data); // sets context
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-lg p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#dbc082ee]">Create Account</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-2 rounded bg-white/70 border text-black border-gray-300"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-white/70 text-black border border-gray-300"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2  text-black rounded bg-white/70 border border-gray-300"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full text-[#111] py-2 text-xl rounded-xl hover:bg-yellow-600/90 transition "
        >
          Register
        </button>
      </form>
    </div>
  );
}
