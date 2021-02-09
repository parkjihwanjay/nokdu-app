import React, { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const TitleText = ({ children, style = {} }) => {
  const title = children;
  return <Text style={{ ...styles.container, ...style }}>{title}</Text>;
};
const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
