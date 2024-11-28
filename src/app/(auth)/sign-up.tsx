import { Text, ScrollView, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { images } from "@/src/constants";
import CustomInput from "@/src/components/custom-input";
import CustomButton from "@/src/components/custom-button";
import OAuth from "@/src/components/OAuth";
import {
  userRegistrationUrl,
  userVerificationUrl,
} from "@/src/constants/ApiEndpoints";
import { getToken, saveToken } from "@/src/lib/Session-token";
import ModalPopUp from "@/src/components/modal";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    status: "default",
    code: "",
    message: "",
  });
  const signUpHandler = async () => {
    if (!form.name || !form.email || !form.password) {
      return;
    }
    try {
      const result = await fetch(userRegistrationUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await result.json();
      if (result.ok) {
        saveToken("jwtToken", data.data);
        setVerification({
          ...verification,
          status: "pending",
        });
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  const verifyHandler = async () => {
    if (!verification.code) {
      return;
    }
    try {
      const token = await getToken("jwtToken");
      const result = await fetch(userVerificationUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ otp: Number(verification.code) }),
      });
      const data = await result.json();
      if (result.ok) {
        setVerification({
          ...verification,
          status: "success",
          message: data.message,
        });
      } else {
        setVerification({
          ...verification,
          status: "pending",
          message: data.message,
        });
      }
    } catch (error: any) {
      console.log(error);
      setVerification({
        ...verification,
        status: "faild",
        message: error,
      });
    }
  };
  return (
    <ScrollView className=" flex-1 bg-white">
      <View className=" flex-1 bg-white">
        <View className=" relative w-full h-[250px]">
          <Image
            source={images.getStartedImage}
            className=" z-0 w-full h-[250px]"
          />
          <Text className=" text-2xl text-black font-ParkinsansSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className=" p-5">
          <CustomInput
            Icon={<AntDesign name="user" size={20} color="gray" />}
            label="Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <CustomInput
            Icon={<Feather name="mail" size={20} color="gray" />}
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <CustomInput
            Icon={<Feather name="lock" size={20} color="gray" />}
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={signUpHandler}
            className=" mt-6"
          />
          <OAuth />
          <Link
            href={"/sign-in"}
            className=" text-lg text-center text-neutral-800 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className=" text-blue-500">Log In</Text>
          </Link>
        </View>
        <ModalPopUp
          modalVisible={verification.status === "pending"}
          verification={verification}
          setVerfication={setVerification}
          value={verification.code}
          onChangeText={(code) => setVerification({ ...verification, code })}
          onPressVerify={verifyHandler}
        />
        <ModalPopUp
          verification={verification}
          setVerfication={setVerification}
          modalVisible={verification.status === "success"}
        />
      </View>
    </ScrollView>
  );
}
