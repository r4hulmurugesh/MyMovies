import React from "react";
import { View , Text , StyleSheet, TextInput , Pressable} from "react-native";

const CustomButton = ({onPress, text}) => {
return(
    <Pressable onPress= {onPress} style={styles.btContainer}>
        <Text style={styles.btnText}>{text}</Text>
    </Pressable>
)
};

const styles = StyleSheet.create({
    btContainer: {
        backgroundColor: 'white',
        width: '50%',
        borderRadius: 25,
        marginTop:30,
    },
    btnText: {
            width: '100%',
            color:'#E2112E',
            fontSize: 15,
            textAlign:'center',
            padding:10,
            
            }
});


export default CustomButton;