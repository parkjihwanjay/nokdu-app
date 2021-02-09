import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { CustomButton } from "./CustomButton";
export const CompleteButton = ({ onPress, style = {}, text = "완료" }) => {
  return (
    <CustomButton
      text={text}
      style={{ ...styles.button, ...style }}
      onPress={onPress}
      color="white"
    />
  );
};
const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: "#5FCB89",
    width: "100%",
    justifyContent: "center",
  },
});
