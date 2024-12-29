// arrange.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  MapPin,
  Star,
  Map,
  MoveLeft,
  CarFront,
  User,
  Plus,
  ChevronRight,
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Arrange() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white pt-16">
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <MoveLeft size={20} className="text-gray-500" color="black" />
        </TouchableOpacity>
        <Text className="ml-32 text-lg font-semibold">Arrange your rides</Text>
      </View>
      <LinearGradient colors={['#EBF4FF', '#FFFFFF']}>
        <View className="p-4">
          <View className="flex-row mb-4">
            <TouchableOpacity className="bg-white gap-x-3 flex-row items-center px-4 py-2 rounded-full mr-2">
              <CarFront size={20} />
              <Text className="text-blue-500">Pick up</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-row items-center gap-x-3 px-4 py-2 rounded-full">
              <User size={20} />
              <Text className="text-blue-500">For me</Text>
            </TouchableOpacity>
          </View>

          <View className="relative mb-4">
            <View className="absolute left-0 top-0 bottom-0 w-[0.7px] bg-black ml-3">
              <View className="w-4 h-4 rounded-full border-2 border-green-500 bg-white  absolute top-4" />
              <View className="w-4 h-4 rounded-full border-2 border-red-500 bg-white  absolute bottom-4" />
            </View>

            <View className="ml-8">
              <TextInput
                className="bg-gray-100 p-4 rounded-lg mb-2"
                placeholder="AMLI 7th Street Station"
                value="AMLI 7th Street Station"
              />
              <TouchableOpacity className="bg-black absolute rounded-full p-2 w-9 h-9 right-0 top-14 z-10 justify-end">
                <Plus size={20} color="white" />
              </TouchableOpacity>
              <TextInput
                className="bg-gray-100 p-4 mt-7 rounded-lg"
                placeholder="Where to?"
              />
            </View>
          </View>

          <TouchableOpacity
            className="flex-row items-center p-4 border-t border-b border-gray-200"
            onPress={() => router.push('/screens/reserve')}
          >
            <TouchableOpacity className="bg-black rounded-full p-2">
              <Star size={20} className="text-gray-500" color="white" />
            </TouchableOpacity>
            <Text className="ml-4 flex-1">Saved Places</Text>
            <ChevronRight size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
            <TouchableOpacity className="bg-black rounded-full p-2">
              <Map size={20} className="text-gray-500" color="white" />
            </TouchableOpacity>
            <Text className="ml-4 flex-1">Select Location via Map</Text>
            <ChevronRight size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View className="p-4">
          <Text className="text-lg font-semibold mb-4">Close by Pickups</Text>
          <ScrollView>
            {[1, 2].map((_, i) => (
              <TouchableOpacity
                key={i}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <TouchableOpacity className="bg-black rounded-full p-2">
                  <MapPin size={20} className="text-gray-500" color="white" />
                </TouchableOpacity>

                <View className="ml-4 flex-1">
                  <Text className="font-medium">AMLI 7th Street Station</Text>
                  <Text className="text-gray-500 text-sm">
                    2601 West 7th St, Fort Worth, Texas 7
                  </Text>
                </View>
                <ChevronRight size={20} color="black" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="p-4">
          <Text className="text-lg font-semibold mb-4">Recent Search</Text>
          <ScrollView>
            {[1, 2].map((_, i) => (
              <TouchableOpacity
                key={i}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <TouchableOpacity className="bg-black rounded-full p-2">
                  <MapPin size={20} className="text-gray-500" color="white" />
                </TouchableOpacity>

                <View className="ml-4 flex-1">
                  <Text className="font-medium">AMLI 7th Street Station</Text>
                  <Text className="text-gray-500 text-sm">
                    2601 West 7th St, Fort Worth, Texas 7
                  </Text>
                </View>
                <ChevronRight size={20} color="black" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}
