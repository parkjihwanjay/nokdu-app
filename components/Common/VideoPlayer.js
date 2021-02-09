import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Video } from "expo-av";
import playButton from "../../assets/play_button.png";
import { WebView } from "react-native-webview";
// import Youtube from "react-native-youtube";
import YoutubePlayer from "react-native-youtube-iframe";

{
  /* <YoutubePlayer videoId={"iee2TATGMyI"} height={300} width={300} />; */
}
const apiKey = "AIzaSyATvMoQBAISHeN7AibCN1FyPUJTzEtEzd0";

export const VideoPlayer = ({ date, title, url }) => {
  return (
    <YoutubePlayer
      play={true}
      videoId={"XCa5h0OIqKk"}
      contentScale={1}
      height={300}
    />
  );
};
