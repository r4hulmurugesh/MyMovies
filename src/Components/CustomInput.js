import React from "react";
import { View , Text ,Image, StyleSheet, useWindowDimensions, TextInput} from "react-native";

const CustomInput = ( { value, setValue,placeholder }) => {
    const {height} = useWindowDimensions();
return(
    <View style={styles.container}>
        <TextInput 
        value={value}

        placeholder={placeholder} style={styles.input}></TextInput>
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