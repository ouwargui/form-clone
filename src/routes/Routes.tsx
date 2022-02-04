import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import PersonalData from '../pages/PersonalData';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{gestureDirection: 'horizontal', gestureEnabled: true}}>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
