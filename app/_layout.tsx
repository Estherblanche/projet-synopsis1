import { LoaderProvider } from "@/components/LoaderContext";
import { AlertProvider } from "@/contexts/AlertContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
     
    <AlertProvider>
    <LoaderProvider>
    <ToastProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false}}>
        
        <Stack.Screen name="screens/login"/>
        <Stack.Screen name="screens/login/index"/>
        <Stack.Screen name="screens/login/password"/>
        <Stack.Screen name="screens/services"/>
        <Stack.Screen name="screens/services/ Gestion presence"/>
        <Stack.Screen name="screens/services/ Gestion presence/index"/>
        <Stack.Screen name="screens/services/ Gestion presence/index2"/>
        <Stack.Screen name="screens/services/ Gestion conges"/>
        <Stack.Screen name="screens/services/ Gestion conges/index"/>
        <Stack.Screen name="screens/services/ Gestion conges/index2"/>
        <Stack.Screen name="screens/services/ Gestion conges/index3"/>
        <Stack.Screen name="screens/(tabs)"/>
       
      </Stack>
    </ThemeProvider> 
    <StatusBar style="auto" backgroundColor="#F28C5A" />
    </ToastProvider>
   </LoaderProvider>
   </AlertProvider>
   
  )
};
