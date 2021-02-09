import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HomePage, LoginPage } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStack } from "./ProfileStack";

const Tabs = createBottomTabNavigator();
const iconSize = 26;
const Stack = createStackNavigator();

const antIcon = (focused, category) => (
  <AntDesign
    name={category}
    size={iconSize}
    color={focused ? "black" : "grey"}
  />
);

const ionicIcon = (focused, os, category) => {
  const iconName = os === "ios" ? `ios-${category}` : `md-${category}`;
  return (
    <Ionicons
      name={iconName}
      color={focused ? "black" : "grey"}
      size={iconSize}
    />
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "홈";
  return routeName;
};
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderTitle(route),
    });
  }, [route]);
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      keyboardHidesTabBar={true}
      headerShown={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const os = Platform.OS;
          if (route.name === "Homepage") return ionicIcon(focused, os, "home");
          else if (route.name === "ProfileStack")
            return ionicIcon(focused, os, "person");
        },
      })}
    >
      <Tabs.Screen
        name="HomePage"
        component={HomePage}
        headerShown={false}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        headerShown={false}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Tabs.Navigator>
  );
};
