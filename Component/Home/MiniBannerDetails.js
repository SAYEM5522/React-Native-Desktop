import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiniBannerDetails = () => {
  return (
    <View style={styles.Details}>
      <Text>MiniBannerDetails</Text>
    </View>
  )
}

export default MiniBannerDetails

const styles = StyleSheet.create({
  Details:{
    marginLeft:72,
    height:"100%",
    backgroundColor:"whitesmoke"
   },
})