import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const PasscodeItem = ({ inputEvent, index }) => {
  return (
    <TextInput
      style={styles.container}
      numeric
      keyboardType={"numeric"}
      maxLength={1}
      autoFocus={true}
      onChangeText={(text) => inputEvent({ index, text })}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    backgroundColor: "gray",
    borderRadius: 100,
    textAlign: "center",
    margin: 7,
  },
});
