// reserve.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Calendar, Clock, Car, MoveLeft } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Reserve() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  interface DateTimePickerEvent {
    type: string;
    nativeEvent: any;
  }

  const onDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  interface DateTimePickerEvent {
    type: string;
    nativeEvent: any;
  }

  interface TimeChangeEvent {
    type: string;
    nativeEvent: any;
  }

  const onTimeChange = (
    event: TimeChangeEvent,
    selectedTime?: Date | undefined
  ) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(selectedTime);
    }
  };

  return (
    <View className="flex-1 bg-white pt-16 px-4">
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <MoveLeft size={20} className="text-gray-500" color="black" />
        </TouchableOpacity>
        <Text className="ml-28 text-lg font-semibold">Reserve rides</Text>
      </View>
      {/* <View className="bg-white rounded-lg p-4 shadow-sm mb-6">
        <Text className="text-lg font-semibold mb-4">March 2024</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          className="bg-gray-50 p-4 rounded-lg mb-4"
        >
          <Text className="text-center text-lg">
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg">Time</Text>
          <TouchableOpacity
            onPress={() => setShowTimePicker(true)}
            className="bg-gray-50 px-4 py-2 rounded-lg"
          >
            <Text>
              {date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <LinearGradient colors={['#EBF4FF', '#FFFFFF']}>
        <Image
          source={require('../../assets/images/picker.png')}
          style={{ width: '100%', height: 420, marginTop: 20 }}
        />

        <View className="space-y-6">
          <View className="flex-row items-center border-b border-gray-200 pb-3">
            <Calendar size={24} className="text-gray-500" color="black" />
            <Text className="ml-4 flex-1">
              Choose your exact pickup date up to 120 days in advance
            </Text>
          </View>

          <View className="flex-row items-center border-b border-gray-200 pb-3 pt-4">
            <Clock size={24} className="text-gray-500" color="black" />
            <Text className="ml-4 flex-1">
              Take your time, a driver will be waiting for you
            </Text>
          </View>

          <View className="flex-row items-center pt-5">
            <Car size={24} className="text-gray-500" color="black" />
            <Text className="ml-4 flex-1">
              Cancellation of ride, absent- no charges up to 60 minutes before
              the ride
            </Text>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-16">
          <Text className="text-white text-center font-semibold">
            Reserve a ride
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
}
