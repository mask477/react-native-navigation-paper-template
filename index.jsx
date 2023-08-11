/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import RootContext from './src/context/RootContext';

export default function Main() {
  return (
    <RootContext>
      <PaperProvider>
        <App />
      </PaperProvider>
    </RootContext>
  );
}

AppRegistry.registerComponent(appName, () => App);
