import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Modal, Pressable, TextInput, Button, ActivityIndicator } from 'react-native';
import Colors from '../constans/Colors';
import MovieCard from '../components/MovieCard';
import ItemSeparator from '../components/ItemSeparator';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDatas = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=61b93257091c63f99ac3b8eca0c97863'
        );
        const json = await response.json();
        setNowPlayingMovies(json.results);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);


  const handleDeleteMovie = (movieId) => {
    const updatedMovies = nowPlayingMovies.filter((movie) => movie.id !== movieId);
    setNowPlayingMovies(updatedMovies);
  };

  const handleEditMovie = (movieId) => {
    const movieToEdit = nowPlayingMovies.find((movie) => movie.id === movieId);
    if (movieToEdit) {
      setNewMovieTitle(movieToEdit.title);
      setNewMovieLanguage(movieToEdit.original_language);
      setNewMovieVoteAverage(movieToEdit.vote_average.toString());
      setModalVisible(true);

      const updatedMovies = nowPlayingMovies.filter((movie) => movie.id !== movieId);
      setNowPlayingMovies(updatedMovies);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={Colors.BASIC_BACKGROUND}
      />
      {isLoading ? (
        <Text style={{ color: Colors.WHITE, fontSize: 18, alignSelf: 'center', marginTop: 20 }}>
          Nungguin Yaaaa...
        </Text>
      ) : (
        <FlatList
          data={nowPlayingMovies}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              heartLess={false}
              onPress={() => navigation.navigate("movie", { movieId: item.id })}
              onDelete={() => handleDeleteMovie(item.id)}
              onEdit={() => handleEditMovie(item.id)}
            />
          )}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default HomeScreen;
