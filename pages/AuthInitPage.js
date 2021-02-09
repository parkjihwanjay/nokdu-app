import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ImgView, CustomButton } from "../components";
import icon from "../assets/nokdu-icon.png";
import { LinearGradient } from "expo-linear-gradient";
import { NokduIcon } from "../components/Common";
const Stack = createStackNavigator();

export const AuthInitPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <NokduIcon />
        <Text style={{ paddingTop: 50 }}>녹두세요?</Text>
        <Text>프로필 설정을 하기 위해서 로그인을 해주세요</Text>
      </View>
      <View style={{ ...styles.halfContainer, paddingTop: 130 }}>
        <CustomButton
          text="로그인"
          style={styles.button}
          onPress={() => navigation.navigate("LoginPage")}
        />
        <CustomButton
          text="회원가입"
          style={styles.button}
          onPress={() => navigation.navigate("SignupPage")}
        />
        <CustomButton text="녹두울림 지원하기" style={styles.applyButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    // justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginTop: 130,
    width: 50,
    height: 50,
  },
  applyButton: {
    backgroundColor: "transparent",
  },
  logo: {
    color: "#37C36D",
    fontSize: 20,
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#D1D8DB",
    width: "80%",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
});
