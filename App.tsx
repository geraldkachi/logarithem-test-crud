/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AppointmentList from './src/AppointmentList';
import BookingScreen from './src/BookingScreen';

function App(): React.JSX.Element {
 

  const Stack = createStackNavigator();

  return (
      <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListOfAppoints">
        <Stack.Screen name="ListOfAppoints" component={AppointmentList} options={{ title: 'Appointment List >' }} />
        <Stack.Screen name="BookCoach" component={BookingScreen} options={{ title: 'Book Coach' }} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
}

export default App;
