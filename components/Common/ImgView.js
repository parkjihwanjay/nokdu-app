import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export const ImgView = ({ style, source }) => {
  return (
    <View style={style}>
      <Image source={source} style={styles.img}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
});
