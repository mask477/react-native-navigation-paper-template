import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DARK_THEME_STYLES, LIGHT_THEME_STYLES} from '../utils/styles';

const ThemeContext = createContext({
  theme: 'dark',
  themeStyles: DARK_THEME_STYLES,
  fontFamily: 'Rubik-Regular',
  fontLoaded: false,
  setDarkTheme: function () {},
  setLightTheme: function () {},
});

export function ThemeContextProvider(props) {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(colorScheme);
  const [themeStyles, setThemeStyles] = useState(
    colorScheme == 'light' ? LIGHT_THEME_STYLES : DARK_THEME_STYLES,
  );
  const [fontFamily] = useState('Rubik-Regular');

  useEffect(() => {
    // load token from local storage
    AsyncStorage.getItem('theme')
      .then(value => {
        setTheme(value);
      })
      .catch(error => {
        console.error('=== ThemeContext AsyncStorage:', error);
      });
  }, []);

  useEffect(() => {
    console.log('=== ThemeContext:', theme);
    // load token from local storage
    if (theme) {
      if (theme == 'dark') {
        setThemeStyles(DARK_THEME_STYLES);
      } else {
        setThemeStyles(LIGHT_THEME_STYLES);
      }

      AsyncStorage.setItem('theme', theme)
        .then(value => {
          console.log('Theme saved to local storage');
        })
        .catch(error => {
          console.error('=== ThemeContext AsyncStorage:', error);
        });
    }
  }, [theme]);

  const setDarkThemeHandler = () => {
    setTheme('dark');
  };

  const setLightThemeHandler = () => {
    setTheme('light');
  };

  const context = {
    theme,
    themeStyles,
    fontFamily,
    setDarkTheme: setDarkThemeHandler,
    setLightTheme: setLightThemeHandler,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;

export const useTheme = () => {
  return useContext(ThemeContext);
};
