import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/Routes';
import {StatusBar} from 'expo-status-bar';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="white" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
