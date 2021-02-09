import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PasscodeItem } from "../components";
export const NewPasscodePage = () => {
  const [passcode, setPasscode] = useState("    ");
  const inputEvent = ({ index, text }) => {
    const result = makeNewPasscode(index, text);
    setPasscode(result);
  };
  const makeNewPasscode = (index, text = " ") => {
    let result = "";
    passcode.split("").forEach((item, i) => {
      if (i == index) result += text;
    });
    return result;
  };
  return (
    <View style={styles.container}>
      <View style={styles.passcodeList}>
        {[...Array(4)].map((item, i) => (
          <PasscodeItem inputEvent={inputEvent} key={i} index={i} />
        ))}
      </View>
      <View style={styles.textInfo}>
        <Text style={styles.text}>녹두세요?</Text>
        <Text style={styles.text}>패스코드를 입력해주세요</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  passcodeList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInfo: {
    alignItems: "center",
    paddingTop: 50,
  },
});
