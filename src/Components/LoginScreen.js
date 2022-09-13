import React from "react";
import { View , Text ,Image, StyleSheet, useWindowDimensions} from "react-native";
import Logo from '../Assets/Logo.png';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({navigation}) => {
    const {height} = useWindowDimensions();
return(
    <SafeAreaView style= {styles.root}>
    <View style={styles.container}>
        <Image 
        source={Logo} style={[styles.logo, {height:height*0.1}] } resizeMode="contain" />
            <Text style={styles.title}>My Movies</Text>
            <CustomInput placeholder={'Username'}/>
            <CustomInput placeholder={'password'}/>
            <CustomButton text={'Login'} />
            <View style={styles.signUpContainer}>
            <Text style={styles.text}>Don't have an account? </Text>
            <Text style={styles.boldText} onPress={()=> navigation.navigate("signUp")}> Sign Up</Text>
            <Text style={styles.boldText} onPress={()=> navigation.navigate("MyMovies")}> My Movies</Text>
        </View>
    </View>
    </SafeAreaView>
)
}
  
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#E2112E',
        padding: 20,
      },
    container: {
        alignItems: 'center',
        marginTop: '20%',
        
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
        marginBottom: '10%',
        
    },
    title: {
        textAlign:'center',
        fontSize: 20,
        fontWeight:'bold',
    },
    text: {
        fontSize: 13
        ,
    },
    boldText: {
        fontSize: 13,
        fontWeight: 'bold',

    },
    signUpContainer: {
        marginTop: 15,
        flexDirection: 'row',
    }

});
export default LoginScreen;