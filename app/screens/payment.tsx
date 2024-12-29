import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function Payment() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <Image
        source={require('../../assets/images/arrival.png')}
        className="absolute w-full h-full"
      />

      {/* Modal Content */}
      <View className="flex-1 justify-end mt-12">
        <View className="bg-white rounded-t-3xl p-4 h-[75%]">
          {/* Header with back button */}
          <TouchableOpacity className="" onPress={() => router.back()}>
            <ArrowLeft size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl font-semibold text-center mb-2">
            Ride details
          </Text>
          <Text className="text-[#344054] text-xl text-center">
            Mar 11, 2024 21:42:39
          </Text>
          <Text className="text-gray-500 text-center mt-2">Your earnings</Text>
          <Text className="text-blue-600 text-5xl font-bold text-center mt-6 border-b border-gray-200 pb-4">
            $458.88
          </Text>

          <TouchableOpacity
            className="mt-8 bg-gray-50 rounded-xl pt-4 pb-3 px-2 border border-gray-200"
            onPress={() => router.push('/screens/earnings')}
          >
            <Image
              source={require('../../assets/images/street.png')}
              className="w-full"
            />
            <Text className="text-lg mb-4 mt-3">9 mins ride</Text>

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
        </View>
      </View>
    </View>
  );
}
