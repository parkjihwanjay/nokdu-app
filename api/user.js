import { getData } from "./makeRequest";
import { Platform } from "react-native";
const IP_ADDRESS = "211.245.121.137";
const PORT = "4500";
const baseURL =
  Platform.OS === "android"
    ? `http://${IP_ADDRESS}:${PORT}`
    : `http://127.0.0.1:${PORT}`;

export const userApi = {
  signup: (profile) =>
    getData({
      url: `${baseURL}/user`,
      method: "post",
      data: profile,
    }),
  login: (data) =>
    getData({
      url: `${baseURL}/login`,
      method: "post",
      data,
    }),
  getUserByToken: (token) =>
    getData({
      url: `${baseURL}/user`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  updateUser: (username, data) =>
    getData({
      url: `${baseURL}/user/${username}`,
      method: "put",
      data,
    }),
};
