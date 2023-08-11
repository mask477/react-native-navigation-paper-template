import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {PRIMARY_COLOR, PRIMARY_TEXT_COLOR} from '../../utils/styles';
import {useTheme} from '../../context/ThemeContext';

export default function ButtonPrimary({
  type,
  label,
  labelStyle = {},
  onPress,
  loading,
  size = 'large',
  style = {},
}) {
  const {themeStyles} = useTheme();
  let customStyle = {};
  let customLableStyle = {};
  let labelSize = 16;

  if (type == 'text') {
    customStyle.backgroundColor = 'transparent';
    customLableStyle.color = themeStyles.textColor;
  }
  if (type == 'outline') {
    customStyle = {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: themeStyles.textColor,
    };
    customLableStyle.color = themeStyles.textColor;
  }
  if (size == 'small') {
    customStyle.height = 25;
    labelSize = 12;
  }
  if (size == 'medium') {
    customStyle.height = 35;
    labelSize = 14;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[styles.container, customStyle, style]}>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <Text
          style={[
            styles.buttonText,
            labelStyle,
            customLableStyle,
            {
              fontSize: labelSize,
            },
          ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    color: PRIMARY_TEXT_COLOR,
    borderRadius: 10,
  },
  buttonText: {
    color: PRIMARY_TEXT_COLOR,
  },
});
