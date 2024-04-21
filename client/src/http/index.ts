import axios, { InternalAxiosRequestConfig } from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
