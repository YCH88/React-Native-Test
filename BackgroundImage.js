import React from 'react'; 
import { Text, View, TextInput, ImageBackground,  
    StyleSheet, Dimensions } from 'react-native'; 
  
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
  
const BackgroundImg = () => { 
  return ( 
    <View> 
      <ImageBackground 
        source={{ 
          uri:  
'image/bg.jpg', 
        }} 
        resizeMode="stretch"
        style={styles.img}> 
      </ImageBackground> 
    </View> 
  ); 
}; 
  
export default BackgroundImg; 
  
const styles = StyleSheet.create({ 
  img: { 
    height: screenHeight, 
    width: screenWidth, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});