import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Data } from '../../Data'
const TopFreeApps = () => {
  const TopApp=Data.map((item,index)=>item)[1].Top_Free_Apps

  return (
    <View>
        <Text style={styles.Caption}>Top free Apps</Text>
    <View  style={styles.FreeApp}>
    {
       TopApp.map((item,index)=>{
        return(
          <View style={styles.TopFreeApps} key={index}>
           <Image
            source={{uri:item.Image}}
            style={styles.BannerItemImage}
           />
           <View>
            <Text style={styles.Name}>{item.Name}</Text>
            <Text style={styles.Type}>{item.type}</Text>

           </View>
           <Text style={styles.Free}>Free</Text>
          </View>
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
    marginLeft:50,
  

  },
  TopFreeApps:{
    height:110,
    width:350,
    borderRadius:5,
    backgroundColor:"#fff",
    margin:10,
    display:"flex",
    flexDirection:"row",
    borderWidth:0.5,
    borderColor:"lightgray"
  },
  Caption:{
    fontSize:21,
    marginLeft:30,
    marginTop:15,
    fontWeight:"700"
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
  }
})