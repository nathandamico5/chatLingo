import axios from "axios";

export const BASE_URL = "http://10.0.0.245:3000";
export default axios.create({
  baseURL: BASE_URL,
});
