import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from '../../app.json';
import App from '../../App';
import { primary, primary3 } from '../styles/LocalAmplifyTheme'

declare global {
    namespace ReactNativePaper {
      interface ThemeColors {
        primary2: string;
        primary4: string;
        secondary: string;
        secondary2: string;
      }
  
      interface Theme {
        }
    }
}

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: primary,
      accent: primary3,
    },
  };

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);