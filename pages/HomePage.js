import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import {
  MenuBar,
  VideoList,
  ImgView,
  ThumNailList,
  VideoPlayer,
} from "../components";
import icon from "../assets/nokdu-icon.png";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
const apiKey = "AIzaSyATvMoQBAISHeN7AibCN1FyPUJTzEtEzd0";

export const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoId, setVideoId] = useState("");
  const onPress = (videoId) => {
    setVideoId(videoId);
    setIsModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <ImgView source={icon} style={styles.imgView} />
      <ThumNailList onPress={onPress} />
      <Modal isVisible={isModalVisible}>
        <TouchableOpacity
          style={{ position: "absolute", top: 0, right: 0 }}
          onPress={() => setIsModalVisible(false)}
        >
          <AntDesign name="close" size={40} color="green" />
        </TouchableOpacity>
        <VideoPlayer videoId={videoId} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgView: {
    width: 28,
    height: 28,
    marginTop: 20,
    marginBottom: 20,
  },
});
