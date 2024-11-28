import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "../types/type";

const getBGVarientStyle = (varient: ButtonProps["bgVariant"]) => {
  switch (varient) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};
const getTEXTVarientStyle = (varient: ButtonProps["textVariant"]) => {
  switch (varient) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    }}
    className={` w-full rounded-full ${getBGVarientStyle(bgVariant)} flex flex-row justify-center items-center p-3 shadow-md shadow-neutral-400/70 ${className}`}
    {...props}
  >
    {IconLeft && <View className="mr-2">{IconLeft}</View>}
    <Text
      className={`text-lg font-ParkinsansSemiBold ${getTEXTVarientStyle(textVariant)}`}
    >
      {title}
    </Text>
    {IconRight && <View className=" ml-2">{IconRight}</View>}
  </TouchableOpacity>
);

export default CustomButton;
