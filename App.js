
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppScreen from './Screen/AppScreen';
import HomeScreen from './Screen/HomeScreen';
import MoviesTv from './Screen/Movies&Tv';
import TabBar from './Screen/TabBar';

import GamingScreen from './Screen/GamingScreen';



const App =() =>{
  const Tab = createBottomTabNavigator();
  const Stack=createNativeStackNavigator()
  LogBox.ignoreLogs(['EventEmitter.removeListener'])
  return (
   
    <View style={styles.Container}>
      <StatusBar hidden={true}/>
    <NavigationContainer>
      <Tab.Navigator
      //  initialRouteName="Home"
       tabBar={props => <TabBar {...props}  />}
       screenOptions={{
         headerShown:false,
      
       }}
      >
       <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({color, size }) => (
         <Image 
         source={require('./image/w-1.png')}
          style={{width:25,height:25}}
         />
        
          ),
          
        }}
        

       />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size, }) => (
              <Image 
              source={require('./image/w-2.png')}
               style={{width:27,height:27}}
              />
  
            ),
          }}
        
        name="Apps" component={AppScreen} />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size, }) => (
              <Image 
              source={require('./image/w-3.png')}
               style={{width:29,height:29}}
              />
  
            ),
          }}
        
        name="Gaming" component={GamingScreen} />
       
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image 
              source={require('./image/w-4.png')}
               style={{width:27,height:27}}
              />
            ),
          }}
        
        name='Movies & Tv' component={MoviesTv}/>
      </Tab.Navigator>
   </NavigationContainer>
 
  

  </View>
  );
 
};

const styles = StyleSheet.create({
  
  Container:{
    flex:1,
    display:"flex",


  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
