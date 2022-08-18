import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchItem = () => {
  return (
    <View style={styles.SearchItem}>
      <Text>SearchItem</Text>
    </View>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  SearchItem:{
    width:450,
    height:600,
    backgroundColor:"red",
    borderRadius:10
  }
})