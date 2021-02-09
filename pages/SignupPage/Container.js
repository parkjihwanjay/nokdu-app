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
  AsyncStorage,
} from "react-native";
import {
  EntryYear,
  CompleteButton,
  TextInput,
  List,
  Buffer,
  CustomButton,
} from "../../components";
import Presenter from "./Presenter";
import * as ImagePicker from "expo-image-picker";
import { userApi, authApi } from "../../api";
import { handleError } from "../../utils";
import { useDebounce } from "../../hooks/event";
import { SignupContext } from "./Context";
import { S3options } from "../../config/s3";
import { RNS3 } from "react-native-aws3";

const optionKeyList = ["secondMajor"];

const nokdu =
  "https://nokdu.s3.ap-northeast-2.amazonaws.com/img/profile/nokdu-icon.png";

export default ({ navigation, route }) => {
  const [emptyKey, setEmptyKey] = useState("");
  const [click, setClick] = useState(0);
  const [isUnique, setIsUnique] = useState(true);
  const [isUserNameLoading, setIsUserNameLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    session: "",
    entryYear: "",
    task: "",
    firstMajor: "",
    secondMajor: "",
    email: "",
    username: "",
    password: "",
    picUrl: nokdu,
  });

  useEffect(() => {
    const profile = route.params.profile;
    if (profile) setProfile(profile);
  }, []);

  const checkEmpty = (data) => {
    for (const key in data) {
      if (optionKeyList.includes(key)) continue;
      if (!isUnique) return "username";
      if (!data[key] || !data[key].length) return key;
    }
    return false;
  };

  const usernameApi = async (username) => {
    setIsUserNameLoading(true);
    const [result, error] = await authApi.checkUsername({ username });
    result.data.user ? setIsUnique(false) : setIsUnique(true);
    setIsUserNameLoading(false);
  };

  const checkUsername = useDebounce(usernameApi, 300);

  const uploadS3 = async (profile, user) => {
    const {
      body: { postResponse },
    } = await RNS3.put(
      {
        uri: profile.picUrl,
        type: "image/png",
        name: "profile",
      },
      { ...S3options, keyPrefix: `img/${user.username}/` }
    );
    return postResponse.location;
  };
  const signup = async (profile) => {
    setIsLoading(true);
    const [result, error] = await userApi.signup(profile);
    if (error) return handleError(error, () => {});
    const { user, token } = result.data;
    const picUrl = await uploadS3(profile, user);
    const [res, err] = await userApi.updateUser(user.username, {
      ...user,
      picUrl,
    });
    const updatedUser = res.data.user;
    await AsyncStorage.setItem("token", token);
    setIsLoading(false);
    Alert.alert("회원가입에 성공했습니다");
    navigation.navigate("SignupSuccess", { user: updatedUser });
  };

  const onPress = () => {
    const emptyKey = checkEmpty(profile);
    const newClick = click > 10 ? 0 : click + 1;
    setClick(newClick);
    if (emptyKey) setEmptyKey(emptyKey);
    else {
      signup(profile);
    }
  };

  return (
    <SignupContext.Provider value={{ emptyKey, click }}>
      <ActivityIndicator
        animating={isLoading}
        style={{ position: "absolute", top: "50%", left: "50%", size: "size" }}
      />
      <Presenter
        {...{
          setProfile,
          profile,
          checkUsername,
          isUserNameLoading,
          isUnique,
          onPress,
        }}
      />
    </SignupContext.Provider>
  );
};
