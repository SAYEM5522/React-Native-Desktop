import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { width,height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  DemoItemDetails:{
  width:185,
  height:320,
  backgroundColor:"#fff",
  borderRadius:10,
  marginRight:15,
  marginBottom:20
  }
})

const DemoItemDetails = ({item,index}) => {
  return (
    <View key={index} style={styles.DemoItemDetails}>
      <Text>{index}</Text>
    </View>
  )
}

export default DemoItemDetails
