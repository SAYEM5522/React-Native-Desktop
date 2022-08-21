import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'
import Header from '../Home/Header'
import TopFreeApps from '../Home/TopFreeApps'
import DemoItem from '../Home/DemoItem'
import MiniBanner from '../Home/MiniBanner'

const Movies = () => {
  return (
    <View style={styles.Movies}>
     <ScrollView>
      <Header/>
      <HomeBanner TypeId={3}/>
      <View style={styles.Home_Info}>
     <TopFreeApps/>
     <DemoItem title={"Music streaming apps"} apiName={"Home_Music_Streaming_Apps"} size={true}/>
     <MiniBanner ApiId={1} title={"Essential Apps"} description={"Take your windows experience new level "} ApiName={"App_Essential_Apps"} />

     </View>
     </ScrollView>
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  Movies:{
    marginLeft:72,
    backgroundColor:"whitesmoke",
    height:"100%",
  },
  Home_Info:{
    marginLeft:35,
    // marginRight:35,
  }
})