import React from "react";
import MovieCard from "./MovieCard";
import { movieList } from "../Data/MovieList";
import { View , StyleSheet, ScrollView, Dimensions } from "react-native";


const MyMoviesScreen= () => {
    return (
        
            <ScrollView style={styles.root}>
                <View style={styles.grid}>
                    {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
                 </View>
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    root: {
        flex:1,
        
        backgroundColor: '#36454F',
        alignContent:"center",
        
        
      },
      grid: {
        flexDirection: "row",
        flexWrap:'wrap',
      }
    });

export default MyMoviesScreen;