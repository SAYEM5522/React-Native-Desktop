import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
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
  },
  Name:{
    fontSize:16,
    marginLeft:10,
    marginTop:15,
    fontWeight:"700"
  },
  Type:{
    fontSize:13,
    marginLeft:10,
    marginTop:5,
    fontWeight:"500"
  },
  Free:{
    fontSize:13.5,
    marginLeft:10,
    marginTop:5,
    fontWeight:"500",
    position:"absolute",
    bottom:6,
    left:6
  },
  Rating_List:{
    display:"flex",
    flexDirection:"row",
    marginLeft:10,
    marginTop:7

  },
  Rating:{
    width:13,
    height:13,
    marginRight:3
  },
  Rating_Count:{
   fontSize:13,
    marginLeft:10,
    marginTop:-3,
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
                 <View 
                 style={{
                  marginTop:25
                 }}
                 >
            <Text style={styles.Name}>{item.name}</Text>
            <Text style={styles.Type}>{item.type}</Text>
            <View style={styles.Rating_List}>
            {
              Array(5).fill('').map((item,index)=>{
                return(
                  <Image
                  source={require('../../image/w5.png')}
                  style={styles.Rating}
                  key={index}
                 />
                )
              })

            }
            <Text style={styles.Rating_Count}>{`${item.Rating>=1000?item.Rating/1000:item.Rating}${item.Rating>=1000?'k':''}`}</Text>
            </View>
           </View>
           <Text style={styles.Free}>{item.list}</Text>

            </View>
    </View>
  )
}

export default MiniBannerList

