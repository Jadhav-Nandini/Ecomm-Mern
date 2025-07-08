
"use client"
import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "../utils/axios"; // axios instance
import { useRouter } from "next/navigation";

type UserType = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
};

type AuthContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/users/userprofile");
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
