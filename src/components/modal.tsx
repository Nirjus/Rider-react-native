import React from "react";
import { Modal, StyleSheet, Text, TextInputProps, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "./custom-button";
import { router } from "expo-router";
import CustomInput from "./custom-input";

interface IModelPopUp extends TextInputProps {
  modalVisible: boolean;
  verification: any;
  setVerfication: (verification: any) => void;
  onPressVerify?: () => void;
}

const ModalPopUp = ({
  modalVisible,
  onPressVerify,
  verification,
  setVerfication,
  ...props
}: IModelPopUp) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>
            setVerfication({ ...verification, status: "done" })
          }
        >
          <View style={styles.centeredView}>
            {verification.status === "success" && (
              <View style={styles.modalView}>
                <View className=" w-[100px] h-[100px] flex justify-center items-center rounded-full bg-green-500 mx-auto my-5">
                  <AntDesign name="check" size={40} color="white" />
                </View>
                <Text className=" font-ParkinsansBold text-center text-3xl">
                  Verified
                </Text>
                <Text className=" text-base text-gray-400 font-Parkinsans text-center mt-2">
                  You have successfully verified your account
                </Text>
                <CustomButton
                  title="Browse Home"
                  onPress={() => {
                    setVerfication({ ...verification, status: "done" });
                    router.push("/(root)/(tabs)/home");
                  }}
                  className=" mt-5"
                />
              </View>
            )}
            {verification.status === "pending" && (
              <View style={[styles.modalView, { alignItems: "baseline" }]}>
                <Text className=" text-2xl text-left font-ParkinsansBold mb-2">
                  Verification
                </Text>
                <Text className=" font-Parkinsans mb-5 text-gray-500">
                  We've sent a verification code to you
                </Text>
                <CustomInput
                  label="Code"
                  placeholder="123456"
                  keyboardType="number-pad"
                  maxLength={6}
                  Icon={<Feather name="lock" size={20} color="gray" />}
                  {...props}
                />
                {verification.message && (
                  <Text className=" text-red-500 text-sm mt-1">
                    {verification.message}
                  </Text>
                )}
                <CustomButton
                  title="Verify Email"
                  onPress={onPressVerify}
                  className=" mt-5"
                  bgVariant="success"
                />
              </View>
            )}
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1a1a78",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 35,
    minHeight: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalPopUp;
