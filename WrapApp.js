import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddHabitScreen from './screens/AddHabitScreen';
import ProgressScreen from './screens/ProgressScreen';

import { HabitProvider } from './HabitContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HabitProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddHabit" component={AddHabitScreen} />
          <Stack.Screen name="Progress" component={ProgressScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </HabitProvider>
  );
}