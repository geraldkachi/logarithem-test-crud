/* eslint-disable prettier/prettier */
// AppointmentList.js
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import useBookingStore from './store';

const AppointmentList = ({navigation}: any) => {
  const appointments = useBookingStore((state) => state.appointments);
  const cancelAppointment = useBookingStore((state) => state.cancelAppointment)


  return (
    <View>
      <FlatList
        scrollEnabled
        data={appointments}
        renderItem={({ item }: any) => (
          <View key={item.id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: 'green', padding: 10, marginBottom:5, marginHorizontal: 5, borderRadius: 8 }}>
            <View>
              <Text>Coach: {item.coachName}</Text>
              <Text>Date: {item.date}</Text>
              <Text>Time: {item.time}</Text>
              <Text>CreatedAt: {item.id}</Text>
            </View>

            <Button
              title="Cancel"
              onPress={() => cancelAppointment(item.id)}
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={{ marginBottom: 30 }}>
            <Button
              title="Add Appointment"
              onPress={() =>  navigation.navigate('BookCoach')}
            />
          </View>
        )}
        keyExtractor={(item: any) => item?.id?.toString()}
      />
    </View>
  );
};

export default AppointmentList;
