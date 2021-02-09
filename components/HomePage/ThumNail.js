import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import playButton from "../../assets/play_button.png";

export const ThumNail = ({ item, style, onPress }) => {
  return (
    <>
      <Image
        source={{ uri: item.imgUrl }}
        style={{ borderRadius: 16, width: 312, height: 500 }}
      />
      <TouchableOpacity
        style={styles.playInfo}
        onPress={() => onPress(item.videoId)}
      >
        <Image source={playButton}></Image>
        <View style={styles.textBox}>
          <Text style={{ ...styles.textInfo, ...styles.date }}>
            {item.date}
          </Text>
          <Text style={styles.textInfo}>{item.title}</Text>
          <Text style={styles.textInfo}>조회수 : {item.viewCount}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  playInfo: {
    flexDirection: "row",
    bottom: 100,
    left: 10,
    zIndex: 10,
    alignItems: "center",
  },
  textInfo: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  date: {
    fontWeight: "bold",
    paddingBottom: 4,
  },
  textBox: {
    paddingLeft: 10,
  },
});
