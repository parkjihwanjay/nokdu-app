import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  ProfileRow,
  ProfileList,
  ProfileHeader,
  ProfileImage,
} from "../../components/ProfilePage";

export const Presenter = ({ profile, editProfile }) => {
  const { picUrl } = profile;
  return (
    <ScrollView>
      <ProfileHeader editProfile={editProfile} />
      <ProfileImage picUrl={picUrl} />
      <ProfileList {...profile} />
    </ScrollView>
  );
};
