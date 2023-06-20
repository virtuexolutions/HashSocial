import React from "react";
import * as Animatable from "react-native-animatable";
import Color from "../Assets/Utilities/Color";
import CustomImage from "../Components/CustomImage";
import { windowHeight, windowWidth } from "../Utillity/utils";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import ScreenBoiler from "../Components/ScreenBoiler";
import FastImage from 'react-native-fast-image';
import { ImageBackground } from "react-native";

const SplashScreen = () => {
  return (
    <ScreenBoiler
     
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={"dark-content"}
    >
      <ImageBackground 
      source={require('../Assets/Images/Main.png')}
      resizeMode={"cover"}
      style={{
        width : windowWidth ,
        height : windowHeight,
        justifyContent : 'center',
        alignItems : 'center'
      }}
      >

<FastImage
  source={require('../Assets/Images/splash.gif')}
  style={{ width: windowWidth * 0.8, height: windowHeight * 0.3 , }}
  resizeMode={FastImage.resizeMode.contain}
  animated
/>

        {/* <CustomImage
          source={require('../Assets/Images/splash.gif')}
          resizeMode={"stretch"}
          style={{width: 150, height: 150 }}
          /> */}
        
        {/* <Animatable.View
          animation="fadeInDown"
          duration={2500}
          useNativeDriver
          style={[styles?.textContainer]}
          
          
          >
        </Animatable.View> */}
            </ImageBackground>
   
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
    backgroundColor : Color.themeColor
  },
  bottomImage: {
 
  },
  // textContainer: {
  //   flexDirection: "row",
  //   alignSelf :'center',
  //   width : windowWidth * 0.4,
  //   height :windowWidth * 0.4,
  //   borderRadius : moderateScale(windowWidth* 0.7 / 2 , 0.3),
  //   justifyContent : 'center',
  //   alignItems : 'center',
  //   // backgroundColor : Color.white,
    

  // },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: "bold",
  },
 
});

export default SplashScreen;
