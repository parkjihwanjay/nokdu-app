import { getData } from "./makeRequest";
import { Platform } from "react-native";
const IP_ADDRESS = "211.245.121.137";
const PORT = "4500";
const baseURL =
  Platform.OS === "android"
    ? `http://${IP_ADDRESS}:${PORT}`
    : `http://127.0.0.1:${PORT}`;

export const authApi = {
  checkUsername: (username) =>
    getData({
      url: `${baseURL}/username`,
      method: "post",
      data: username,
    }),
};
