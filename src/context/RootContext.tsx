import React from 'react';
import {AuthContextProvider} from './AuthContext';

export default function RootContext({children}: {children: any}) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
