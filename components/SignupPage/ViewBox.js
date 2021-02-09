import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Error } from "./Error";
import { SignupContext } from "../../pages/SignupPage/Context";

export const ViewBox = ({ children, name, scrollUp }) => {
  const [y, setY] = useState(0);
  const { emptyKey, click } = useContext(SignupContext);
  const errorMessage = emptyKey === "username" ? "" : "내용을 입력해주세요";
  useEffect(() => {
    if (emptyKey === name) {
      scrollUp({ y, animated: true });
    }
  }, [click]);
  return (
    <View
      onLayout={(e) => {
        const { y } = e.nativeEvent.layout;
        setY(y);
      }}
    >
      {children}
      {emptyKey === name ? <Error errorMessage={errorMessage} /> : null}
    </View>
  );
};
