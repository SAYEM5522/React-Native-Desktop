import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
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
    width:170,
    backgroundColor:"#fff",
    borderRadius:10,
    marginRight:10
  },
  MiniBannerList_Item_Iage:{
    height:100,
    width:100,
    marginTop:30,
    alignSelf:"center"
  }
})
const MiniBannerList = ({item,index}) => {

  return (
    <View   
    style={styles.MiniBannerList}
    key={index}
    >
            <View style={styles.MiniBannerList_Item}>
             <Image
             source={{uri:item.Image}}
             style={styles.MiniBannerList_Item_Iage}
             />
            </View>
    </View>
  )
}

export default MiniBannerList

