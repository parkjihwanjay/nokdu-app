import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { CustomButton } from "../Common";
import icon from "../../assets/nokdu-icon.png";
export const ProfileHeader = ({ editProfile }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={icon} />
        <Text style={{ fontWeight: "bold", fontSize: 17, marginLeft: 15 }}>
          내 프로필
        </Text>
      </View>
      <CustomButton
        text="수정하기"
        color="white"
        style={styles.button}
        onPress={() => editProfile()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 30,
  },
  button: {
    backgroundColor: "#5FCB89",
    borderRadius: 8,
    height: 30,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 20,
  },
});
