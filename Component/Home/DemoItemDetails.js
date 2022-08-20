import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
const { width,height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  DemoItemDetails:{
  width:185,
  height:350,
  backgroundColor:"#fff",
  borderRadius:10,
  marginRight:15,
  marginBottom:20
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

const DemoItemDetails = ({item,index,size}) => {
  const navigation=useNavigation()
  const GotoDetails =useCallback(()=>{
     navigation.navigate("ItemDetails",{id:item.id,type:item.type})
  },[])
  return (
    <Pressable onPress={GotoDetails} key={index}>
    <View key={index} style={styles.DemoItemDetails}>
      <Image
             source={{uri:item.Image}}
             style={{
              height:(size)?100:220,
              width:(size)?100:160,
              marginTop:size?30:15,
              alignSelf:"center",
              borderRadius:size?3:6
              }}/>

         <View style={{
          marginTop:size?25:0
         }}>
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
    </Pressable>
  )
}

export default DemoItemDetails
