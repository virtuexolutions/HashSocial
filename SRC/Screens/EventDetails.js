import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CustomStatusBar from '../Components/CustomStatusBar';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {Center, Divider, Icon} from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import navigationService from '../navigationService';
import {useNavigation} from '@react-navigation/native';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import ShowMoreAndShowLessText from '../Components/ShowMoreAndShowLessText';
import {useSelector} from 'react-redux';
const EventDetails = props => {
  const item = props?.route?.params?.item;
  console.log('🚀 ~ file: EventDetails.js:22 ~ EventDetails ~ item:', item);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header Title={'Event'} showBack />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={{backgroundColor: 'white'}}
        >
          <View style={{width: windowWidth, height: windowHeight * 0.3}}>
            <CustomImage
              source={require('../Assets/Images/event.jpg')}
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode={'cover'}
            />
            <View
              style={{
                width: windowWidth * 0.16,
                height: windowHeight * 0.09,
                // backgroundColor:'white',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Color.themeColor,
                position: 'absolute',
                top: 0,
                right: 0,
                borderRadius: moderateScale(2, 0.3),
              }}>
              <CustomText
                style={{color: Color.white, fontSize: moderateScale(15, 0.6)}}>
                12
              </CustomText>
              <CustomText style={{color: Color.white}}>9.2018</CustomText>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: windowWidth * 0.1,
                  height: windowWidth * 0.1,
                  borderRadius: (windowWidth * 0.1) / 2,
                  backgroundColor: Color.white,
                  position: 'absolute',
                  bottom: -20,
                  zIndex: 1,
                  right: 20,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // overflow: 'hidden',
                }}>
                <Icon
                  name={'pin'}
                  as={SimpleLineIcons}
                  color={themeColor[1]}
                  size={21}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: windowWidth * 0.1,
              height: windowWidth * 0.1,
              borderRadius: (windowWidth * 0.1) / 2,
              backgroundColor: Color.themeColor,
              position: 'absolute',
              bottom: -20,
              right: 10,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <Icon
              name={'location-arrow'}
              as={FontAwesome}
              color={'white'}
              size={21}
            />
          </TouchableOpacity> */}
            </View>
          </View>

          {/* <View
        style={{
          flexDirection: 'row',
          width: windowWidth * 0.25,
          paddingVertical: moderateScale(10, 0.6),
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon
            name={'share'}
            as={MaterialCommunityIcons}
            color={'red.400'}
            size={25}
          />
        </TouchableOpacity>
        <CustomText style={{color: Color.black}}>share</CustomText>
      </View> */}

          <CustomText
            isBold
            numberOfLines={1}
            style={{
              color: 'black[',
              // backgroundColor:'red',
              width: windowWidth * 0.65,
              textAlign: 'left',
              fontSize: moderateScale(20, 0.6),
              paddingHorizontal: moderateScale(15, 0.6),
              // backgroundColor:'white',
              paddingVertical: moderateScale(10, 0.6),
            }}>
            {item?.Name}
          </CustomText>

          {/* <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: windowWidth * 0.9,
            alignSelf:'center',
            // marginTop:moderateScale(20,0.3)
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon
            name={'location-outline'}
            as={Ionicons}
            color={Color.black}
            size={22}
          />
        </TouchableOpacity>

        <CustomText
         numberOfLines={2}
          style={{
            color: Color.black,
            textAlign: 'left',
            fontSize: moderateScale(13, 0.6),
            width: windowWidth * 0.42,
            paddingLeft:moderateScale(10,0.6),
          }}>
          Outdoor Concert Arena Ustrzyki Gorne
        </CustomText>
      </View>

      <Divider
        my="3"
        _light={{
          color: Color.veryLightGray,
          width: windowWidth * 0.85,
          alignSelf: 'center',
        }}
      /> */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical:moderateScale(5,.6),
              width: windowWidth,
              paddingHorizontal: moderateScale(20, 0.6),
              alignSelf: 'center',
            }}>
            <Icon name={'calendar'} as={AntDesign} color={'white'} size={22} />

            <CustomText
              numberOfLines={1}
              style={{
                color: Color.black,
                // backgroundColor:'red',
                fontSize: moderateScale(13, 0.6),
                width: windowWidth * 0.8,
                paddingLeft: moderateScale(10, 0.6),
              }}>
              {item?.date}
            </CustomText>
          </View>

          <Divider
            my="3"
            _light={{
              color: Color.white,
              width: windowWidth * 0.9,
              alignSelf: 'center',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor:'red',
              width: windowWidth ,
              paddingHorizontal:moderateScale(20,.6),
              paddingVertical:moderateScale(5,.6),
              alignSelf: 'center',
            }}>
            <Icon name={'clock'} as={Feather} color={'white'} size={22} />

            <CustomText
              numberOfLines={1}
              style={{
                color: Color.black,
                fontSize: moderateScale(13, 0.6),
                // backgroundColor:'red',
                width: windowWidth * 0.8,
                paddingLeft: moderateScale(10, 0.6),
              }}>
              {item?.time} PM
            </CustomText>
          </View>

          <Divider
            my="3"
            _light={{
              color: Color.veryLightGray,
              width: windowWidth * 0.9,
              alignSelf: 'center',
            }}
          />

          <CustomText
            isBold
            numberOfLines={1}
            style={{
              color: Color.black,
              width: windowWidth * 0.5,
              textAlign: 'left',
              fontSize: moderateScale(14, 0.6),
              paddingLeft: moderateScale(20, 0.6),
            }}>
            About The event
          </CustomText>

          <View
            style={{
              width: windowWidth * 0.9,
              marginTop: moderateScale(10, 0.3),
              alignSelf: 'center',
            }}>
            <ShowMoreAndShowLessText
              minTextLength={12}
              style={{
                textAlign: 'left',
                fontSize: moderateScale(13, 0.6),
                width: windowWidth * 0.85,
              }}>
              {item?.desc}
            </ShowMoreAndShowLessText>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default EventDetails;
