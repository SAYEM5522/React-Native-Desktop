import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from '../../ItemList'
import DemoItemDetails from './DemoItemDetails'
const { width,height } = Dimensions.get('window')
const styles = StyleSheet.create({
  DemoItem:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    flexWrap:"wrap",
    marginLeft:12

  }
})
const DemoItem = ({title,apiName}) => {
  
  const HomeItem=Item.map((item,index)=>item)[0][apiName]
  
  return (
    <View> 
    <Text>{title}</Text>
    <View style={styles.DemoItem}>
     
      {
         HomeItem.map((item,index)=>{
          return(
            <DemoItemDetails item={item} index={index} />
          )
         })
      }
    </View>
    </View>
  )
}

export default DemoItem

