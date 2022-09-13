import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator   } from '@react-navigation/native-stack';
import LoginScreen from "./src/Components/LoginScreen";
import SignUpScreen from "./src/Components/SignUpScreen";
import MyMoviesScreen from "./src/Components/MyMoviesScreen";

const Stack = createNativeStackNavigator();

const App = () => {

  const onLogin = () => {
    
    console.warn('login');
    
  }

  const onSignUp = () => {
    
    console.log('singUp');
    
  }

  return (
    // <SafeAreaView style={styles.root}>
    //   <ScrollView>
    //     <LoginScreen onLogin = {onLogin}/>
    //     <SignUpScreen onSignUp={onSignUp}/>
    //   </ScrollView>
    // </SafeAreaView>

<NavigationContainer>
<Stack.Navigator >
  <Stack.Screen
    name="Login"
    component={LoginScreen}
    options={{
      title: 'Login',
      headerStyle: {
        backgroundColor: '#E2112E',
      },
      headerTitleAlign: "center",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  />
  <Stack.Screen 
  name="signUp" 
  component={SignUpScreen} 
  options={{
    title: 'Sign Up',
    headerStyle: {
    backgroundColor: '#E2112E',
  },
  headerTitleAlign: "center",
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize:18,
  },
}}
  />
  <Stack.Screen 
  name="MyMovies" 
  component={MyMoviesScreen} 
  options={{
    title: 'My Movies',
    headerStyle: {
    backgroundColor: '#E2112E',
  },
  headerTitleAlign: "center",
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize:18,
  },
}}
  />
  </Stack.Navigator>
</NavigationContainer>
  )
}


export default App;