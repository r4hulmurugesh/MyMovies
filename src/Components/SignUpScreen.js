import React from "react";
import { View , Text ,Image, StyleSheet , useWindowDimensions , SafeAreaView } from "react-native";
import Avatar from '../Assets/Avatar.png';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const SignUpScreen = ({navigation}) => {
    const {height} = useWindowDimensions();
    return(
    <SafeAreaView style= {styles.root}>
    <View style={styles.container}>
        <Image 
        source={Avatar} style={[styles.logo, {height:height*0.1}] } resizeMode="contain" />
            <CustomInput placeholder={'Name'}/>
            <CustomInput placeholder={'UserName'}/>
            <CustomInput placeholder={'Email'}/>
            <CustomInput placeholder={'Birthday'}/>
            <CustomButton text={'Sign Up'} />
        <View style={styles.signUpContainer}>
            <Text style={styles.text}>Already have an account? </Text>
            <Text style={styles.boldText} onPress={()=> navigation.navigate("Login")}> Login </Text>
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
        marginTop: '15%',
        
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
        marginBottom: 30,
        
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
    
export default SignUpScreen;