import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export const ProfileImage = ({ picUrl }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
        source={{ uri: picUrl }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
