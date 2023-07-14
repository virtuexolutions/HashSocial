import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  const {height, width} = Dimensions.get('window');
  import {moderateScale} from 'react-native-size-matters';
  import CustomStatusBar from '../Components/CustomStatusBar';
  import Header from '../Components/Header';
  import {windowHeight, windowWidth} from '../Utillity/utils';
  import CustomText from '../Components/CustomText';
  import TextInputWithTitle from '../Components/TextInputWithTitle';
  import DropDownSingleSelect from '../Components/DropDownSingleSelect';
  import {Icon, ScrollView} from 'native-base';
  import Color from '../Assets/Utilities/Color';
  import CustomImage from '../Components/CustomImage';
  import ImagePickerModal from '../Components/ImagePickerModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RoundMenu from 'react-native-rotating-menu';
  
  const HomeScreen = (props) => {
    const data = props?.route?.params?.data ;
    console.log("🚀 ~ file: HomeScreen.js:32 ~ HomeScreen ~ data:", data)

    const [content, setContent] = useState([<Image
        source={require('../Assets/Images/gallery3.png')}
        resizeMode="cover"
        style={[style.icon,{
          borderColor : 'red',
          
        }]}
      />,
      <Image
        source={require('../Assets/Images/avatar.png')}
        resizeMode="cover"
        style={style.icon}
      />,
      <Image
        source={require('../Assets/Images/dummyman1.png')}
        resizeMode="cover"
        style={style.icon}
      />,
      <Image
        source={require('../Assets/Images/bubble1.png')}
        resizeMode="cover"
        style={style.icon}
      />,
      <Image
        source={require('../Assets/Images/fitness2.png')}
        resizeMode="cover"
        style={style.icon}
      />,
      <Image
        source={require('../Assets/Images/gallery7.png')}
        resizeMode="cover"
        style={style.icon}
      />,
     ])
     console.log("🚀 ~ file: HomeScreen.js:65 ~ HomeScreen ~ content:", content?.length)
     useEffect(() => {
      // console.log(Object.keys(data?.image).length>0)
        if(data && Object.keys(data?.image).length>0){

        setContent(prev=>[...prev, <Image
            source={{uri: data?.image?.uri}}
            resizeMode="cover"
            style={style.icon}
          />])
      }
     }, [])
     
 
   
  
    return (
      <>
        <CustomStatusBar
          backgroundColor={Color.white}
          barStyle={'dark-content'}
        />
        <Header right Title={'Profile'} search />
  
        <ImageBackground
          source={require('../Assets/Images/Main.png')}
          resizeMode={'cover'}
          style={{
            width: windowWidth,
            height: windowHeight * 0.9,
            // alignItems:'center',
            justifyContent:'center'
          }}>
            <GestureHandlerRootView >
        <View
          // animation="zoomIn"
          // easing="ease-out"
          // iterationCount="infinite"
          style={{
            width: 500,
            height: 500,
           
            // position: 'absolute',
            // zIndex: 1,
            // alignSelf: 'center',
            // top: '35%',
          }}>
          <RoundMenu
            centerContent={
              <Image
                source={require('../Assets/Images/dummyman1.png')}
                resizeMode="cover"
                style={style.centerImage}
              />
            }
            largeImageSize={width / 2.5}
            content={content}
            contentContainerStyle={{
              borderWidth : 2
            }}
          />
        </View>
      </GestureHandlerRootView>
          
        </ImageBackground>
    
      </>
    );
  };
  
  export default HomeScreen;
  const style = StyleSheet.create({
    icon: {
      width: '100%',
      height: '100%',
    },
    centerImage: {
      width: '100%',
      height: '100%',
    },
  });
  