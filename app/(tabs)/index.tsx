import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/UseFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const renderHeader = () => (
    <View className="px-5">
      <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5" />
      <SearchBar
        onPress={() => router.push("/search")}
        placeholder="Search for a movie"
      />
      <Text className="mt-5 mb-3 text-lg font-bold text-white">
        Latest Movies
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute z-0 w-full h-full"
        resizeMode="cover"
      />
      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="self-center mt-10"
        />
      ) : moviesError ? (
        <Text className="px-5 mt-10 text-red-500">
          Error: {moviesError.message}
        </Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movieData={item} />}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : `fallback-${index}`
          }
          numColumns={3}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 100,
            paddingTop: 0,
          }}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            marginBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
