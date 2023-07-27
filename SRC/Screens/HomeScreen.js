import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RoundMenu from 'react-native-rotating-menu';
import navigationService from '../navigationService';
import {useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import CustomButton from '../Components/CustomButton';
import {ActivityIndicator} from 'react-native';

const HomeScreen = props => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const data = props?.route?.params?.data;
  const [clicked, setclicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log('🚀 ~ file: HomeScreen.js:32 ~ HomeScreen ~ data:', data);

  const [content, setContent] = useState([
    {
      image: (
        <Image
          source={require('../Assets/Images/gallery3.png')}
          resizeMode="cover"
          style={[
            style.icon,
            {
              borderColor: 'red',
            },
          ]}
        />
      ),
      onPress: () => {
        setclicked(true);

        // navigationService.navigate('Bubble');
      },
    },
    {
      image: (
        <Image
          source={require('../Assets/Images/avatar.png')}
          resizeMode="cover"
          style={style.icon}
        />
      ),
      onPress: () => {
        setclicked(true);

        // navigationService.navigate('Bubble');
      },
    },
    {
      image: (
        <Image
          source={require('../Assets/Images/dummyman1.png')}
          resizeMode="cover"
          style={style.icon}
        />
      ),
      onPress: () => {
        setclicked(true);

        // navigationService.navigate('Bubble');
      },
    },
    {
      image: (
        <Image
          source={require('../Assets/Images/bubble1.png')}
          resizeMode="cover"
          style={style.icon}
        />
      ),
      onPress: () => {
        setclicked(true);

        // navigationService.navigate('Bubble');
      },
    },
    {
      image: (
        <Image
          source={require('../Assets/Images/fitness2.png')}
          resizeMode="cover"
          style={style.icon}
        />
      ),
      onPress: () => {
        setclicked(true);

        // navigationService.navigate('Bubble');
      },
    },
    {
      image: (
        <Image
          source={require('../Assets/Images/gallery7.png')}
          resizeMode="cover"
          style={style.icon}
        />
      ),
      onPress: () => {
        setclicked(true);
        // navigationService.navigate('Bubble');
      },
    },
  ]);
  console.log(
    '🚀 ~ file: HomeScreen.js:65 ~ HomeScreen ~ content:',
    content?.length,
  );
  useEffect(() => {
    // console.log(Object.keys(data?.image).length>0)
    if (data && Object.keys(data?.image).length > 0) {
      setContent(prev => [
        ...prev,
        {
          image: (
            <Image
              source={{uri: data?.image?.uri}}
              resizeMode="cover"
              style={style.icon}
            />
          ),
          onPress: () => {
            navigationService.navigate('Bubble');
          },
        },
      ]);
    }
  }, []);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Profile'} search />

      <ImageBackground
       source={
        privacy == 'private'
          ? require('../Assets/Images/theme2.jpg')
          : require('../Assets/Images/Main.png')
      }
        resizeMode={'cover'}
        // blurRadius={clicked ? 8 : 0 }
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          // alignItems:'center',
          justifyContent: 'center',
        }}>
        <GestureHandlerRootView>
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
                borderWidth: 2,
              }}
            />
          </View>
        </GestureHandlerRootView>
      </ImageBackground>
      {clicked && (
        <BlurView
          // intensity={100}
          style={{
            position: 'absolute',
            height: windowHeight * 0.8,
            width: windowWidth,
            justifyContent: 'center',
            alignItems: 'center',

            bottom: 0,
          }}
          blurRadius={5}
          blurType={'light'}>
          <View
            style={{
              height: windowHeight * 0.8,
              width: windowWidth,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomButton
              text={
                isLoading ? (
                  <ActivityIndicator color={'#01E8E3'} size={'small'} />
                ) : (
                  'Bubble Info'
                )
              }
              textColor={themeColor[1]}
              width={windowWidth * 0.7}
              height={windowHeight * 0.06}
              // marginTop={moderateScale(40, 0.3)}
              onPress={() => {
                // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
                setclicked(false);
                navigationService.navigate('BubbleDetail');
              }}
              bgColor={['#FFFFFF', '#FFFFFF']}
              borderRadius={moderateScale(30, 0.3)}
              isGradient
            />
            <CustomButton
              text={
                isLoading ? (
                  <ActivityIndicator color={'#01E8E3'} size={'small'} />
                ) : (
                  'Feed'
                )
              }
              textColor={themeColor[1]}
              width={windowWidth * 0.7}
              height={windowHeight * 0.06}
              marginTop={moderateScale(20, 0.3)}
              onPress={() => {
                // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
                setclicked(false);
                navigationService.navigate('Bubble');
              }}
              bgColor={['#FFFFFF', '#FFFFFF']}
              borderRadius={moderateScale(30, 0.3)}
              isGradient
            />
          </View>
        </BlurView>
      )}
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
