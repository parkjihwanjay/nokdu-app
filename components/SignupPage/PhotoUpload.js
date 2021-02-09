import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CustomButton } from "../Common";
import { TitleText } from "../Common";
import nokdu from "../../assets/nokdu-icon.png";

const Photo = ({ uri, pushImg = () => {}, isInitial = false }) => {
  const onPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    pushImg(result.uri);
  };
  return (
    <View style={{ width: 100, height: 100, marginRight: 20 }}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri }} />
        {/* {isInitial ? (
          <Image style={styles.img} source={source}></Image>
        ) : (
          <Image style={styles.img} source={{ uri: source }}></Image>
        )} */}
      </View>
      <CustomButton text="추가" style={styles.button} onPress={onPress} />
      {/* {isInitial && (
      )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D1D8DB",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "relative",
    bottom: 56,
  },
  img: {
    opacity: 0.3,
  },
});
export const PhotoUpload = ({ onChangeValue, image }) => {
  const pushImg = (img) => {
    onChangeValue(img);
  };
  return (
    <View style={{ marginTop: 30, marginBottom: 30 }}>
      <TitleText>{"프로필 사진"}</TitleText>
      <Text style={{ marginTop: 14, marginBottom: 14 }}>
        사진을 등록하지 않으면, 기본 이미지로 등록됩니다.
      </Text>
      <ScrollView horizontal={true}>
        <Photo uri={image} pushImg={onChangeValue} isInitial={true} />
        {/* {imageList.map((img, index) => (
          <Photo source={img} key={index} />
        ))} */}
      </ScrollView>
    </View>
  );
};
