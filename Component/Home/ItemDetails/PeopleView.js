import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DemoItemDetails from '../DemoItemDetails'
const styles = StyleSheet.create({
  Container:{
    flexDirection:"row",
    alignItems:"center",
    display:"flex",
  }
})
const PeopleView = ({item,index}) => {
  return (
    <View >
     <DemoItemDetails item={item} index={index}/>
    </View>
  )
}

export default PeopleView

