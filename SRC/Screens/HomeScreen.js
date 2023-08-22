import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Animated,
  Button,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = props => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const data = props?.route?.params?.data;
  const [clicked, setclicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedIcon, setHighlightedIcon] = useState(null);
  console.log(
    '🚀 ~ file: HomeScreen.js:40 ~ HomeScreen ~ highlightedIcon:',
    highlightedIcon,
  );
  const [animationStopped, setAnimationStopped] = useState(false);

  const backRef = useRef(null);
  const [rotationAngle, setRotationAngle] = useState(0)

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
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      image: require('../Assets/Images/dummyman4.png'),
    },
    {
      id: 2,
      image: require('../Assets/Images/dummyman1.png'),
    },
    {
      id: 3,
      image: require('../Assets/Images/dummyProfile.png'),
    },
    {
      id: 4,
      image: require('../Assets/Images/dummyUser1.png'),
    },
  ]);


  
  const animateSideContainer = () => {
    backRef.current?.animate('fadeInLeft', 2000);
  };

  useEffect(() => {
    if (animationStopped) {
      animateSideContainer();
    }
  }, [animationStopped]);

  useEffect(() => {
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
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          overflow: 'hidden',
          justifyContent: 'center',
        }}>
        {highlightedIcon && (
          <View
            style={{
              width: windowWidth,
              height: windowHeight,
              position: 'absolute',
              zIndex: 0,
              top: -40,
            }}>
            {highlightedIcon}
          </View>
        )}

        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.9,
            positon: 'absolute',
            overflow: 'hidden',
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,.6)',
          }}>
          <Animatable.View
            ref={backRef}
            style={{
              width: windowWidth,
              height: windowHeight * 0.9,
              position: 'absolute',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: windowWidth * 0.1,
                height: windowHeight * 0.8,
                backgroundColor: Color.themeColor1,
                alignItems: 'center',
                zIndex: 1,
                left: 0,
                position: 'absolute',
                justifyContent: 'center',
              }}>
              {profiles.map(item => {
                return (
                  <View
                    style={{
                      width: windowWidth * 0.08,
                      height: windowWidth * 0.08,
                      backgroundColor: 'white',
                      overflow: 'hidden',
                      // borderColor: '#33dd50',
                      // borderWidth: 2,
                      borderRadius: (windowWidth * 0.08) / 2,
                      marginTop: moderateScale(12, 0.3),
                      marginLeft: moderateScale(5, 0.3),
                      marginRight: moderateScale(8, 0.3),
                    }}>
                    <CustomImage
                      source={item?.image}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </View>
                );
              })}
            </View>
            <Image
              source={require('../Assets/Images/animatedImage.png')}
              resizeMode={'cover'}
              style={{
                width: '90%',
                height: '100%',
                position: 'absolute',
                zIndex: 0,
                top: -40,
                // left:35,
                right: 5,
              }}></Image>
          </Animatable.View>
          <GestureHandlerRootView>
            <View
              style={{
                width: windowWidth * 0.9,
                height: windowHeight * 0.75,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: moderateScale(20, 0.3),
                zIndex: 2,
              }}>
              <RoundMenu
                centerContent={
                  <ImageBackground
                    source={require('../Assets/Images/dummyman1.png')}
                    resizeMode="cover"
                    style={style.centerImage}
                  />
                }
                largeImageSize={width / 2.5}
                content={content}
                contentContainerStyle={{
                  borderWidth: 3,
                }}
                setHighlightedIcon={setHighlightedIcon}
                setAnimationStopped={setAnimationStopped}
                rotationAngle={rotationAngle}
              />
            </View>
           
          </GestureHandlerRootView>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              // top:10,
              bottom: 150,
              // backgroundColor: 'white',
              // zIndex: 1,
            }}
            onPress={() => {
              console.log('rotate=======>>>');
              setRotationAngle(prev => prev + 180);
            }}>
            <CustomButton
              iconName={'rotate-360'}
              iconType={MaterialCommunityIcons}
              // bgColor={themeColor[1]}
              // borderColor={'white'}
              // borderWidth={1}
              iconStyle={{
                color: 'white',
                // backgroundColor:'purple',

                marginRight: moderateScale(5, 0.3),
                width: windowWidth * 0.06,
                height: windowHeight * 0.015,
                fontSize: moderateScale(20, 0.6),
              }}
              textColor={Color.white}
              // bgColor={'black'}
              onPress={() => {
                console.log('rotate=======>>>');
                setRotationAngle(prev => prev + 180);
              }}
              width={windowWidth * 0.3}
              height={windowHeight * 0.09}
              text={'change Side'}
              fontSize={moderateScale(12, 0.3)}
              borderRadius={moderateScale(30, 0.3)}
              // textTransform={'capitalize'}
              // isGradient={true}
              // marginTop={moderateScale(12, 0.3)}
            />
          </TouchableOpacity>
        </View>

      </ImageBackground>
      {clicked && (
        <BlurView
          // intensity={100}
          style={{
            position: 'absolute',
            height: windowHeight * 0.87,
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
