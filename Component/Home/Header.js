import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'

const Header = () => {
  const [text,SetText]=useState("")
  const [open,setOpen]=useState(false)
  const TextChange=useCallback((text)=>{
       SetText(text)
  },[])
  return (
    <View style={styles.Header}>
      <View style={styles.Left_Header}>
       <Text style={styles.Left_Header_Text}>Microsoft Store</Text>
      </View>
      <View style={styles.Middle_Header}>
      <TextInput
        style={styles.Search}
        placeholder="Search apps, games, movies and more"
        onChangeText={TextChange}
        
        
      />
    </View>
    <View style={styles.Right_Header}>
    <Text>Microsoft Store</Text>
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
  Left_Header_Text:{
    fontSize:12,
    position:"absolute",
    left:-80,
    top:-6
  }
})