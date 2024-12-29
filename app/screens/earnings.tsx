import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { ArrowLeft, ChevronRight, MoveRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const rides = [
  {
    title: 'Delivery to California',
    amount: 200,
    status: 'Successful',
    date: 'Nov 14th, 2024 21:42:39',
  },
  {
    title: 'Ride to Washington DC',
    amount: 20,
    status: 'Canceled',
    date: 'Nov 14th, 2024 21:42:39',
  },
  {
    title: 'Group ride to Washington DC',
    amount: 20,
    status: 'Pending',
    date: 'Nov 14th, 2024 21:42:39',
  },
  {
    title: 'Ride to Washington DC',
    amount: 20,
    status: 'Canceled',
    date: 'Nov 14th, 2024 21:42:39',
  },
];

export default function Earnings() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <Image
        source={require('../../assets/images/arrival.png')}
        className="absolute w-full h-full"
      />
      <View className="mt-32" />
      <View className="flex-1 mt-12">
        <View className="bg-white rounded-t-3xl mt-4 p-4 flex-1">
          <TouchableOpacity className="px-2" onPress={() => router.back()}>
            <ArrowLeft size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-semibold text-center">Earnings</Text>
          <Text className="text-black text-xl text-center mt-2">
            Mar 11 - Mar 17
          </Text>
          <Text className="text-blue-600 text-5xl font-bold text-center mt-4">
            $458.88
          </Text>
          <Text className="font-light text-center mt-4">
            23 rides over the last 5 days
          </Text>

          <TouchableOpacity
            className="bg-blue-600 rounded-lg py-4 px-4 mt-4 w-[70%] mx-auto"
            onPress={() => router.push('/screens/chat')}
          >
            <Text className="text-white text-center font-semibold">
              Cash out $458.88
            </Text>
          </TouchableOpacity>

          <Text className="text-gray-500 text-center mt-4 font-light">
            Last weekly payout was{' '}
            <Text className="text-gray-700">$458.88</Text> Mar 12 25 rides
          </Text>

          <TouchableOpacity className="flex-row items-center justify-center mt-4 pb-2 border-b border-gray-200 gap-x-2">
            <Text className="font-light">See weekly breakdown</Text>
            <MoveRight size={20} color="black" />
          </TouchableOpacity>

          <Text className="font-light text-lg mt-4">Recent Rides</Text>
          <ScrollView className="mt-2">
            {rides.map((ride, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center py-4 border-b border-gray-100"
              >
                <View>
                  <Text className="font-medium">{ride.title}</Text>
                  <Text className="text-gray-500 text-sm font-light">
                    {ride.date}
                  </Text>
                </View>
                <View className="items-end">
                  <Text className="font-semibold">${ride.amount}</Text>
                  <Text
                    className={`text-sm ${
                      ride.status === 'Successful'
                        ? 'text-green-500'
                        : ride.status === 'Canceled'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                  >
                    {ride.status}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
