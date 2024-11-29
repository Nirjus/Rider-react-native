import { Image, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { formatDate, formatTime } from "@/src/lib/utils";
import { Ride } from "../types/type";
import { geoApiKey } from "../constants/ApiEndpoints";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-col items-start justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${geoApiKey}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />

          <View className="flex flex-col mx-5 gap-y-5 flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <Entypo name="chevron-small-right" size={24} color="black" />
              <Text className="text-sm font-ParkinsansMedium" numberOfLines={1}>
                {ride.origin_address}
              </Text>
            </View>

            <View className="flex flex-row items-center gap-x-2">
              <AntDesign name="enviromento" size={24} color="black" />
              <Text className="text-am font-ParkinsansMedium" numberOfLines={1}>
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col w-full mt-5 bg-gray-100 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm font-ParkinsansMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-sm font-ParkinsansBold" numberOfLines={1}>
              {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm font-ParkinsansMedium text-gray-500">
              Driver
            </Text>
            <Text className="text-sm font-ParkinsansBold">
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm font-ParkinsansMedium text-gray-500">
              Car Seats
            </Text>
            <Text className="text-sm font-ParkinsansBold">
              {ride.driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between">
            <Text className="text-sm font-ParkinsansMedium text-gray-500">
              Payment Status
            </Text>
            <Text
              className={`text-sm capitalize font-ParkinsansSemiBold ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;