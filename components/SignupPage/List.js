import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TitleText, CustomButton } from "../Common";
import { ViewBox } from "./ViewBox";

export const List = ({ title, list, onChangeValue, value = "" }) => {
  const [checked, setChecked] = useState(value);
  return (
    <View style={styles.container}>
      <TitleText>{title}</TitleText>
      <View style={styles.sessionList}>
        {list.map((item, index) => (
          <CustomButton
            text={item}
            key={index}
            style={{
              ...styles.button,
              backgroundColor: checked == item ? "#5FCB89" : "white",
            }}
            onPress={() => {
              setChecked(item);
              onChangeValue(item);
            }}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  sessionList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  button: {
    borderRadius: 8,
    alignSelf: "center",
    height: 48,
    marginRight: 10,
    padding: 30,
    justifyContent: "center",
    marginBottom: 20,
  },
});
