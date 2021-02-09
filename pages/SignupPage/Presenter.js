import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  Button,
} from "react-native";
import {
  EntryYear,
  CompleteButton,
  TextInput,
  List,
  Buffer,
  CustomButton,
  PhotoUpload,
} from "../../components";
import * as ImagePicker from "expo-image-picker";
import { ViewBox } from "../../components/SignupPage";

const sessionList = ["보컬", "드럼", "베이스", "기타", "키보드"];
const taskList = ["녹짱", "장비부장", "회계", "홍보부장", "기획부장", "기타"];
const Presenter = ({
  setProfile,
  isUserNameLoading,
  checkUsername,
  profile,
  onPress,
  isUnique,
}) => {
  const ref = useRef(null);
  const scrollUp = ({ y, animated }) => {
    ref.current.scrollTo({ x: 0, y, animated });
  };
  return (
    <>
      <ScrollView style={styles.container} ref={ref}>
        <ViewBox name="name" scrollUp={scrollUp}>
          <TextInput
            title="이름"
            placeholder="본명을 입력해주세요"
            value={profile.name}
            onChangeText={(name) => setProfile({ ...profile, name })}
          />
        </ViewBox>
        <ViewBox name="session" scrollUp={scrollUp}>
          <List
            title="세션"
            list={sessionList}
            value={profile.session}
            onChangeValue={(session) => setProfile({ ...profile, session })}
          />
        </ViewBox>
        <ViewBox name="photo">
          <PhotoUpload
            image={profile.picUrl}
            onChangeValue={(img) => setProfile({ ...profile, picUrl: img })}
          />
        </ViewBox>
        <ViewBox name="entryYear" scrollUp={scrollUp}>
          <EntryYear
            value={profile.entryYear}
            onChangeValue={(entryYear) => setProfile({ ...profile, entryYear })}
          />
        </ViewBox>
        <ViewBox name="task" scrollUp={scrollUp}>
          <List
            title="업무"
            value={profile.task}
            list={taskList}
            onChangeValue={(task) => setProfile({ ...profile, task })}
          />
        </ViewBox>
        <ViewBox name="firstMajor" scrollUp={scrollUp}>
          <TextInput
            title="본전공"
            value={profile.firstMajor}
            placeholder="본전공를 입력해주세요"
            onChangeText={(firstMajor) =>
              setProfile({ ...profile, firstMajor })
            }
          />
        </ViewBox>
        <ViewBox name="secondMajor" scrollUp={scrollUp}>
          <TextInput
            title="이중전공(선택)"
            value={profile.secondMajor}
            placeholder="이중전공를 입력해주세요"
            onChangeText={(secondMajor) =>
              setProfile({ ...profile, secondMajor })
            }
          />
        </ViewBox>
        <ViewBox name="email" scrollUp={scrollUp}>
          <TextInput
            title="이메일 입력"
            value={profile.email}
            placeholder="이메일 주소를 입력해주세요"
            onChangeText={(email) => setProfile({ ...profile, email })}
          />
        </ViewBox>
        <ViewBox name="username" scrollUp={scrollUp}>
          <TextInput
            title="아이디 입력"
            value={profile.username}
            placeholder="아이디를 입력해주세요"
            onChangeText={(username) => {
              checkUsername(username);
              setProfile({ ...profile, username });
            }}
          />
        </ViewBox>
        <ActivityIndicator
          animating={isUserNameLoading}
          style={{
            position: "relative",
            bottom: 19,
            left: 100,
          }}
        />
        {profile.username.length && !isUserNameLoading ? (
          isUnique ? (
            <Text style={{ color: "green" }}>사용 가능한 아이디입니다.</Text>
          ) : (
            <Text style={{ color: "red" }}>이미 사용 중인 아이디입니다.</Text>
          )
        ) : null}
        <ViewBox name="password" scrollUp={scrollUp}>
          <TextInput
            title="비밀번호 입력"
            value={profile.password}
            placeholder="비밀번호를 입력해주세요"
            onChangeText={(password) => {
              setProfile({ ...profile, password });
            }}
            isPassword={true}
          />
        </ViewBox>
        <Buffer height={30} />
      </ScrollView>
      <CompleteButton onPress={onPress} />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default Presenter;
