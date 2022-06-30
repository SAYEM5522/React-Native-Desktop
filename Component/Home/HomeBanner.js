import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Data } from '../../Data'
const HomeBanner = ({TypeId}) => {
  const HomeItem=Data.map((item,index)=>item)[TypeId].BannerList
  const [Banner,setBanner]=React.useState({
    url:"https://img1.hulu.com/user/v3/artwork/87e9a533-38b1-4e1a-a8c6-50a0b96e1a64?base_image_bucket_name=image_manager&base_image=b8b1e5a7-872f-4c56-bdc6-8295c837c0c8&size=600x338&format=jpeg",
    index:0,
    caption:"Games & Movies with Pets"
  })

  return (
    <View style={styles.Banner}>
      <Text style={styles.BannerText}>{Data.map((item,index)=>item)[TypeId].Type}</Text>
      <View style={styles.BannerDes}>
        <Text style={styles.BannerCaption}>{Banner.caption}</Text>
        <View style={styles.BannerButton}>
          <Text style={{color:"#fff"}}>See details</Text>
        </View>
      </View>
      <Image
      source={{uri:Banner.url}}
      style={styles.BannerImage}
      />
     <ScrollView
     style={styles.BannerScroll}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     activeOffsetX={[-30, 30]}
     activeOffsetY={[-30, 30]}
     >
      {HomeItem.map((item,index)=>{
        const SaveImage=()=>{
          setBanner({
            url:item.Image,
            index:index,
            caption:item.Caption
          })
        }
        return(
          <View style={{
            marginLeft:10,
            borderWidth:index===Banner.index?4:0,
            borderColor:"rgba(0, 0, 128,0.7)",
            borderRadius:12,
          }} key={index}>
            <Pressable onPress={SaveImage}>
            <Image
            source={{uri:item.Image}}
            style={styles.BannerItemImage}
            />
            </Pressable>
          </View>
        )
      })}
     </ScrollView>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({
   Banner:{
    height:500,
    backgroundColor:"gray",
    position:"relative",
   },
   BannerImage:{
     width:"100%",
     height:"100%",
     resizeMode:"contain",
   },
   BannerText:{
    color:"white",
    fontSize:25,
    fontWeight:"600",
    position:"absolute",
    left:30,
    top:30,
    zIndex:1,
   },
   BannerDes:{
      position:"absolute",
      left:60,
      top:150,
      zIndex:1,
   },
   BannerCaption:{
    color:"white",
    fontSize:20,
    fontWeight:"600",

   },
    BannerButton:{
    backgroundColor:"rgba(0,0,0,0.1)",
    borderRadius:5,
    padding:5,
    marginTop:5,
    width:110,
    height:35,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    },
    BannerItemImage:{
      width:210,
      height:120,
      resizeMode:"cover",
      borderRadius:12,
    },
    BannerItem:{
      marginLeft:10,
      zIndex:1000,
    },
    BannerScroll:{
      position:"absolute",
      top:320,
      left:15,

    }
})