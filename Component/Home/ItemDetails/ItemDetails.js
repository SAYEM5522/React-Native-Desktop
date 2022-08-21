import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import ItemTop from './ItemTop'
import ItemScreenShoots from './ItemScreenShoots'
import Header from '../Header'
import { Item2 } from '../../../ItemList2'
import DemoItem from '../DemoItem'
import PeopleView from './PeopleView'
const ItemDetails = ({route}) => {
  const {id,type}=route.params
  const navigation=useNavigation()
  const GoBack=useCallback(()=>{
    navigation.goBack()
  },[])
  const PeopleViewList=Item2.filter((item)=>item.type===type?item:null)
  
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Header/>
     <ItemTop id={id} type={type}/>
     <ItemScreenShoots id={id} type={type}/>
     <View>
      <Text style={{
        fontSize:20,
        marginLeft:type==="Movie"?"10%":"2%",
        marginTop:20,
        fontWeight:"700",
        marginBottom:10
      }}>People also View</Text>
      <View style={{
         display:"flex",
         flexDirection:"row",
         alignItems:"center",
         flexWrap:"wrap",
         width:type==="Movie"?"80%":"98%",
         alignSelf:"center",
      }}>
    {
      PeopleViewList.map((item,index)=>{
        return(
          <PeopleView key={index} item={item} index={index}/>
        )
      })
    }
    </View>
     </View>
     </ScrollView>
    </View>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
  Container:{
    flex:1,
    display:"flex",
    marginLeft:76,
    // backgroundColor:"red"


  },
  Arrow:{
    height:20,
    width:20
   },
   Caption:{
    fontSize:20,
    marginLeft:"2%",
    marginTop:20,
    fontWeight:"700",
    marginBottom:10
  },
  List:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    flexWrap:"wrap",
  }
})