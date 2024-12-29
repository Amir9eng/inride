import { Link, useRouter } from 'expo-router';
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { MoveRight, ClockArrowDown, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="">
        <LinearGradient colors={['#EBF4FF', '#FFFFFF']}>
          <TextInput
            placeholder="Where to?"
            className="p-3 mx-2 mt-16 rounded-lg mb-4 border bg-white border-[#EAECF0]"
          />

          <View className="mb-4 flex-row items-center gap-x-4 border-b border-[#D0D5DD] pb-4 px-4">
            <View className="bg-black/70 rounded-full p-2">
              <ClockArrowDown size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-600">AMLI 7th Street Station.</Text>
              <Text className="text-gray-400">
                2601 West 7th St, Fort Worth, Texas 7
              </Text>
            </View>
            <ChevronRight size={20} color="black" />
          </View>
          <View className="mb-5 flex-row items-center gap-x-4 px-4">
            <View className="bg-black/70 rounded-full p-2">
              <ClockArrowDown size={20} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-600">AMLI 7th Street Station.</Text>
              <Text className="text-gray-400">
                2601 West 7th St, Fort Worth, Texas 7
              </Text>
            </View>
            <ChevronRight size={20} color="black" />
          </View>

          <TouchableOpacity className="bg-[#007BFF] px-4 py-2 rounded-lg flex-row justify-between items-center mb-6 mx-2">
            <View>
              <Text className="text-white text-lg font-bold">
                Drivers nearby
              </Text>
              <View className="flex flex-row items-center pt-6 gap-x-2">
                <Text className="text-white">Pickups near</Text>
                <MoveRight size={12} color="white" />
              </View>
            </View>
            <Image
              source={require('../../assets/images/beep.png')}
              className="w-[75px] h-[98px] mb-2"
            />
          </TouchableOpacity>
          <View className="mb-6 mx-3">
            <Text className="text-lg font-semibold mb-4">Our services</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row gap-x-5">
                <TouchableOpacity
                  className="px-4 py-3"
                  onPress={() => router.push('/rides')}
                >
                  <Image
                    source={require('../../assets/images/ride-icon.png')}
                    className="w-16 h-9 mb-2"
                  />
                  <Text className="text-center pt-1">Ride</Text>
                </TouchableOpacity>

                <View>
                  <View className="px-4 py-3">
                    <Image
                      source={require('../../assets/images/reserve.png')}
                      className="w-16 h-9 mb-2"
                    />
                    <Text className="text-center">Reserve</Text>
                  </View>
                </View>
                <Link href="/rides">
                  <View className="px-4 py-3">
                    <Image
                      source={require('../../assets/images/group-ride.png')}
                      className="w-16 h-9 mb-2"
                    />
                    <Text className="text-center">Group Ride</Text>
                  </View>
                </Link>
                <Link href="/rides">
                  <View className="px-4 py-3">
                    <Image
                      source={require('../../assets/images/group-ride.png')}
                      className="w-16 h-9 mb-2"
                    />
                    <Text className="text-center">Group Ride</Text>
                  </View>
                </Link>
              </View>
            </ScrollView>
          </View>

          <View className="mx-3">
            <Text className="text-lg font-semibold mb-4">
              Ways to use inride
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-4"
            >
              <View className="flex-row gap-x-10">
                <View>
                  <Image
                    source={require('../../assets/images/schedule.png')}
                    className="w-64 h-32 mb-2"
                  />
                  <View className="flex flex-row items-center pt-2 gap-x-2">
                    <Text className="text-lg">
                      Schedule ride in to the future
                    </Text>
                    <MoveRight size={18} color="black" />
                  </View>
                  <Text>send and receive parcels swiftly</Text>
                </View>
                <View>
                  <Image
                    source={require('../../assets/images/help.png')}
                    className="w-64 h-32 mb-2"
                  />
                  <View className="flex flex-row items-center pt-2 gap-x-2">
                    <Text className="text-lg">
                      Schedule ride in to the future
                    </Text>
                    <MoveRight size={18} color="black" />
                  </View>
                  <Text>send and receive parcels swiftly</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
        <TouchableOpacity className="bg-[#1D2939] px-4 py-2 rounded-lg flex-row justify-between items-center mb-6 mx-3">
          <View>
            <Text className="text-white text-lg font-bold">Drivers nearby</Text>
            <View className="flex flex-row items-center pt-6 gap-x-2">
              <Text className="text-white">Ride with inride</Text>
              <MoveRight size={12} color="white" />
            </View>
          </View>
          <Image
            source={require('../../assets/images/neep.png')}
            className="mb-2"
          />
        </TouchableOpacity>

        <View className="px-3">
          <Text className="text-lg font-semibold mb-4">Other Services</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4"
          >
            <View className="flex-row gap-x-10">
              <View>
                <Image
                  source={require('../../assets/images/group.png')}
                  className="w-64 h-32 mb-2"
                />
                <View className="flex flex-row items-center pt-2 gap-x-2">
                  <Text className="text-lg">Group ride</Text>
                  <MoveRight size={18} color="black" />
                </View>
                <Text>Order together with your friends</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/images/transport.png')}
                  className="w-64 h-32 mb-2"
                />
                <View className="flex flex-row items-center pt-2 gap-x-2">
                  <Text className="text-lg">Public Transport</Text>
                  <MoveRight size={18} color="black" />
                </View>
                <Text>send and receive parcels swiftly</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="mb-28 px-3">
          <Text className="text-lg font-semibold mb-4">Around you</Text>

          <Image
            source={require('../../assets/images/mappo.png')}
            className="w-full h-96"
          />
        </View>
      </View>
    </ScrollView>
  );
}
