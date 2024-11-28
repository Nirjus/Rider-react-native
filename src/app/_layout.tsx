import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { getToken } from "../lib/Session-token";
import { getUserUrl } from "../constants/ApiEndpoints";
import { Alert } from "react-native";
import "react-native-reanimated";
import "../../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const setUser = useStore((state) => state.setUser);
  const setLoading = useStore((state) => state.setLoading);
  const [loaded] = useFonts({
    "Parkinsans-Bold": require("../../assets/fonts/Parkinsans-Bold.ttf"),
    "Parkinsans-ExtraBold": require("../../assets/fonts/Parkinsans-ExtraBold.ttf"),
    "Parkinsans-Light": require("../../assets/fonts/Parkinsans-Light.ttf"),
    "Parkinsans-Medium": require("../../assets/fonts/Parkinsans-Medium.ttf"),
    "Parkinsans-Regular": require("../../assets/fonts/Parkinsans-Regular.ttf"),
    "Parkinsans-SemiBold": require("../../assets/fonts/Parkinsans-SemiBold.ttf"),
  });

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const token = await getToken("authToken");
        if (!token) return;
        const response = await fetch(getUserUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.data);
        } else {
          Alert.alert("Error", data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [setUser, loaded, setLoading]);

  if (!loaded) {
    return null;
  }
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
