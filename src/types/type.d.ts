import React from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ReactElement;
  IconRight?: React.ReactElement;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  Icon?: React.ReactElement;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  className?: string;
}
