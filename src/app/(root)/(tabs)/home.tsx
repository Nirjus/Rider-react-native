import CustomButton from "@/src/components/custom-button";
import { deleteToken } from "@/src/lib/Session-token";
import { useStore } from "@/src/store/useStore";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const user = useStore((state) => state.user);
  const clearUser = useStore((state) => state.clearUser);

  const handleLogout = async () => {
    await deleteToken("authToken");
    clearUser();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View className=" flex-1 h-full flex items-center justify-center">
      <Text className=" font-ParkinsansExtraBold text-center text-4xl text-red-400">
        Hello sir
      </Text>
      <View className=" p-5 w-32 h-32 rounded-full flex justify-center items-center bg-red-500">
        <Text className=" text-white font-ParkinsansBold text-center text-xl ">
          Hei {user?.name}
        </Text>
      </View>
      <CustomButton
        title="Logout"
        className=" w-11/12 mt-2 "
        onPress={handleLogout}
      />
    </View>
  );
}
