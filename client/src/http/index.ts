import axios from "axios";

const $host = axios.create({
  baseURL: "https://user-app-production.up.railway.app/"
});

export { $host };
