import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Data } from '../../Data'
const { width,height } = Dimensions.get('window')
const styles = StyleSheet.create({
  MiniBannerList:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
  },
  MiniBannerList_Item:{
    height:height/2,
    width:150,
    backgroundColor:"#fff",
    borderRadius:10,
    marginRight:10
  }
})
const MiniBannerList = ({item,index}) => {

  return (
    <View   
    style={styles.MiniBannerList}
    key={index}
    >
            <View style={styles.MiniBannerList_Item}>
              <Text>{item.name}</Text>
            </View>
    </View>
  )
}

export default MiniBannerList

