import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/UseFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type MovieInfoType = {
  label: string;
  value: string | null;
};

const MovieInfo = ({ label, value }: MovieInfoType) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-sm font-normal text-light-200 ">{label}</Text>
      <Text className="mt-2 text-sm font-bold text-light-100">
        {value || "N/A"}
      </Text>
    </View>
  );
};

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string));

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center px-5 mt-5">
          <Text className="text-xl font-bold text-white">{movie?.title}</Text>
          <View className="flex-row items-center mt-2 gap-x-1">
            <Text className="text-sm text-light-200">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-sm text-light-200">{movie?.runtime}m</Text>
          </View>
          {movie?.vote_average && (
            <View className="flex-row items-center px-2 py-1 mt-2 rounded-md bg-dark-100 gap-x-1">
              {Array.from({ length: Math.round(movie.vote_average / 2) }).map(
                (_, index) => {
                  return (
                    <Image source={icons.star} className="size-4" key={index} />
                  );
                }
              )}
            </View>
          )}

          <MovieInfo
            label="Overview"
            value={movie?.overview ? movie?.overview : null}
          />
          <MovieInfo
            label="Genres"
            value={
              movie?.genres ? movie.genres.map((g) => g.name).join(" - ") : null
            }
          />

          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={`$${
                movie?.budget ? movie.budget / 1_000_000 : null
              } million`}
            />

            <MovieInfo
              label="Revenue"
              value={`$${
                movie?.revenue ? Math.round(movie?.revenue / 1_000_000) : null
              }`}
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies
                ? movie.production_companies.map((c) => c.name).join(" - ")
                : null
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-10 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-base font-semibold text-white">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
