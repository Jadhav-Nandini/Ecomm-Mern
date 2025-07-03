// src/context/AuthContext.tsx
import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "../utils/axios" ; // you’ll configure this
import { useRouter } from "next/router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/userprofile");
      setUser(data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
