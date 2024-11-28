import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabIcon = () => (
  <View>
    <View></View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: () => <TabIcon />,
        }}
      />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
      <Tabs.Screen name="rides" options={{ headerShown: false }} />
    </Tabs>
  );
}
