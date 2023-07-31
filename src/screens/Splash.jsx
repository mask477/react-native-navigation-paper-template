import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import {Text} from 'react-native-paper';

function Splash() {
  return (
    <View style={styles.logoContainer}>
      <Text style={{fontSize: 35}}>ProBet</Text>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#22034F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 500,
  },
  spinnerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
