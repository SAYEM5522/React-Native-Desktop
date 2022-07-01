import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeInfo from '../Component/Home/HomeInfo'
import MiniBannerDetails from '../Component/Home/MiniBannerDetails'

const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
      
       return (
     <Stack.Navigator>
      <Stack.Screen name="HomeInfo" component={HomeInfo}  />
      <Stack.Screen name="MiniBannerList" component={MiniBannerDetails}  />
      </Stack.Navigator>
  );
      
   
  
}

export default HomeScreen

const styles = StyleSheet.create({})