import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'

const Apps = () => {
  return (
    <View style={styles.Apps} >
     <ScrollView>
   <HomeBanner/>
     </ScrollView>
    </View>
  )
}

export default Apps

const styles = StyleSheet.create({
  Apps:{
    marginLeft:75,
    backgroundColor:'red',
    height:"100%",
  }
})