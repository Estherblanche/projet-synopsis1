import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { Home, LayoutGrid, User } from 'lucide-react-native';
import React from 'react';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:' #000',
        tabBarInactiveTintColor:  '#000',
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Tableau de bord',
          tabBarIcon: ({ color, size }) =>  <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="Service"
        options={{
          title: 'Service',
          tabBarIcon:({ color, size }) => (
              <LayoutGrid color={color} size={size} />
            ),
        }}
      />
      <Tabs.Screen
        name="Compte"
          options={{
            title: 'Compte',
            tabBarIcon: ({ color, size }) => (
              <User color={color} size={size} />
            ),
          }}
        
      />
    </Tabs>
  );
}
