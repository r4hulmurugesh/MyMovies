import React from "react";
import { View , Text ,Image, StyleSheet, useWindowDimensions, TextInput} from "react-native";

const CustomInput = ( { textValue , placeholder, isPasswordText }) => {
    const {height} = useWindowDimensions();
return(
    <View style={styles.container}>
        { isPasswordText ?
        <TextInput 
        placeholder={placeholder} 
        style={styles.input}
        onChangeText={textValue}
        secureTextEntry
        />
        :
        <TextInput 
        placeholder={placeholder} 
        style={styles.input}
        onChangeText={textValue}
        
        />
        }
        
    </View>
)
}
  
const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderBottomColor: '#FEFEFE',
        borderBottomWidth:1,
        margin:20,
        borderRadius: 10,
    },
    input: {
        
    },
});
export default CustomInput;