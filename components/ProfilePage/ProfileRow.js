import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const ProfileRow = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", width: 80 }}>{title}</Text>
      <Text style={{ fontWeight: "bold" }}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    fontSize: 14,
    marginTop: 10,
  },
});
