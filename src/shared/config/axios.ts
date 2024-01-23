import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL as string;

const client = axios.create({
  timeout: 5000,
  baseURL: BASE_URL,
  withCredentials: true,
});

export { client };
