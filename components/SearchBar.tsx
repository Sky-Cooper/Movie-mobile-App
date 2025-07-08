import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

type SearchBarProps = {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex-row items-center px-5 py-4 rounded-full bg-dark-200">
      <Image
        source={icons.search}
        className="size-5 "
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
