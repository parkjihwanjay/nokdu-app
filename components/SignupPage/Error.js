import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const Error = ({ errorMessage }) => {
  return <Text style={styles.container}>{errorMessage}</Text>;
};
const styles = StyleSheet.create({
  container: {
    color: "red",
    marginTop: 10,
  },
});
