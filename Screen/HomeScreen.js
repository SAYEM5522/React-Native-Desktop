import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeInfo from '../Component/Home/HomeInfo'
import ItemDetails from "../Component/Home/ItemDetails/ItemDetails"
const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
       return (
        <View style={{...StyleSheet.absoluteFillObject}}>
     <Stack.Navigator >
      <Stack.Screen name="HomeInfo" component={HomeInfo}  />
      <Stack.Screen name="ItemDetails" component={ItemDetails}  />

      </Stack.Navigator>
      </View>
    
  );
      
   
  
}

export default HomeScreen

const styles = StyleSheet.create({})