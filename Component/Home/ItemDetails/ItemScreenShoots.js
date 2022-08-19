import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemScreenShoots = () => {
  return (
    <View style={styles.ItemScreenShoots}>
      <Text>ItemScreenShoots</Text>
    </View>
  )
}

export default ItemScreenShoots

const styles = StyleSheet.create({
  ItemScreenShoots:{
    width:"98%",
    height:460,
    marginTop:15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ddd"
  }
})