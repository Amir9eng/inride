import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import {
  ArrowLeft,
  Camera,
  Mic,
  User,
  Image as ImageIcon,
  MapPin,
  FileText,
} from 'lucide-react-native';

export default function Information() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white p-4 flex-row items-center gap-x-3">
        <TouchableOpacity>
          <ArrowLeft size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/person.png')}
          className="w-10 h-10 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-semibold text-lg">Olive Rodrigo</Text>
          <Text className="text-gray-500 text-sm">
            Keep your account safe-dont share personal or account information in
            here
          </Text>
        </View>
        <TouchableOpacity>
          <Camera size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <User size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 p-4">
        {/* Chat messages */}
        <View className="bg-gray-100 rounded-lg p-3 self-start max-w-[80%] mb-4">
          <Text>
            Hey there! Just grabbed some Chow. I'm just around the corner from
            your place. 😊
          </Text>
          <Text className="text-gray-500 text-xs mt-1">10:10pm</Text>
        </View>

        <View className="bg-blue-500 rounded-lg p-3 self-end max-w-[80%] mb-4">
          <Text className="text-white">Hi!</Text>
          <Text className="text-white/70 text-xs mt-1">10:10pm</Text>
        </View>

        <View className="bg-blue-500 rounded-lg p-3 self-end max-w-[80%] mb-4">
          <Text className="text-white">
            Awesome, thanks for letting me know! Can't wait for my delivery.⚡️
          </Text>
          <Text className="text-white/70 text-xs mt-1">10:11pm</Text>
        </View>

        <View className="bg-gray-100 rounded-lg p-3 self-start max-w-[80%]">
          <Text>No problem at all!</Text>
          <Text className="text-gray-500 text-xs mt-1">
            I'll be there in about 15 minutes.
          </Text>
        </View>
      </View>

      {/* Bottom actions */}
      <View className="bg-white p-4">
        <View className="flex-row flex-wrap gap-4 mb-4">
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <Camera size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <Mic size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">Record</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <User size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <ImageIcon size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <MapPin size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">My Location</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <FileText size={24} color="#3b82f6" />
            </View>
            <Text className="text-xs mt-1">Document</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center gap-x-2">
          <TouchableOpacity>
            <Text className="text-3xl">+</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2"
          />
          <TouchableOpacity className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center">
            <Text className="text-white text-xl rotate-90">›</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
