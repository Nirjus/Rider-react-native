import React from "react";
import { Redirect } from "expo-router";
import { useStore } from "../store/useStore";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const loading = useStore((state) => state.loading);
  if (loading) {
    return (
      <View className=" flex-1 justify-center items-center">
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  if (isAuthenticated) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href={"/(auth)/welcome"} />;
}
