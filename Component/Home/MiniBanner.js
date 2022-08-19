import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Dimensions } from 'react-native'
import MiniBannerList from './MiniBannerList'
import { useNavigation } from '@react-navigation/native'
const { width,height } = Dimensions.get('window')
import { Data } from '../../Data'
import { Item } from '../../ItemList'
import { Item2 } from '../../ItemList2'
const styles = StyleSheet.create({
  MiniBanner:{
    height:height/1.6,
    backgroundColor:"gray",
    // width:(width)-180,
    borderRadius:10,
    marginLeft:10,
    marginTop:20,
    marginBottom:20,
    marginRight:33,
    width:"91%"
  },
  BannerButton:{
    backgroundColor:"rgba(250,250,250,0.1)",
    borderRadius:5,
    padding:5,
    marginTop:15,
    width:110,
    height:35,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    },
    BannerDes:{
      position:"absolute",
      left:60,
      top:100,
    },
    BannerCaption:{
      fontSize:15,
      color:"#fff",
      width:130
    },
    BannerTitle:{
      fontSize:20,
      color:"#fff",
      width:130,
      marginBottom:10,
      fontWeight:"800"
    }
})
const MiniBanner = ({ApiId,title,description,ApiName}) => {
  const navigation=useNavigation()
  const SeeAll=useCallback(()=>{
    navigation.push("MiniBannerList")
  },[])
  // const HomeItem=Item.map((item,index)=>item)[ApiId][ApiName]
  const newList=Item2.filter((item)=>item.genere===ApiName)
  const newItem=newList.slice(0,3)
  return (
    <View style={styles.MiniBanner}>
     <Image
     source={{uri:"https://cdn.wallpapersafari.com/87/29/jRHnDb.jpg"}}
      style={{width:"100%",height:"100%"}}
     />
      <View style={styles.BannerDes}>
        <Text style={styles.BannerTitle}>{title}</Text>
        <Text style={styles.BannerCaption}>{description}</Text>
        <View style={styles.BannerButton}>
          <Text onPress={SeeAll} style={{color:"#fff"}}>See All</Text>
        </View>
      </View>
      <View style={{
        position:'absolute',
        right:30,
        top:30,
        display:"flex",
        flexDirection:"row",
      }}>
        {
          newItem.map((item,index)=>{
            return(
              <MiniBannerList key={index} item={item} index={index}/>
            )
          })
        }
      </View>
      </View>
  )
}

export default MiniBanner

