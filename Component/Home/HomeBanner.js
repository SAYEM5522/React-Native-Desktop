import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeBanner = () => {
  return (
    <View style={styles.Banner}>
      <Text style={styles.BannerText}>Home</Text>
      <View style={styles.BannerDes}>
        <Text>Games & Movies with Pets</Text>
        <View>
          <Text>See details</Text>
        </View>
      </View>
      <Image
      source={"https://www.fivesquid.com/pics/t2/1637855541-187495-2-1.jpg"}
      style={styles.BannerImage}
      />
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({
   Banner:{
    height:500,
    backgroundColor:"gray",
    position:"relative"
   },
   BannerImage:{
     width:"100%",
     height:"100%",
   },
   BannerText:{
    color:"white",
    fontSize:25,
    fontWeight:"600",
    position:"absolute",
    left:30,
    top:30
   },
   BannerDes:{
      position:"absolute",
      left:60,
      top:100
   }
})