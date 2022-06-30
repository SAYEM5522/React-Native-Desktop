import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'

const GamingInfo = () => {
  return (
    <View style={styles.Gaming}>
      <ScrollView>
      <HomeBanner TypeId={1}/>
     </ScrollView>
    </View>
  )
}

export default GamingInfo

const styles = StyleSheet.create({
  Gaming:{
    marginLeft:72,
    backgroundColor:'red',
    height:"100%",
  }
})