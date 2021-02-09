import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const CustomButton = ({ text, style, onPress, color = "black" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={{ ...styles.buttonText, color }}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D1D8DB",
    width: "80%",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
