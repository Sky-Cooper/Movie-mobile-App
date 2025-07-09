import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const saved = () => {
  return (
    <View className="flex-1 px-10 bg-primary">
      <View className="flex flex-col items-center justify-center flex-1 gap-5">
        <Image source={icons.save} className="size-10" tintColor="#Fff" />
        <Text className="text-base text-gray-500">Save</Text>
      </View>
    </View>
  );
};

export default saved;
