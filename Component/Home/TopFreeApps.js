import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Data } from '../../Data'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
const TopFreeApps = () => {
  const navigation=useNavigation()
  const TopApp=Data.map((item,index)=>item)[1].Top_Free_Apps
  const Goto=useCallback(()=>{
    navigation.navigate("MiniBannerDetails")
  },[])
  return (
    <View>
        <Text style={styles.Caption}>Top free Apps</Text>
    <View  style={styles.FreeApp}>
    {
       TopApp.map((item,index)=>{
        return(
          <Pressable onPress={Goto} key={index}>
          <View style={styles.TopFreeApps} key={index}>
           <Image
            source={{uri:item.Image}}
            style={styles.BannerItemImage}
           />
           <View>
            <Text style={styles.Name}>{item.Name}</Text>
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
           <Text style={styles.Free}>Free</Text>
          </View>
          </Pressable>
        )
       })
     }
    </View>
    
    </View>
  )
}

export default TopFreeApps

const styles = StyleSheet.create({
  FreeApp:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    
  },
  TopFreeApps:{
    height:110,
    width:385,
    borderRadius:5,
    backgroundColor:"#fff",
    margin:10,
    display:"flex",
    flexDirection:"row",
    borderWidth:0.5,
    borderColor:"lightgray"
  },
  Caption:{
    fontSize:20,
    marginLeft:10,
    marginTop:20,
    fontWeight:"700",
    marginBottom:10
  },
  BannerItemImage:{
    width:75,
    height:75,
    resizeMode:"cover",
    borderRadius:5,
    marginLeft:10,
    marginTop:18
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
    top:5,
    right:10
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