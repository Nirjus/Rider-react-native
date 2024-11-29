import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const TabIcon = ({
  icon,
  focused,
}: {
  icon: React.ReactElement;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center w-12 h-12 items-center rounded-full ${focused ? "bg-green-400" : ""}`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-green-400" : ""}`}
    >
      {icon && icon}
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 25,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <MaterialIcons
                  name="mark-chat-unread"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <FontAwesome5
                  name="car"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <FontAwesome
                  name="user"
                  size={24}
                  color={focused ? "black" : "white"}
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
