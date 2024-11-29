import { View, Text } from "react-native";
import React from "react";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
}: {
  icon: React.ReactElement;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: () => void;
}) => {
  return (
    <View
      className={` flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
    >
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
