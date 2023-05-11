import { StyleSheet, Text, View,TouchableOpacity,Animated } from 'react-native'
// import Animated, {withTiming,useSharedValue,useAnimatedStyle} from 'react-native-reanimated'
import React, { useEffect, useRef } from 'react'

const App = () => {

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
      ]).start(() => moveBox()); // Tekrarlanacak şekilde hareketi başlatır
    };
    moveBox();

    return () => {
      position.stopAnimation(); // Komponent kaldırıldığında animasyonu durdurur
    };
  }, [position]);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 250,
          height: 300,
          backgroundColor: '#2C6E24',
          borderRadius:15,
          transform: [{ translateY: position }],
        }}

      >
      <Text style={styles.txt}>SlideDown Animation</Text>

      </Animated.View>
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