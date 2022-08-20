import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Description } from '../../../Description'
const styles = StyleSheet.create({
  ItemTop:{
    width:"98%",
    height:275,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ddd",
  },
  Image:{
    width:160,
    height:160,
    borderRadius:5,
    resizeMode:"cover",
    marginTop:30,
    marginLeft:50
  },
  name:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:30,
    marginLeft:20

  },
  company:{
    fontSize:15,
    marginTop:5,
    marginLeft:20,
    color:"#999",
  },
  Top:{
    flexDirection:"row",
    alignItems:"flex-start",
  },
  Rating:{
    fontSize:20,
    color:"#ffc107",
    marginTop:5,
    marginLeft:20,
  }
  ,
  AvgRating:{
    fontSize:15,
    color:"#999",
    marginTop:5,
    marginLeft:20,
  },
  RatingList:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:5,
  },
  AvgRatingText:{
    fontSize:15,
    color:"#999",
    marginLeft:15,

  },
  RatingText:{
    fontSize:15,
    color:"#999",
    marginLeft:20,
  },
  RatingListBorder:{
    borderRightWidth:1,
    borderColor:"#999",
    paddingRight:10,
    height:50,
    marginTop:10
  },
  Des:{
    height:50,
    width:"75%",
    marginLeft:20,
    marginTop:15
  },
  Button:{
    height:30,
    width:"18%",
    marginTop:15,
    marginLeft:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    borderWidth:1,
    borderColor:"lightgray",
    backgroundColor:"#fff",

  },
  download:{
    height:30,
    marginTop:30,
    marginLeft:20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    borderWidth:1,
    borderColor:"lightgray",
    backgroundColor:"blue",
    width:150,
    color:"#fff"
  },
  Top_Right:{
    marginLeft:-230
  },
  BannerImg:{
    width:"100%",
    height:600,
    resizeMode:"cover",
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  }
})
const ItemTop = ({id,type}) => {
  return (
    <>
    {
      (type==="Movie"?
      <View>
        <Image
        source={{uri:"https://wallpapercave.com/wp/wp7630844.jpg"}}
        style={styles.BannerImg}
        />
      </View>
      :null)

      }
    
    <View style={{
      width:type=="Movie"?"80%":"98%",
      height:275,
      backgroundColor:"rgba(250, 250, 250,0.7)",
      borderRadius:10,
      borderWidth:1,
      borderColor:"#ddd",
      alignSelf:"center",
      marginTop:type=="Movie"?-200:0,
    }}>
     {
        Description.map((item,index)=>{
          if(id===item.id){
            return(
              <View key={index} style={styles.Top}>
               <View style={styles.Top_Left}>
                <Image
                source={{uri:item.Img}}
                style={{
                  width: type==="Movie"?200:160,
                  height:type==="Movie"?250:160,
                  borderRadius:5,
                  resizeMode:"cover",
                  marginTop:type==="Movie"?10:50,
                  marginLeft:type==="Movie"?10:50
                }}

                />
                </View>
                <View style={styles.Top_middle}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.company}>{item.company}</Text>
                  <View style={styles.RatingList}>
                    <View style={styles.RatingListBorder}>
                    <Text style={styles.AvgRating}>{item.AvgRating}</Text>
                     <Text style={styles.AvgRatingText}>Average</Text>
                    </View>
                    <View style={styles.RatingListBorder}>
                    <Text style={styles.Rating}>{`${item.Rating>=1000?item.Rating/1000:item.Rating}${item.Rating>=1000?'k':''}`}</Text>
                    <Text style={styles.RatingText}>Ratings</Text>
                    </View>
                  </View>
                  <View style={styles.Des}>
                    <Text>{item.description}</Text>
                  </View>
                  <View style={styles.Button}>
                    <Text>{item.type}</Text>
                  </View>
                </View>
                <View style={styles.Top_Right}>
                <View style={styles.download}>
                    <Text style={{color:"#fff"}}>{item.list}</Text>
                  </View>
                </View>
                

                </View>
            )
          }
        })
     }
    </View>
    </>
  )
}

export default ItemTop

