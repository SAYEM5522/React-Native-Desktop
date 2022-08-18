import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

const ItemDetails = () => {
  const navigation=useNavigation()
  const GoBack=useCallback(()=>{
    navigation.navigate("MiniBannerDetails")
  },[])
  return (
    <View style={styles.Container}>
        <Pressable onPress={GoBack}>
      <Image
                  source={require('../../image/ms7.png')}
                  style={styles.Arrow}
                  
                 />
      </Pressable>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
  Container:{
    flex:1,
    display:"flex",


  },
  Arrow:{
    height:20,
    width:20
   }
})