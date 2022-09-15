import React from "react";
import { View , Text ,Image, StyleSheet, useWindowDimensions} from "react-native";
import Logo from '../Assets/Logo.png';
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";
import { LoginCreds } from "../Data/LoginCreds";

const LoginScreen = ({navigation}) => {
    const {height} = useWindowDimensions();
    const [formValue,setFormValue] =useState({
        userName:'',
        password:''
    });

    const [isLogedIn,setIsLogedIn] = useState();

    const handlePress = () => {
        console.warn(formValue);
        
        if(formValue.userName===LoginCreds.userName && formValue.password===LoginCreds.password)
        { console.warn(isLogedIn);
            setIsLogedIn(true);
            
            navigation.navigate("MyMovies");
        } else {
            setIsLogedIn(false);
        }
        console.warn(isLogedIn);
        console.warn(!isLogedIn && isLogedIn!==undefined  || formValue.userName ==='' || formValue.password == '');
    }

return(
    <SafeAreaView style= {styles.root}>
    <View style={styles.container}>
        <Image 
        source={Logo} style={[styles.logo, {height:height*0.1}] } resizeMode="contain" />
            <Text style={styles.title}>My Movies</Text>
            <CustomInput placeholder={'Username'}
            textValue={(value) => setFormValue({...formValue,userName:value})}
            isPasswordText={false}
            />
            <CustomInput placeholder={'password'} 
            textValue={(value) => setFormValue({...formValue,password:value})}
            isPasswordText={true} 
            />

            {((!isLogedIn && isLogedIn!==undefined ) || formValue.userName ==='' || formValue.password == '') &&
                <Text styles={styles.warning}>Please enter valid credentials</Text>
            }
            <CustomButton text={'Login'} 
            onPress={handlePress} 
            />
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
    },
    warning: {
        color:"grey",
        fontSize:13,
    }

});
export default LoginScreen;