import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  const screenOptions = {
    animation: 'fade_from_bottom',
  };

  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
