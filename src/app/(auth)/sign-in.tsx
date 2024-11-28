import { Text, ScrollView, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { images } from "@/src/constants";
import CustomInput from "@/src/components/custom-input";
import CustomButton from "@/src/components/custom-button";
import { Link, router } from "expo-router";
import OAuth from "@/src/components/OAuth";
import { userLoginUrl } from "@/src/constants/ApiEndpoints";
import { deleteToken, saveToken } from "@/src/lib/Session-token";
import { useStore } from "@/src/store/useStore";

export default function SignInScreen() {
  const setUser = useStore((state) => state.setUser);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const signInHandler = async () => {
    if (!form.email || !form.password) {
      return;
    }
    try {
      const result = await fetch(userLoginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await result.json();
      if (result.ok) {
        await saveToken("authToken", data.data.token);
        await deleteToken("jwtToken");
        setUser(data?.data?.user);
        router.replace("/");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      console.log(error);
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
            Welcome 👋
          </Text>
        </View>
        <View className=" p-5">
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
            title="Sign In"
            onPress={signInHandler}
            className=" mt-6"
          />
          <OAuth />
          <Link
            href={"/sign-up"}
            className=" text-lg text-center text-neutral-800 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className=" text-blue-500">Sign up</Text>
          </Link>
        </View>
        {/* Verification model */}
      </View>
    </ScrollView>
  );
}
