import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.131.69.11:5000/"
})