import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Base URL untuk API lokal
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
