import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { CompleteButton, TitleText, InputText } from "../components";
export const OldPasscodePage = ({ navigation }) => {
  const [passcode, setPasscode] = useState("");
  const onChangeText = (text) => {
    setPasscode(text);
  };
  const onPress = () => {
    Alert.alert(passcode);
    navigation.navigate("OnboardingPage");
  };
  return (
    <View style={styles.container}>
      <TitleText style={styles.title}>개인 패스코드 입력</TitleText>
      <InputText
        placeholder="개인 패스코드를 입력해주세요"
        style={styles.input}
        keyboardType="numeric"
        isPassword={false}
        onChangeText={onChangeText}
      />
      <CompleteButton onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 100,
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 30,
  },
  input: {
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 20,
  },
});
