
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // your backend base URL
  withCredentials: true,            // send cookies (for auth JWT)
});

export default instance;


