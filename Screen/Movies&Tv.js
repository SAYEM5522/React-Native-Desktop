import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../Component/Movies/Movies';

const MoviesTv = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen name="Movies" component={Movies}  />
    </Stack.Navigator>
  )
}

export default MoviesTv

const styles = StyleSheet.create({
  Movies:{
    marginLeft:80,
    backgroundColor:'red',
    height:"100%",
  }
})