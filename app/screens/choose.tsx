import { useRouter } from 'expo-router';
import { Banknote } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';

const drivers = [
  {
    id: 1,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 2,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 3,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 4,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 5,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 6,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 7,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 8,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 9,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
  {
    id: 10,
    name: 'Olive Rodrigo',
    rating: 4.4,
    rides: 53,
    time: '9:45pm',
    price: 12.5,
  },
];
export default function Choose() {
  const router = useRouter();
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

  return (
    <View className="flex-1 bg-white">
      <Image
        source={require('../../assets/images/arrival.png')}
        style={{ width: '100%', height: 290 }}
      />

      <View className="bg-white p-4 rounded-t-3xl flex-1">
        <Text className="text-xl font-medium mb-1 text-center">
          Choose a driver
        </Text>
        <Text className="text-gray-500 mb-4 text-center">
          Prices are given by drivers
        </Text>

        <View className="flex-1">
          <ScrollView className="border-t border-gray-200">
            {drivers.map((driver) => (
              <TouchableOpacity
                key={driver.id}
                className={`flex-row items-center p-5 border-b border-gray-200 rounded-xl ${
                  selectedDriver === driver.id
                    ? 'bg-[#E6F2FF] border border-blue-400'
                    : 'bg-white'
                }`}
                onPress={() => setSelectedDriver(driver.id)}
              >
                <Image
                  source={require('../../assets/images/person.png')}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <View className="flex-1">
                  <Text className="font-medium">{driver.name}</Text>
                  <View className="flex-row items-center">
                    <Text>10 min</Text>
                    <Text className="text-gray-500 mx-1">{driver.time}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <View className="flex-row items-center">
                    <Text>{driver.rating}</Text>
                    <Text className="text-yellow-400 mx-1">★</Text>
                    <Text className="text-gray-500">|{driver.rides} rides</Text>
                  </View>
                  <Text className="font-medium">${driver.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="mt-4 pb-7">
          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
            <Banknote size={30} color="gray" />
            <Text className="flex-1 ml-4">Choose payment method</Text>
            <Text className="text-gray-400 text-3xl">›</Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-between mt-3 gap-x-4">
            <View className="bg-blue-100 p-2">
              <Image
                source={require('../../assets/images/car.png')}
                className="w-15 h-15"
              />
            </View>
            <TouchableOpacity
              className="bg-[#007BFF] p-4 rounded-lg flex-1"
              onPress={() => router.push('/screens/payment')}
            >
              <Text className="text-white text-center font-medium">
                Make payment →
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
