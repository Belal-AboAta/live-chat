import axios from "axios";

export const axiosInstance = axios.create({
  // TODO: replace with env variable
  baseURL: "http://localhost:3000",
});
