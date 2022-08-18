import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from '../../ItemList'


const SearchItem = ({search}) => {
 
  return (
    <View style={styles.SearchItem}>
     {
        Item?.filter((value)=>{
         
          if(search==="")
          {
            return null
          }
          else if(
            value.App_Best_Selling_Games.map((lis,i)=>lis.name.t).includes(search.toLowerCase())
            
            )
          {
            return value
          }
        }
        
        ).map((list,index)=>{ 
        
          return(
           
            <View key={index}>
              <Text>kk</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default SearchItem

const styles = StyleSheet.create({
  SearchItem:{
    width:450,
    height:550,
    backgroundColor:"#fff",
    borderRadius:5
  }
})