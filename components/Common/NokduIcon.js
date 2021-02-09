import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import icon from "../../assets/nokdu-icon.png";
import { ImgView } from "./ImgView";
export const NokduIcon = () => {
  return (
    <>
      <ImgView source={icon} style={styles.img} />
      <Text style={styles.logo}>녹두울림</Text>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    marginTop: 130,
    width: 50,
    height: 50,
  },
  logo: {
    color: "#37C36D",
    fontSize: 20,
    paddingTop: 20,
  },
});
