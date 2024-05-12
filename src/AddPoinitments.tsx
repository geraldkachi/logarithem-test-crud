/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import useBookingStore from './store';
// const currentDate = new Date(Date.now());

// Get the individual components of the date
// const year = currentDate.getFullYear();
// const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
// const date = String(currentDate.getDate()).padStart(2, '0');
// const hours = String(currentDate.getHours()).padStart(2, '0');
// const minutes = String(currentDate.getMinutes()).padStart(2, '0');
// const seconds = String(currentDate.getSeconds()).padStart(2, '0');
// const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;


const AddAppointment = ({navigation}: any) => {
    // const navigation = useNavigation();
  const [appointmentDetails, setAppointmentDetails] = useState({
    coachName: '',
    date: '',
    time: '',
  });
  const addAppointment = useBookingStore((state) => state.bookAppointment);
  
  const handleSubmit = () => {
      navigation.navigate('ListOfAppoints');
    const newAppointment = {
      id: Date.now(),
      ...appointmentDetails,
    };
    addAppointment(newAppointment);
    console.log(appointmentDetails);
    setAppointmentDetails({
      coachName: '',
      date: '',
      time: '',
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Coach Name"
        value={appointmentDetails.coachName}
        onChangeText={(text) =>
          setAppointmentDetails({ ...appointmentDetails, coachName: text })
        }
      />
      <TextInput
        placeholder="Date"
        value={appointmentDetails.date}
        onChangeText={(text) =>
          setAppointmentDetails({ ...appointmentDetails, date: text })
        }
      />
      <TextInput
        placeholder="Time"
        value={appointmentDetails.time}
        onChangeText={(text) =>
          setAppointmentDetails({ ...appointmentDetails, time: text })
        }
      />
      <Button title="Add Appointment" onPress={handleSubmit} />
    </View>
  );
};

export default AddAppointment;