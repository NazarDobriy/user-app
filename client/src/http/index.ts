import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "https://user-app-production.up.railway.app/";

const $host = axios.create({ baseURL });

const $authHost = axios.create({ baseURL });

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
