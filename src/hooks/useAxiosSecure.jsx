import axios from "axios";
import { REQUEST_HEADER_SECURE } from "../utils/types";
import localStore from "../utils/localStore";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: REQUEST_HEADER_SECURE,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();

  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      config.headers.Authorization = localStore.getToken();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        const resp = await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
