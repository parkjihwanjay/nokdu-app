import { statusMessage } from "./statusMessage";
import { Alert } from "react-native";
export const handleError = (error, cb) => {
  console.log(error.response);
  const statusCode = error.response.status;
  const { message } = error.response.data;
  Alert.alert(message);
  cb();
};
