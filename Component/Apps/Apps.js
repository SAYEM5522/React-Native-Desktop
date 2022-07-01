import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'
import TopFreeApps from '../Home/TopFreeApps'

const Apps = () => {
  return (
    <View style={styles.Apps} >
     <ScrollView >
     <HomeBanner TypeId={2}/>
     <TopFreeApps/>
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

  }
})