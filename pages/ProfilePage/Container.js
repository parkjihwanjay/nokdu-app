import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { userApi } from "../../api/user";
import { Presenter } from "./Presenter";

export const Container = ({ route, navigation }) => {
  const [profile, setProfile] = useState({
    name: "",
    session: "",
    entryYear: "",
    task: "",
    firstMajor: "",
    secondMajor: "",
    email: "",
    username: "",
    password: "",
  });
  const editProfile = () => {
    navigation.navigate("SignupPage", { profile });
  };
  const getProfile = async () => {
    const { token, user } = route.params;
    if (user) return setProfile(user);
    const [result, error] = await userApi.getUserByToken(token);
    setProfile(result.data.user);
  };
  useEffect(() => {
    getProfile();
  }, []);
  return <Presenter {...{ profile, editProfile }} />;
};
