import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  AsyncStorage,
} from "react-native";
import {
  EntryYear,
  CompleteButton,
  TextInput,
  List,
  Buffer,
} from "../../components";
import { userApi } from "../../api";
import { handleError } from "../../utils";
import Presenter from "./Presenter";
export default ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const login = async (data) => {
    const [result, error] = await userApi.login(data);
    if (error) handleError(error, () => {});
    else {
      const { user, token } = result.data;
      await AsyncStorage.setItem("token", token);
      Alert.alert("로그인에 성공했습니다");
      navigation.navigate("ProfilePage", {
        user,
      });
    }
  };
  const onPress = () => {
    login(data);
  };
  return (
    <Presenter
      {...{
        data,
        setData,
        onPress,
      }}
    />
  );
};
