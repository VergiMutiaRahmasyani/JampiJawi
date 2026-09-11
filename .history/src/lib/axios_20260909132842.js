import axios from "axios";

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("jamujawi_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

authApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("jamujawi_token");
      localStorage.removeItem("jamujawi_user");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);