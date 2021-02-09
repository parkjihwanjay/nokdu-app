import React, { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const InputText = ({
  placeholder,
  style,
  isPassword,
  value,
  onChangeText,
  keyboardType,
  focus = false,
}) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      keyboardType={keyboardType}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 20,
  },
});
