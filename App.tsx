import { StyleSheet, Text, View,TouchableOpacity,Animated } from 'react-native'
// import Animated, {withTiming,useSharedValue,useAnimatedStyle} from 'react-native-reanimated'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [boxColor, setBoxColor] = useState<any>('#2C6E24');

  const handleChangeColor = () =>{
    const randomColor=getRandomColor()
    setBoxColor(randomColor) 
  } 

  const getRandomColor=()=>{
    const colors:any = ['yellow','red','green','blue','pink','orange','tomato','black','gray','brown','#ccc','#7f6','#088']
    const randomIndex=Math.floor(Math.random()*colors.length)
    return colors[randomIndex]   
  }
  const position = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const moveBox = () => {
      Animated.sequence([
        Animated.timing(position, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => moveBox()); 
    };
    moveBox();

    return () => {
      position.stopAnimation(); 
    };
  }, [position]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <TouchableOpacity onPress={handleChangeColor}>
     <Animated.View
        style={{
          width: 250,
          height: 300,
          backgroundColor: boxColor,
          borderRadius:15,
          transform: [{ translateY: position }],
        }}

      >
      <Text style={styles.txt}>SlideDown Animation</Text>

      </Animated.View>
     </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
   
  },
  txt:{
   flexDirection:'row',
   top:135,
   left:55,
   color:"#fff"
    
  },
})