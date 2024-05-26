import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://testapi-tan-five.vercel.app",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
