import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import SearchItem from './SearchItem'

const Header = () => {
  const [text,SetText]=useState("")
  const [open,setOpen]=useState(false)
  const TextChange=useCallback((text)=>{
       SetText(text)
  },[])
  const PressOpen=useCallback(()=>{
   setOpen(!open)
  },[open])
  return (
    <View style={styles.Header}>
   
      <View style={styles.Left_Header}>
      <Image
                  source={require('../../image/m-8.png')}
                  style={styles.Icon}
                  
                 />
       <Text style={styles.Left_Header_Text}>Microsoft Store</Text>
      </View>
      <View style={styles.Middle_Header}>
        <View style={{position:"relative"}}>
      <TextInput
        style={styles.Search}
        placeholder="Search apps, games, movies and more"
        onChangeText={TextChange}
        onPressIn={PressOpen}
        
      />
       <Image
                  source={require('../../image/w7.png')}
                  style={styles.SearchIcon}
                  
                 />
        <View style={{
      position:"absolute",
      top:32,
      alignSelf:"center",
     }}>
      {
        open?
       
        <SearchItem search={text}/>
        :
        null
      }
      

     </View>
      </View>
    </View>
    <View style={styles.Right_Header}>
    <Text>MS</Text>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Header:{
    height:35,
    backgroundColor:"transparent",
    zIndex:1000,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    position:"relative"
  },
  Search:{
    height:31,
    width:450,
    borderRadius:3,
    borderWidth:0,
    borderColor:"#ccc",
    backgroundColor:"#fff",
    fontSize:14,
    fontWeight:"500"
  },
  Middle_Header:{
    marginTop:-1.5
  },
  Left_Header:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",

  },
  Left_Header_Text:{
    fontSize:12,
    position:"absolute",
    left:-60,
    top:-6
  },
  SearchIcon:{
    position:"absolute",
    right:25,
    top:5,
    height:22,
    width:22
  },
  Icon:{
    height:17,
    width:17,
    position:"absolute",
    left:-100,
  },
  Right_Header:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:30,
    height:30,
    borderRadius:50,
    backgroundColor:"#fff",
    marginRight:90,
  }
})