// lists.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Share2,
  X,
  MoveLeft,
} from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface RideCardProps {
  type: string;
  date: string;
  price: string;
  location: string;
}

const RideCard: React.FC<RideCardProps> = ({ type, date, price, location }) => {
  return (
    <TouchableOpacity className="bg-white p-4 rounded-lg mb-4 shadow-sm">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-lg font-semibold mb-2">{type}</Text>
          <Image
            source={require('../../assets/images/street.png')}
            className="w-full"
          />
          {/* Map placeholder */}
          <Text className="font-semibold text-xl pt-3">{date}</Text>
          <View className="flex-row justify-between items-center mt-2">
            <View>
              <Text className="font-light">Toyota Corolla l Black l</Text>
              <Text className="font-light pt-2">EPE-546-633</Text>
            </View>
            <Image
              source={require('../../assets/images/avatar.png')}
              className="w-15 h-15"
            />
          </View>
          <Text className="text-lg pt-3">${price}</Text>
        </View>
        <Text className="text-[#98A2B3] font-bold text-xl">⋮</Text>
      </View>

      <TouchableOpacity className="bg-blue-200 px-3 py-3 w-16 rounded-md mt-4">
        <Text className="text-center text-lg font-medium text-blue-600">
          Edit
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default function Lists() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <View className="flex-1 bg-gray-50 pt-20">
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <MoveLeft size={20} className="text-gray-500" color="black" />
        </TouchableOpacity>
        <Text className="ml-32 text-lg font-semibold">Rides</Text>
      </View>
      <View className="flex-row border-b border-gray-200">
        <TouchableOpacity
          className={`flex-1 py-4 ${
            activeTab === 'upcoming' ? 'border-b-2 border-blue-500' : ''
          }`}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text
            className={`text-center ${
              activeTab === 'upcoming'
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600'
            }`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-4 ${
            activeTab === 'past' ? 'border-b-2 border-blue-500' : ''
          }`}
          onPress={() => setActiveTab('past')}
        >
          <Text
            className={`text-center ${
              activeTab === 'past'
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600'
            }`}
          >
            Past
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4 mb-10">
        <RideCard
          type="Reservation"
          date="Arrivavl date- 13th, July, 2000"
          price="12.5"
          location="AMLI 7th Street Station"
        />
        <TouchableOpacity
          className="mt-8 bg-gray-50 rounded-xl pt-4 pb-3 px-2 border border-gray-200"
          onPress={() => router.push('/screens/arrange')}
        >
          <View className="flex-row items-center justify-between">
            <Text className="mb-2 text-lg font-semibold">Delivery</Text>
            <Text className="text-[#98A2B3] font-bold text-xl">⋮</Text>
          </View>
          <Image
            source={require('../../assets/images/street.png')}
            className="w-full"
          />
          <View className="flex-row justify-between px-6">
            <Text className="text-lg mb-4 mt-3">
              Arrivavl date- 13th, July, 2000
            </Text>
            <Text className="text-lg pt-3">$12.5</Text>
          </View>

          <View className="relative">
            {/* First row */}
            <View className="flex-row items-center gap-x-2">
              <View className="w-5 h-5 rounded-full border-4 border-green-500 bg-white" />
              <View className="border border-[#D1D1D6] rounded-lg p-4 flex-1 mr-4">
                <Text>AMLI 7th Street Station.</Text>
              </View>
            </View>

            {/* Dotted line connector using absolute positioning */}
            <View className="absolute left-2 top-4 bottom-4">
              <View
                style={{
                  borderStyle: 'dotted',
                  borderLeftWidth: 2,
                  borderColor: '#9CA3AF',
                  height: '100%',
                }}
              />
            </View>

            {/* Second row */}
            <View className="flex-row items-center gap-x-2 mt-7">
              <View className="w-5 h-5 rounded-full border-4 border-red-500 bg-white" />
              <View className="border border-[#D1D1D6] rounded-lg p-4 flex-1 mr-4">
                <Text>AMLI 7th Street Station.</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-8 bg-gray-50 rounded-xl pt-4 pb-3 px-2 border border-gray-200"
          onPress={() => router.push('/screens/arrange')}
        >
          <View className="flex-row items-center justify-between">
            <Text className="mb-2 text-lg font-semibold">Ride</Text>
            <Text className="text-[#98A2B3] font-bold text-xl">⋮</Text>
          </View>
          <Image
            source={require('../../assets/images/street.png')}
            className="w-full"
          />
          <View className="flex-row justify-between px-6">
            <Text className="text-lg mb-4 mt-3">Arriving in 5 mins</Text>
            <Text className="text-lg pt-3">$12.5</Text>
          </View>

          <View className="relative">
            {/* First row */}
            <View className="flex-row items-center gap-x-2">
              <View className="w-5 h-5 rounded-full border-4 border-green-500 bg-white" />
              <View className="border border-[#D1D1D6] rounded-lg p-4 flex-1 mr-4">
                <Text>AMLI 7th Street Station.</Text>
              </View>
            </View>

            {/* Dotted line connector using absolute positioning */}
            <View className="absolute left-2 top-4 bottom-4">
              <View
                style={{
                  borderStyle: 'dotted',
                  borderLeftWidth: 2,
                  borderColor: '#9CA3AF',
                  height: '100%',
                }}
              />
            </View>

            {/* Second row */}
            <View className="flex-row items-center gap-x-2 mt-7">
              <View className="w-5 h-5 rounded-full border-4 border-red-500 bg-white" />
              <View className="border border-[#D1D1D6] rounded-lg p-4 flex-1 mr-4">
                <Text>AMLI 7th Street Station.</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* <RideCard
          type="Delivery"
          date="Arrivavl date- 13th, July, 2000"
          price="12.5"
          location="AMLI 7th Street Station"
        />
        <RideCard
          type="Ride"
          date="Arriving in 5 mins"
          price="12.5"
          location="AMLI 7th Street Station"
        /> */}
      </ScrollView>
    </View>
  );
}
