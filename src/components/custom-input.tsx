import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { InputFieldProps } from "../types/type";

const CustomInput = ({
  label,
  labelStyle,
  Icon,
  secureTextEntry,
  containerStyle,
  inputStyle,
  className,
  ...props
}: InputFieldProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className=" my-2 w-full">
          <Text
            className={` text-lg font-ParkinsansSemiBold mb-3 ${labelStyle}`}
          >
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border ${isFocus ? "border-blue-400" : "border-neutral-100"} ${containerStyle}`}
          >
            {Icon && <View className=" ml-4">{Icon}</View>}
            <TextInput
              className={`rounded-full p-4 font-ParkinsansMedium text-[15px] flex-1 ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;
