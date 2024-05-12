// BookingScreen.js
import React from 'react';
import {View} from 'react-native';
import AddAppointment from './AddPoinitments';

const BookingScreen = ({navigation}: any) => {
  return (
    <View>
      <AddAppointment {...{navigation}} />
    </View>
  );
};

export default BookingScreen;
