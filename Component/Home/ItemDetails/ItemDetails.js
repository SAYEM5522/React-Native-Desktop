import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import ItemTop from './ItemTop'
import ItemScreenShoots from './ItemScreenShoots'
import Header from '../Header'

const ItemDetails = ({route}) => {
  const {id}=route.params
  const navigation=useNavigation()
  const GoBack=useCallback(()=>{
    navigation.goBack()
  },[])
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Header/>
     <ItemTop id={id}/>
     <ItemScreenShoots id={id}/>
     </ScrollView>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
  Container:{
    flex:1,
    display:"flex",
    marginLeft:76,
    // backgroundColor:"red"


  },
  Arrow:{
    height:20,
    width:20
   }
})