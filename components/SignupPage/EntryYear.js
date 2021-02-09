import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { TitleText, CustomButton } from "../Common";
import { ViewBox } from "./ViewBox";
const list = ["13", "14", "15", "16", "17", "18"];
export const EntryYear = ({ onChangeValue, value = "" }) => {
  const [entryYear, setEntryYear] = useState(value);
  const renderItem = ({ item }) => {
    return (
      <CustomButton
        text={item}
        style={{
          ...styles.button,
          backgroundColor: entryYear == item ? "#5FCB89" : "transparent",
        }}
        onPress={() => {
          onChangeValue(item);
          setEntryYear(item);
        }}
      ></CustomButton>
    );
  };

  return (
    <View style={styles.container}>
      <TitleText style={styles.title}>학번</TitleText>
      <SafeAreaView style={styles.scrollBox}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  scrollBox: {
    flexDirection: "row",
    marginTop: 20,
    width: "90%",
  },
  button: {
    width: 83,
    height: 48,
    justifyContent: "center",
    borderRadius: 8,
  },
});
