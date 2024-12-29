import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function rides() {
  const router = useRouter();
  const percentageRaised = 40;
  return (
    <View className="flex-1 pt-16 h-full bg-white">
      <Image
        source={require('../../assets/images/stayarea.png')}
        style={{ width: '100%', height: 430 }}
      />
      <View className="p-4">
        <Text className="text-xl font-semibold mb-2">Stay in area</Text>
        <Text className="text-gray-600 mb-4">
          we'll search for rides within this location, you can widen the area to
          get more potential ride
        </Text>
        <View className="mb-4 mt-3 pt-6 border-t border-[#D0D5DD]">
          <View className="relative mb-6 mt-3">
            <View className="h-2 bg-gray-200 rounded-full w-full mt-5">
              <View className="absolute h-2 bg-blue-500 rounded-full w-[30%]" />
            </View>

            <Text className="absolute -top-6 left-[27%] text-sm bg-white p-2">
              30km
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm text-gray-500">10km</Text>
            <Text className="text-sm text-gray-500">100km</Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-[#007BFF] p-4 mt-2 rounded-lg"
          onPress={() => router.push('/screens/arrive')}
        >
          <Text className="text-white text-center text-xl">Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
