import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item2 } from '../../ItemList2'
import { useNavigation } from '@react-navigation/native'


const SearchItem = ({search}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.SearchItem}>
      <ScrollView >
    {
      Item2.filter((value)=>{
       if(search===""){
        return value
       }
       else if(
        value.name.toLowerCase().includes(search.toLowerCase()) ||
        value.type.toLowerCase().includes(search.toLowerCase())
       ){
         return value
       }
      }).map((item,index)=>{
        return(
          <Pressable key={index} onPress={()=>{navigation.navigate("ItemDetails",{id:item.id,type:item.type})}}>
          <View style={styles.ItemList} key={index} >
           <View>
           <Image
           source={{uri:item.Image}}
            style={styles.Image}
           />
           </View>
            <View style={styles.ItemDetails}>
              <Text style={styles.Name}>{item.name}</Text>
              <Text style={styles.Type}>{item.type}</Text>
            </View>
          </View>
          </Pressable>
        )
      })
    }
    </ScrollView>
    </View>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  SearchItem:{
    width:450,
    height:550,
    backgroundColor:"#fff",
    borderRadius:2
  },
  Image:{
    width:45,
    height:45,
    borderRadius:5,
    resizeMode:"contain"

  },
  ItemList:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
  },
  ItemDetails:{
    flexDirection:"column",
    marginLeft:13,

  },
  Name:{
    fontSize:15,
  },
  Type:{
    marginTop:4,
    fontSize:13,
    color:"#999"
  }
})