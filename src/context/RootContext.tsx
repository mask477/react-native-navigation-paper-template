import React from 'react';
import {AuthContextProvider} from './AuthContext';
import {ThemeContextProvider} from './ThemeContext';

export default function RootContext({children}: {children: any}) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeContextProvider>
  );
}
