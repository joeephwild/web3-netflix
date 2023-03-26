import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard";

const Features = ({ title, description, id }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-gray-400 px-4 text-xs">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        <FeaturedCard
          id={123}
          title="Delicious"
          rating={4}
          genre="japanese"
          address="osaka"
          short_description="very delicious"
          dishes="rice"
          long={256}
          lat={200}
          imgUrl="https://links.papareact.com/gn7"
        />

        <FeaturedCard
          id={123}
          title="Delicious"
          rating={4}
          genre="japanese"
          address="osaka"
          short_description="very delicious"
          dishes="rice"
          long={256}
          lat={200}
          imgUrl="https://links.papareact.com/gn7"
        />

        <FeaturedCard
          id={123}
          title="Delicious"
          rating={4}
          genre="japanese"
          address="osaka"
          short_description="very delicious"
          dishes="rice"
          long={256}
          lat={200}
          imgUrl="https://links.papareact.com/gn7"
        />
      </ScrollView>
    </View>
  );
};

export default Features;
