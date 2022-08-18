import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from './HomeBanner'
import TopFreeApps from './TopFreeApps'
import MiniBanner from './MiniBanner'
import DemoItem from './DemoItem'
import Header from './Header'

const HomeInfo = () => {
  return (
    <View style={[styles.Home]}>
      <ScrollView>
      <Header/>

      <HomeBanner TypeId={0}/>
      <View style={styles.Home_Info}>
      <TopFreeApps/>
      <MiniBanner ApiId={1} title={"Essential Apps"} description={"Take your windows experience new level "} ApiName={"Essential_Apps"} />
      <DemoItem title={"Music streaming apps"} apiName={"Music_Streaming_Apps"} size={true}/>
      <DemoItem title={"Best selling games"} apiName={"Best_Selling_Games"}/>
      <MiniBanner ApiId={2} title={"Featured free games"} description={"Explore free fun to play games and finf new favorite"} ApiName={"Featured_Free_Games"}/>
      <DemoItem title={"Best selling games"} apiName={"Best_Selling_Games"}/>
      <MiniBanner ApiId={2} title={"Featured free games"} description={"Explore free fun to play games and finf new favorite"} ApiName={"Featured_Free_Games"}/>
      </View>
     </ScrollView>
    </View>
  )
}

export default HomeInfo

const styles = StyleSheet.create({
   Home:{
    marginLeft:72,
    height:"100%",
    backgroundColor:"whitesmoke",
    width:"100%"
   },
   Home_Info:{
    marginLeft:35,
    marginRight:30,
   }
})