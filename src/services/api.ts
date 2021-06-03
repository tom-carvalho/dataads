import axios from "axios";

export const api = axios.create({
  baseURL: "http://18.117.123.22:5000/"
})