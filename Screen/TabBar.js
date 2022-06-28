import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'


const TabBar = ({state,descriptors,navigation}) => {

  return (
    <View style={styles.TabDesign} >
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({ name: route.name, merge: true });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <Pressable
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{ flex: 1 }}

        >
        <View style={{
          backgroundColor: isFocused ? '#fff' : 'transparent',
          width:70,
          height:70,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:5,
          marginTop:8,
        }} >
         <View
         style={{
            backgroundColor: isFocused ? 'black' : 'transparent',
            height:24,
            width:4,
            position:"absolute",
            left:0,
            borderRadius:2
         }}
         />
          <View style={styles.IconShift}> 
           {
               options.tabBarIcon({color:isFocused?'blue':'#222',size:24})
             }
             </View>
            <Text style={{ color: isFocused ? 'transparent' : 'black',
            fontSize:11,
          
          }}>
            {label}
          </Text>
        </View>

        </Pressable>
      );
    })}
  </View>
  )
}

export default TabBar

const styles = StyleSheet.create({

  TabDesign:{
    flexDirection: 'column',
    position:"absolute",
    height:"50%",
    width:75,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  IconShift:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:1,
    marginTop:11
  },
  TabShift:{
    display:"flex",
  }
})