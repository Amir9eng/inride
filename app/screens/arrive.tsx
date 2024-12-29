import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PenLine, Plus, PhoneCall, ShieldCheck } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function Arrive() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <Image
        source={require('../../assets/images/arrival.png')}
        style={{ width: '100%', height: 290 }}
      />
      <View className="bg-white flex-1 p-4 rounded-t-3xl">
        <Text className="text-xl font-medium text-center">
          Arriving in 5 mins
        </Text>
        <Text className="text-[#1D2939] mb-4 text-center">
          Toyota Corolla | Black | EPE-546-633
        </Text>

        <View className="border border-[#D0D5DD] rounded-lg p-4 mb-4">
          <View className="flex-row justify-between mb-1">
            <Text className="font-medium">Ride details</Text>
            <Text className="text-[#98A2B3] font-bold text-xl">⋮</Text>
          </View>
          <Text className="text-[#344054] text-lg font-semibold">
            Meet driver at pick up spot
          </Text>
          <Text className="text-[#344054] text-sm">
            AML 7th Street Station.., Driver will arrive here to pick you up
          </Text>
        </View>

        <View className="flex-row items-center mb-6">
          <Image
            source={require('../../assets/images/avatar.png')}
            className="w-15 h-15 rounded-full mr-3"
          />
          <View className="flex-1">
            <Text className="text-lg font-medium">Olive Rodrigo</Text>
          </View>
          <View>
            <View className="flex-row items-center">
              <Text>4.4</Text>
              <Text className="text-yellow-400 mx-1">★</Text>
              <Text className="text-gray-500">|53 rides</Text>
            </View>
            <Text className="text-xl text-right">$12.5</Text>
          </View>
        </View>

        <View className="relative">
          {/* First row */}
          <View className="flex-row items-center gap-x-2">
            <View className="w-4 h-4 rounded-full border-2 border-green-500 bg-white" />
            <View className="border border-[#D1D1D6] rounded-lg p-3 flex-1 mr-4">
              <Text>AMLI 7th Street Station.</Text>
            </View>
            <TouchableOpacity className="bg-black rounded-full p-2">
              <PenLine size={20} color="white" />
            </TouchableOpacity>
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
          <View className="flex-row items-center gap-x-2 mt-3">
            <View className="w-4 h-4 rounded-full border-2 border-red-500 bg-white" />
            <View className="border border-[#D1D1D6] rounded-lg p-3 flex-1 mr-4">
              <Text>AMLI 7th Street Station.</Text>
            </View>
            <TouchableOpacity className="bg-black rounded-full p-2">
              <Plus size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row mt-6 gap-x-5">
          <TouchableOpacity className="flex-1 bg-blue-50 p-4 rounded-lg">
            <Text className="text-center">Message Olive Rodrigo</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-16 p-4 rounded-lg flex-row items-center justify-center gap-x-2">
            <PhoneCall size={20} color="black" />
            <Text className="text-center">Call</Text>
          </TouchableOpacity>
        </View>

        <View className="border-t border-gray-200 pt-2 mt-3">
          <TouchableOpacity
            className="mt-3 border border-blue-500 p-4 rounded-lg flex-row items-center justify-center"
            onPress={() => router.push('/screens/choose')}
          >
            <Text className="text-blue-500 text-center mr-2">Safety</Text>
            <ShieldCheck size={20} color="#007BFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
