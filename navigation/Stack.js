import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
    </Stack.Navigator>
  );
};
