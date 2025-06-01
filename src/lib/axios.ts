import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5154/api",
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || "";
    if (config.url !== "/auth/criar-conta" && config.url !== "/auth/entrar") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
export { axiosInstance as axios };
