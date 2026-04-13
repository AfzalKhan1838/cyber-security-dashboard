import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const scanUrl = (url) => API.post("/scan", { url });
export const getLogs = () => API.get("/logs");
export const fetchUrl = (url) => API.post("/fetch", { url });