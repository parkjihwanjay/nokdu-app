import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import Stack from "./navigation/Stack";
import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomePage,
  LoginPsage,
  NewPasscodePage,
  OldPasscodePage,
  SignupPage,
} from "./pages";
// delay splash screen
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") return Image.prefetch(image);
    else return Asset.fromModule(image).downloadAsync();
  });

const loadAssets = () => {
  const images = cacheImages([
    require("./assets/splash.png"),
    require("./assets/nokdu-icon.png"),
  ]);
  const fonts = cacheFonts([Ionicons.font, AntDesign.font]);
  return Promise.all([...fonts, ...images]);
};
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
