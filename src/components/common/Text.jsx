import React from 'react';
import * as RN from 'react-native';
import {FONT_FAMILY} from '../../utils/styles';

import {useTheme} from '../../context/ThemeContext';

export default function Text({children, style, color = null}) {
  const {themeStyles} = useTheme();

  return (
    <RN.Text
      style={[
        styles.text,
        {
          color: themeStyles.textColor,
        },
        style,
        color
          ? {
              color,
            }
          : {},
      ]}>
      {children}
    </RN.Text>
  );
}

const styles = RN.StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
  },
});
