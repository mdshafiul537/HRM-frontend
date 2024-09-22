import axios from "axios";

import { isEmptyOrNull } from "./helper";
import { REQUEST_HEADER } from "./types";

axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";
axios.defaults.headers = REQUEST_HEADER;

export const getAccessToken = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/token`,
      { userEmail: user }
    );

    return resp.data;
  } catch (error) {
    console.log("HR Token,", error);
  }
};

export const getSignOut = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/logout`,
      {}
    );

    console.log("Sign out Resp, ", resp);

    return resp.data;
  } catch (error) {
    console.log("HR SignOut,", error);
  }
};

export const addUserUsingAPI = async (user) => {
  try {
    const resp = await axios.post(
      `${import.meta.env.VITE_API_URL}/users`,
      user
    );

    return resp.data;
  } catch (error) {
    console.log("User Added Error,", error);
  }
};
