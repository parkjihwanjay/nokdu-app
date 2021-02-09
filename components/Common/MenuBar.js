import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const MenuBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <MaterialIcons name="home" size={26} color="black" />
        <MaterialCommunityIcons
          name="clock-time-four-outline"
          size={26}
          color="black"
        />
        <Ionicons name="person" size={26} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  menuBar: {
    zIndex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderTopColor: "#D1D8DB",
    paddingBottom: 15,
    paddingTop: 15,
  },
});
