import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Movies = () => {
  return (
    <View style={styles.Movies}>
      <Text>Movies</Text>
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  Movies:{
    marginLeft:75,
    backgroundColor:'red',
    height:"100%",
  }
})