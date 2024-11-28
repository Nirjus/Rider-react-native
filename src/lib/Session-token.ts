import * as SecureStore from "expo-secure-store";

export const saveToken = async (key: string, tokenString: string) => {
  try {
    await SecureStore.setItemAsync(key, tokenString);
  } catch (error) {
    console.log("[ERROR] error in storing token" + error);
    return;
  }
};

export const getToken = async (key: string) => {
  const token = await SecureStore.getItemAsync(key);
  try {
    if (!token) {
      console.log("No value stored for the ke: " + key);
    }
    return token;
  } catch (error) {
    console.log("[ERROR] Secure store get token error", error);
    await SecureStore.deleteItemAsync(key);
    return null;
  }
};

export const deleteToken = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};
