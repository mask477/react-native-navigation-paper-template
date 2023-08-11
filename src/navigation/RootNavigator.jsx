import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../screens/Splash';
import AuthNavigator from './AuthNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import {useAuth} from '../context/AuthContext';
import Text from '../components/common/Text';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {auth} = useAuth();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setAppIsReady(true);
    // }, 2000);
  }, []);

  // if (!appIsReady) {
  //   return <Splash />;
  // }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Hello!</Text>
    </SafeAreaView>
  );

  return (
    <SafeAreaView
      style={{flex: 1}}
      onLayout={() => console.log('onLayoutRootView')}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AppStack"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              marginTop: StatusBar.currentHeight,
            },
          }}>
          <Stack.Screen
            name="AppStack"
            component={auth ? HomeStackNavigator : AuthNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
