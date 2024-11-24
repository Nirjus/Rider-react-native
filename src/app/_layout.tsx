import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Parkinsans-Bold": require("../../assets/fonts/Parkinsans-Bold.ttf"),
    "Parkinsans-ExtraBold": require("../../assets/fonts/Parkinsans-ExtraBold.ttf"),
    "Parkinsans-Light": require("../../assets/fonts/Parkinsans-Light.ttf"),
    "Parkinsans-Medium": require("../../assets/fonts/Parkinsans-Medium.ttf"),
    "Parkinsans-Regular": require("../../assets/fonts/Parkinsans-Regular.ttf"),
    "Parkinsans-SemiBold": require("../../assets/fonts/Parkinsans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
