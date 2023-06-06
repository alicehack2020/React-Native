 
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
const Stack=createNativeStackNavigator()

const Main = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName='home'
              screenOptions={{headerShown:false}}>
              <Stack.Group>
                  <Stack.Screen  name="home" component={Home}/>
              </Stack.Group>
          </Stack.Navigator>  
    </NavigationContainer>   
  )
} 

export default Main