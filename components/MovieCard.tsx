import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type MovieCardProps = {
  movieData: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movieData }) => {
  return (
    <Link
      href={{
        pathname: "/movies/[id]",
        params: { id: movieData.id.toString() },
      }}
      asChild
    >
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full rounded-lg h-52"
          resizeMode="cover"
        />

        <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
          {movieData.title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          {Array.from({ length: Math.round(movieData.vote_average / 2) }).map(
            (_, index) => {
              return <Image source={icons.star} className="size-4" />;
            }
          )}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="mt-1 text-xs font-medium text-light-300">
            {movieData.release_date?.split("-")[0]}
          </Text>
          <Text className="text-xs font-medium uppercase text-light-300">
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
