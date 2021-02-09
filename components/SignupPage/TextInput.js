import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { TitleText, InputText } from "../Common";
import { Error } from "./Error";
import { ViewBox } from "./ViewBox";
export const TextInput = ({
  onChangeText,
  title,
  value = "",
  placeholder,
  isPassword = false,
}) => {
  return (
    <View style={styles.container}>
      <TitleText>{title}</TitleText>
      <InputText
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        isPassword={isPassword}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  input: {
    fontSize: 20,
    paddingTop: 20,
  },
});
