import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'
import TopFreeApps from '../Home/TopFreeApps'
import DemoItem from "../Home/DemoItem"
import MiniBanner from "../Home/MiniBanner"
const Apps = () => {
  return (
    <View style={styles.Apps} >
     <ScrollView >
     <HomeBanner TypeId={1}/>

     <View style={styles.Home_Info}>
     <TopFreeApps/>
     <DemoItem title={"Music streaming apps"} apiName={"Music_Streaming_Apps"} size={true}/>
     <MiniBanner ApiId={1} title={"Essential Apps"} description={"Take your windows experience new level "} ApiName={"Essential_Apps"} />

     </View>
     </ScrollView>
    </View>
  )
}

export default Apps

const styles = StyleSheet.create({
  Apps:{
    marginLeft:72,
    backgroundColor:'whitesmoke',
    height:"100%",
  },
  BannerScroll:{
    position:"absolute",
    top:300,
    left:15,

  },
  Home_Info:{
    marginLeft:35,
    marginRight:30,
   }
})