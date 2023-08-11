import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import Text from './Text';

import {ANIMATIONS} from '../../utils/styles';
import {useTheme} from '../../context/ThemeContext';

const WindowWidth = Dimensions.get('window').width;

export default function EmptyListComponent({
  animation = null,
  title = '',
  message = '',
}) {
  const animationRef = useRef(null);
  const {themeStyles} = useTheme();

  const lottieViewStyle = {
    opacity: animation ? 1 : 0.75,
  };

  return (
    <View style={StyleSheet.container}>
      <View style={styles.lottieViewContainer}>
        <LottieView
          autoPlay
          ref={animationRef}
          style={lottieViewStyle}
          source={animation ? animation : ANIMATIONS.noRecord}
        />
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={{...styles.messageText, color: themeStyles.mutedTextColor}}>
        {!!message && message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieViewContainer: {
    padding: 40,
    width: WindowWidth * 0.8,
    height: WindowWidth * 0.8,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  messageText: {
    textAlign: 'center',
  },
});
