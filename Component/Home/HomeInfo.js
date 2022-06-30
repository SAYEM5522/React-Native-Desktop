import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from './HomeBanner'
import TopFreeApps from './TopFreeApps'

const HomeInfo = () => {
  return (
    <View style={styles.Home}>
      <ScrollView>
      <HomeBanner TypeId={0}/>
      <TopFreeApps/>
     </ScrollView>
    </View>
  )
}

export default HomeInfo

const styles = StyleSheet.create({
   Home:{
    marginLeft:72,
    height:"100%",
    backgroundColor:"whitesmoke"
   }
})