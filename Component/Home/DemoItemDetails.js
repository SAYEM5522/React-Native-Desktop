import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const { width,height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  DemoItemDetails:{
  width:185,
  height:340,
  backgroundColor:"#fff",
  borderRadius:10,
  marginRight:15,
  marginBottom:20
  },
  MiniBannerList_Item_Iage:{
    
    
  }
})

const DemoItemDetails = ({item,index,size}) => {
  return (
    <View key={index} style={styles.DemoItemDetails}>
      <Image
             source={{uri:item.Image}}
             style={{
              height:(size)?100:220,
              width:(size)?100:160,
              marginTop:size?30:15,
              alignSelf:"center",
              borderRadius:size?0:6
              
             }}
             />
    </View>
  )
}

export default DemoItemDetails
