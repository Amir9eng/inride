import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import '../globals.css';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-Regular.otf'),
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="screens/chat" options={{ headerShown: false }} />
        <Stack.Screen name="screens/arrive" options={{ headerShown: false }} />
        <Stack.Screen name="screens/choose" options={{ headerShown: false }} />
        <Stack.Screen name="screens/payment" options={{ headerShown: false }} />
        <Stack.Screen
          name="screens/earnings"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="screens/lists" options={{ headerShown: false }} />
        <Stack.Screen name="screens/arrange" options={{ headerShown: false }} />
        <Stack.Screen name="screens/reserve" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
