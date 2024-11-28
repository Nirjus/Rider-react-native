import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "./custom-button";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className=" flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className=" flex-1 h-[1px] bg-gray-200" />
        <Text className=" text-lg">Or</Text>
        <View className=" flex-1 h-[1px] bg-gray-200" />
      </View>
      <CustomButton
        title="Log In with Google"
        className=" mt-5 shadow-none"
        IconLeft={<AntDesign name="google" size={24} color="black" />}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
