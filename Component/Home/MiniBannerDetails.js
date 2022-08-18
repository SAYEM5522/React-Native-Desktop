import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

const MiniBannerDetails = () => {
  const navigation=useNavigation()
  const GoBack=useCallback(()=>{
    navigation.goBack()
  },[navigation])
  return (
    <View style={styles.Details}>
      <Pressable onPress={()=>{navigation.goBack()}}>
      <Image
                  source={require('../../image/ms7.png')}
                  style={styles.Arrow}
                  
                 />
      </Pressable>
    </View>
  )
}

export default MiniBannerDetails

const styles = StyleSheet.create({
  Details:{
    marginLeft:72,
    height:"100%",
    backgroundColor:"red",
    flex:1
   },
   Arrow:{
    height:20,
    width:20
   }
})