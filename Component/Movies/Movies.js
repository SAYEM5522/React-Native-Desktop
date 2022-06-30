import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBanner from '../Home/HomeBanner'

const Movies = () => {
  return (
    <View style={styles.Movies}>
     <ScrollView>
      <HomeBanner TypeId={3}/>
     </ScrollView>
    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  Movies:{
    marginLeft:72,
    backgroundColor:'lightgray',
    height:"100%",
  }
})