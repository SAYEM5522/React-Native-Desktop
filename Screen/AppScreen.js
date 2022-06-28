import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apps from '../Component/Apps/Apps';

const AppScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="AppScreen" component={Apps}  />
      </Stack.Navigator>
  )
}

export default AppScreen

const styles = StyleSheet.create({
  Apps:{
    marginLeft:80,
    backgroundColor:'red',
    height:"100%",
  }
})