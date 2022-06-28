import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GamingInfo from '../Component/Gaming/GamingInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Gaming = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen name="GamingInfo" component={GamingInfo}  />
    </Stack.Navigator>
  )
}

export default Gaming

const styles = StyleSheet.create({
  Gaming:{
    marginLeft:80,
    backgroundColor:'red',
    height:"100%",
  }
})