import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components";
import { NokduIcon, CompleteButton } from "../components/Common";
export const SignupSuccess = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <NokduIcon />
      <Text style={{ paddingTop: 30 }}>가입이 완료되었어요!</Text>
      <CompleteButton
        style={styles.button}
        text="내 프로필로 이동하기"
        onPress={() => {
          navigation.navigate("ProfilePage", { user: route.params.user });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    width: "80%",
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
  },
});
