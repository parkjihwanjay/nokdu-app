import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { VideoPlayer } from "../Common";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { DATA } from "./videoDummy";
import { ThumNail } from "./ThumNail";
export const ThumNailList = ({ onPress }) => {
  const [list, setList] = useState([
    {
      title: "asdf",
      videoId: "daOwnPhkDxs",
      date: "1996",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
    {
      title: "asdf",
      videoId: "daOwnPhkDxs",
      date: "1996",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
    {
      title: "asdf",
      videoId: "daOwnPhkDxs",
      date: "1996",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
    {
      title: "asdf",
      videoId: "daOwnPhkDxs",
      date: "1996",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
    {
      title: "asdf",
      date: "1996",
      videoId: "daOwnPhkDxs",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
    {
      title: "asdf",
      videoId: "daOwnPhkDxs",
      date: "1996",
      imgUrl:
        "https://i.ytimg.com/an_webp/XCa5h0OIqKk/mqdefault_6s.webp?du=3000&sqp=CJ7Sw4AG&rs=AOn4CLDJnKDm2L_d3ByAPHbRv1ic2p_y_w ",
      viewCount: 13,
    },
  ]);
  // const getData = async () => {
  //   try {
  //     const result = await axios.get("http://127.0.0.1:5000/crawling");
  //     setList(result.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      {list.map((item, index) => (
        <ThumNail
          item={item}
          onPress={onPress}
          style={styles.player}
          key={index}
        />
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: "80%",
  },
  scrollView: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  player: {
    // flex: 1,
    width: 1000,
    height: 500,
    justifyContent: "center",
    borderRadius: 16,
    marginBottom: 20,
  },
});
