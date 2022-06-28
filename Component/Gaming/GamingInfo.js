import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GamingInfo = () => {
  return (
    <View style={styles.Gaming}>
      <Text>Info</Text>
    </View>
  )
}

export default GamingInfo

const styles = StyleSheet.create({
  Gaming:{
    marginLeft:75,
    backgroundColor:'red',
    height:"100%",
  }
})