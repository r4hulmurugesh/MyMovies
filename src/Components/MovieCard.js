import React from "react";
import { Image , Text , StyleSheet , AutoHeightImage,Dimensions, View} from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const MovieCard = ({movie}) => {
    const { title,imageUrl,lang } = movie;
    console.log(imageUrl);
    return (
        <View style={styles.root}>
            <Image 
                source={{uri:imageUrl,}}  
                style={styles.movieImage} 
                />
            <Text style={styles.movieName}> {title}</Text>
            <Text style={styles.langText}>{lang}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {   root: {
        alignItems:"center",
        width: deviceWidth/3,
        paddingBottom: 5
        },
        movieImage:{
            width: deviceWidth/3,
            height: deviceHeight/3,
            marginBottom:5,
        },
        movieName: {
            color:"white",
            textAlign:"center",
            fontSize:12,
            height:"8%",
            marginBottom:3,
        },
        langText: {
            color:"white",
            paddingBottom:5,
            textAlign:"center",
            fontSize:8,
        }

        })

export default MovieCard;