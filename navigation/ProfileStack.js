import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AuthInitPage,
  SignupContainer,
  LoginContainer,
  SignupSuccess,
  HomePage,
  ProfilePage,
} from "../pages";

const Stack = createStackNavigator();

export const ProfileStack = () => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setToken(token);
  };
  const [token, setToken] = useState(null);
  useEffect(() => {
    getToken();
  }, []);

  return (
    <Stack.Navigator initialRouteName={token ? "ProfilePage" : "AuthInitPage"}>
      <Stack.Screen name="AuthInitPage" component={AuthInitPage} />
      <Stack.Screen name="LoginPage" component={LoginContainer} />
      <Stack.Screen name="SignupPage" component={SignupContainer} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        initialParams={{ token }}
      />
    </Stack.Navigator>
  );
};
