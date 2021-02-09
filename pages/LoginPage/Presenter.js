import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import {
  EntryYear,
  CompleteButton,
  TextInput,
  List,
  Buffer,
} from "../../components";

import { userApi } from "../../api";
import { handleError } from "../../utils";

export default ({ data, setData, onPress }) => {
  return (
    <>
      <ScrollView>
        <View style={{ paddingLeft: 20 }}>
          <TextInput
            title="아이디 입력"
            placeholder="아이디를 입력해주세요"
            value={data.username}
            name="username"
            onChangeText={(username) => setData({ ...data, username })}
          />
          <TextInput
            title="비밀번호 입력"
            placeholder="비밀번호를 입력해주세요"
            value={data.password}
            name="password"
            onChangeText={(password) => setData({ ...data, password })}
            isPassword={true}
          />
        </View>
      </ScrollView>
      <CompleteButton onPress={onPress} />
    </>
  );
};
