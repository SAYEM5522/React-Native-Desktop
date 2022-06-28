import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeInfo from '../Component/Home/HomeInfo'

const HomeScreen = () => {
  const navigation=useNavigation()
  const Stack = createNativeStackNavigator();
      
       return (
     <Stack.Navigator>
      <Stack.Screen name="HomeInfo" component={HomeInfo}  />
      </Stack.Navigator>
  );
      
   
  
}

export default HomeScreen

const styles = StyleSheet.create({})