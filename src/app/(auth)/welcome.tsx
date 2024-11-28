import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onBoardingArray } from "@/src/constants";
import CustomButton from "@/src/components/custom-button";

export default function OnBoard() {
  const swipterRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoardingArray.length - 1;

  return (
    <SafeAreaView className=" flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className=" w-full flex justify-end items-end p-5"
      >
        <Text className=" text-black font-ParkinsansBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swipterRef}
        loop={false}
        dot={<View className=" w-8 h-1 mx-1 bg-[#E2EBF0] rounded-full" />}
        activeDot={<View className=" w-8 h-1 mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoardingArray.map((item) => (
          <View key={item.id} className=" flex items-center justify-center p-5">
            <Image
              source={item.image}
              className=" w-full h-[300px] "
              resizeMode="contain"
            />
            <View className=" flex flex-row items-center justify-center w-full mt-10">
              <Text className=" text-black text-3xl font-ParkinsansBold text-center mx-10">
                {item.title}
              </Text>
            </View>
            <Text className=" text-lg font-ParkinsansSemiBold text-center text-gray-500 mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.push("/(auth)/sign-up")
            : swipterRef.current?.scrollBy(1)
        }
        className={" mt-10 mb-3"}
        style={{ width: "90%" }}
      />
    </SafeAreaView>
  );
}
