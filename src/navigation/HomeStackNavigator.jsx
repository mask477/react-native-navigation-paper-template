import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  const screenOptions = {
    animation: 'fade_from_bottom',
  };

  return <HomeStack.Navigator screenOptions={screenOptions} />;
}
