import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Features from "../components/Features";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/** header */}
      <View className={styles.navHeader}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className={styles.image}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs capitalize">
            Deliver Now
          </Text>
          <Text className="font-bold flex items-center text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/**search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Retaurant and Crusines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={25} color="#00ccbb" />
      </View>

      <ScrollView 
      className='bg-gray-100'
      contentContainerStyle={{
        paddingBottom: 100
      }}
      >
        {/** categories */}
        <Categories />
        {/** featured */}
        <Features   
         title='Features'
        id='1'
        description='https://links.papareact.com/gn7' 
        />

         {/** Daily Discount */}
         <Features 
            title='Daily Disconut'
            id='1'
            description='Find places near you '   
          />

          {/** Offers near you */}
        <Features 
        title='Offer near you'
        id='1'
        description='Find places near you ' 
         />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = {
  navHeader: "flex-row pb-3 items-center mx-2 space-x-2 ",
  image: "h-7 w-7 bg-gray-300 p-4 rounded-full",
};
