import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
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

  },
  Caption:{
    fontSize:20,
    marginLeft:10,
    marginTop:20,
    fontWeight:"700",
    marginBottom:10
  },
})
const DemoItem = ({title,apiName,size}) => {
  
  const HomeItem=Item.map((item,index)=>item)[0][apiName]
  const SliceItem=HomeItem.slice(0,4)
  // const [SliceItem,setSliceItem]=useState(HomeItem.slice(0,4))
  // useEffect(()=>{
  //    if(width>1200){
  //     setSliceItem(HomeItem.slice(0,6))
  //    }
  // },[width])
  return (
    <View> 
    <Text style={styles.Caption}>{title}</Text>
    <View style={styles.DemoItem}>
     
      {
         SliceItem.map((item,index)=>{
          return(
            <DemoItemDetails item={item} index={index} size={size} />
          )
         })
      }
    </View>
    </View>
  )
}

export default DemoItem

