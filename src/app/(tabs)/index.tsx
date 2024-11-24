import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className=" flex-1 h-full flex items-center justify-center">
      <Text className=" font-ParkinsansExtraBold text-center text-4xl text-red-400">
        Hello sir
      </Text>
      <View className=" p-5 w-32 h-36 rounded-xl bg-red-500">
        <Text className=" text-white font-ParkinsansBold text-center text-xl ">
          Hei
        </Text>
      </View>
    </View>
  );
}
