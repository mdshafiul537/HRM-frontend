import axios from "axios";
import { REQUEST_HEADER_SECURE } from "../utils/types";
import localStore from "../utils/localStore";

const getHeaders = () => {
  const headers = REQUEST_HEADER_SECURE;
  REQUEST_HEADER_SECURE.Authorization = localStore.getToken();
  return headers;
};

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: getHeaders(),
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
