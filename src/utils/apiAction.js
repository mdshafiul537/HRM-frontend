import axios from "axios";

import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosSecure = useAxiosSecure();

export const getAccessToken = async (user) => {
  try {
    const resp = await axiosSecure.post(`/auth/token`, { userEmail: user });

    return resp.data;
  } catch (error) {
    console.log("HR Token,", error);
  }
};

export const getSignOut = async (user) => {
  try {
    const resp = await axiosSecure.post(`/auth/logout`, {});

    console.log("Sign out Resp, ", resp);

    return resp.data;
  } catch (error) {
    console.log("HR SignOut,", error);
  }
};

export const addUserUsingAPI = async (user) => {
  try {
    const resp = await axiosSecure.post(`/users`, user);

    return resp.data;
  } catch (error) {
    console.log("User Added Error,", error);
  }
};

export const createUserViaAPI = async (user) => {
  try {
    console.log("createUser Info ", user);

    if (!user.hasOwnProperty("verified")) {
      user.verified = false;
    }

    if (!user.hasOwnProperty("verifiedEmail")) {
      user.verifiedEmail = false;
    }

    if (!user.hasOwnProperty("designation")) {
      user.designation = "";
    }

    if (!user.hasOwnProperty("autId")) {
      user.autId = "";
    }

    const resp = await axiosSecure.post(`/users`, user);

    return resp;
  } catch (error) {
    console.log("Loging User Create failed ", error);
  }
};

export const createNewLoginUserUsingAPI = async (profile) => {
  try {
    console.log("New Login User Info ", profile);
    const { email, name, picture, verified_email, id } = profile;

    const resp = await axiosSecure.post(`/users`, {
      name,
      email,
      verifiedEmail: verified_email,
      autId: id,
      role: "Employee",
      picture,
      verified: false,
      designation: null,
    });

    return resp;
  } catch (error) {
    console.log("Loging User Create failed ", error);
  }
};

export const getAllUserByRole = async (role) => {
  try {
    const resp = await axiosSecure.get(`/users/role/${role}`);

    return resp.data;
  } catch (error) {
    console.log("getAllUserByRole failed Error", error);
  }
};

export const getAllUser = async () => {
  try {
    const resp = await axiosSecure.get(`/users`);

    return resp.data;
  } catch (error) {
    console.log("getAllUserByRole failed Error", error);
  }
};

export const getAllUserByQuery = async (query) => {
  try {
    const resp = await axiosSecure.get(`/users/query/${query}`);

    return resp.data;
  } catch (error) {
    console.log("getAllUserByQuery failed Error", error);
  }
};

export const getUser = async (id) => {
  try {
    const resp = await axiosSecure.get(`/users/${id}`);

    return resp.data;
  } catch (error) {
    console.log("getAllUserByRole failed Error", error);
  }
};

export const updateUserViaApi = async (user) => {
  try {
    const resp = await axiosSecure.put(`/users`, user);

    return resp.data;
  } catch (error) {
    console.log("updateUser failed Error", error);
    return error;
  }
};

export const addTaskAction = async (task) => {
  const resp = await axiosSecure.post(`/tasks`, task);

  return resp.data;
};

export const getAllTask = async () => {
  try {
    const resp = await axiosSecure.get(`/tasks`);

    return resp.data;
  } catch (error) {
    console.log("Get All Task Error ", error);
  }
};

export const addWorkSheetItem = async (work) => {
  try {
    const resp = await axiosSecure.post(`/work-sheets`, work);
    return resp.data;
  } catch (error) {
    console.log("Add Work To Shhet Error ", error);
    return error;
  }
};

export const getWorkSheet = async () => {
  try {
    const resp = await axiosSecure.get(`/work-sheets`);
    return resp.data;
  } catch (error) {
    console.log("Add Work To Shhet Error ", error);
    return error;
  }
};

export const getWorkSheetByQuery = async (query) => {
  try {
    const resp = await axiosSecure.get(`/work-sheets/query`);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const uploadFileToImgBB = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const resp = await axios.post(
      `${import.meta.env.VITE_IMAGE_HOST_API_URL}?key=${
        import.meta.env.VITE_IMAGE_HOST_API_KEY
      }`,
      formData
    );
    console.log("uploadFileToImgBB Resp ", resp);
    return resp.data;
  } catch (error) {
    console.log("uploadFileToImgBB Error ", error);

    return error;
  }
};