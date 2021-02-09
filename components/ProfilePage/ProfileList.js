import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ProfileRow } from "./ProfileRow";

export const ProfileList = ({
  name,
  session,
  entryYear,
  task,
  firstMajor,
  secondMajor,
  email,
  username,
}) => {
  return (
    <View style={{ paddingLeft: 30, marginTop: 20 }}>
      <ProfileRow title="이름" content={name} />
      <ProfileRow title="세션" content={session} />
      <ProfileRow title="학번" content={entryYear} />
      <ProfileRow title="업무" content={task} />
      <ProfileRow title="전공" content={firstMajor} />
      <ProfileRow title="이중" content={secondMajor} />
      <ProfileRow title="이메일" content={email} />
      <ProfileRow title="아이디" content={username} />
    </View>
  );
};
