import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from './HomeBanner'

const HomeInfo = () => {
  return (
    <View style={styles.Home}>
      <ScrollView>
      <HomeBanner/>
     </ScrollView>
    </View>
  )
}

export default HomeInfo

const styles = StyleSheet.create({
   Home:{
    marginLeft:75,
    backgroundColor:"red",
    height:"100%"
   }
})