import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Description } from '../../../Description'
import { useState } from 'react'
const styles = StyleSheet.create({
  ItemScreenShoots:{
    width:"98%",
    height:460,
    marginTop:15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ddd"
  },
  ScreenShoots_Image:{
    height:380,
    width:580,
    resizeMode:"cover",
    borderRadius:10,
    marginRight:5
  },
  ScreenShoots_Cap:{
    height:45,
    borderColor:"lightgray",
    width:"100%",
    borderBottomWidth:1,
    marginBottom:5,
    padding:10,
    fontSize:15,
    color:"black",
    marginLeft:5,
    fontWeight:"500"
  },
  ScreenShoots_Image_List:{
    marginLeft:20
  },
  DescriptionView:{
    width:"98%",
    height:340,
    marginTop:15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ddd"
  },
  DesText:{
    fontSize:15,
    color:"black",
    padding:15
  }
})
const ItemScreenShoots = ({id,type}) => {
  return (
    <>
    <View style={{
       width:type==="Movie"? "80%": "98%",
       height:460,
       marginTop:15,
       backgroundColor:"#fff",
       borderRadius:10,
       borderWidth:1,
       borderColor:"#ddd",
       alignSelf:"center"
    }}>
      <View>
        <Text style={styles.ScreenShoots_Cap}>ScreenShoots</Text>
      </View>
     {
        Description.map((item,index)=>{
          if(id===item.id){
            return(
              <View key={index} style={styles.ScreenShoots}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
             {
                item.ScreenShoot.map((item,index)=>{
                  return(
                    <View key={index} style={styles.ScreenShoots_Image_List}>
                      <Image
                      source={{uri:item}}
                      style={styles.ScreenShoots_Image}
                      />
                    </View>
                  )
                })
             }
              </ScrollView>
               </View>
            )
          } 
        })
     }
    </View>
    <View>
   
      {
        Description.map((item,index)=>{
          if(id===item.id){
            return(
              <View key={index} style={{
                width:type==="Movie"?"80%":"98%",
                height:340,
                marginTop:15,
                backgroundColor:"#fff",
                borderRadius:10,
                borderWidth:1,
                borderColor:"#ddd",
                alignSelf:"center"
              }}>
                 <View>
             <Text style={styles.ScreenShoots_Cap}>Description</Text>
             </View>
                <Text style={styles.DesText}>{item.description}</Text>
              </View>
            )
          }
        })
      }
    </View>
    

    </>
  )
}

export default ItemScreenShoots

