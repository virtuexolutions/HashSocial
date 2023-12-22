import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';

import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import {useSelector} from 'react-redux';
import { baseUrl } from '../Config';

const FeedContainer = ({item, source}) => {
  console.log('🚀 ~ file: FeedContainer.js:25 ~ FeedContainer ~ source:', item);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.card,
        {height: windowHeight, paddingBottom: moderateScale(0, 0.3)},
      ]}>
      <Video
        // posterResizeMode={'repeat'}
        // muted
        // fullscreen
        resizeMode={'stretch'}
        paused={false}
        repeat={true}
        // controls={true}
        source={{uri: source}}
        style={styles.backgroundVideo}
      />
      {/* </SharedElement>  */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.9}}
        colors={['#ffffff00', '#000000']}
        style={{
          position: 'absolute',
          bottom: 0,
          justifyContent: 'flex-end',
          shadowOffset: {height: 2, width: 0},
          shadowOpacity: 1,
          shadowRadius: 4,
          width: '100%',
          paddingBottom: moderateScale(30, 0.3),
        }}>
        <View
          style={{
            height: windowHeight * 0.4,
            width: windowWidth * 0.7,
            // backgroundColor: 'black',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(40, 0.6),
              paddingLeft: moderateScale(5, 0.6),
            }}>
            <View
              style={{
                width: windowWidth * 0.1,
                height: windowWidth * 0.1,
                backgroundColor: 'white',
                overflow: 'hidden',
                borderColor: '#33dd50',
                borderWidth: 2,
                borderRadius: (windowWidth * 0.1) / 2,
                marginTop: moderateScale(12, 0.3),
                marginLeft: moderateScale(5, 0.3),
                marginRight: moderateScale(8, 0.3),
              }}>
              <CustomImage
                source={item?.profile_info?.photo ? {uri:`${baseUrl}/${item?.profile_info?.photo}`}: require('../Assets/Images/avatar3.png')}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                  marginTop: moderateScale(12, 0.3),
                  // marginRight: moderateScale(8, 0.3),
                  textAlign: 'left',
                }}
                isBold>
               {item?.profile_info?.name}
              </CustomText>

              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(10, 0.6),
                  color: Color.white,
                  // marginRight: moderateScale(8, 0.3),
                  textAlign: 'left',
                }}>
                new york
              </CustomText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: windowWidth * 0.5,
              alignItems: 'center',
              marginTop: moderateScale(30, 0.3),
              paddingLeft: moderateScale(5, 0.6),
            }}>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.white}}>
              50 Views
            </CustomText>
            <View
              style={{
                width: 1,
                height: windowHeight * 0.02,
                backgroundColor: '#fff',
              }}></View>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.white}}>
              {item?.comments?.length} comments
            </CustomText>
          </View>

          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: Color.white,
              textAlign: 'left',
              paddingLeft: moderateScale(15, 0.6),
              marginTop: moderateScale(10, 0.3),
            }}>
          {item?.caption}
          </CustomText>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 35,
            // justifyContent: 'space-between',
            // backgroundColor: 'black',
            // height: windowHeight * 0.4,
          }}>
          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: moderateScale(30, 0.6),
                width: moderateScale(30, 0.6),
                borderRadius: moderateScale(30, 0.6) / 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'like2'} as={AntDesign} color={'white'} size={5} />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              {item?.total_likes_count}
            </CustomText>
          </View>

          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: moderateScale(30, 0.6),
                width: moderateScale(30, 0.6),
                borderRadius: moderateScale(30, 0.6) / 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'dislike2'} as={AntDesign} color={'white'} size={5} />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              3k
            </CustomText>
          </View>
          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: moderateScale(30, 0.6),
                width: moderateScale(30, 0.6),
                borderRadius: moderateScale(30, 0.6) / 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'share'} as={Feather} color={'white'} size={5} />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              1k
            </CustomText>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileSection1: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    backgroundColor: '#fff',
    borderRadius: (windowHeight * 0.05) / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#33dd50',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'red',
    // height: windowHeight * 0.72,
    // borderRadius: moderateScale(20, 0.6),
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  backgroundVideo: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },

  text: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
    textShadowColor: Color.black,
    // textShadowRadius: moderateScale(30, 0.6),
  },
  text1: {
    fontSize: moderateScale(15, 0.6),
    color: Color.veryLightGray,
    textShadowColor: Color.black,
    // textShadowRadius: moderateScale(30, 0.6),
  },
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  israelite: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.1,
    // backgroundColor: themeColor[1],
    borderRadius: moderateScale(8, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // borderColor: themeColor[1],
    borderWidth: 1,
  },
});

export default FeedContainer;
