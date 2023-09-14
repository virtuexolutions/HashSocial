import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  video,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import {Divider} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import CustomImage from './CustomImage';
import ShowMoreAndShowLessText from './ShowMoreAndShowLessText';
import VideoController from './VideoController';
import OptionsMenu from 'react-native-options-menu';

const PostComponent = ({item, video}) => {
  const MoreIcon = require('../Assets/Images/threedots.png');
const  editPost = ()=>{
  Alert.alert("Edit Your Post")
}

const  deletePost = ()=>{
  Alert.alert("Edit Your Post")
}


  return (
    <>
      <View
        style={{
          width: windowWidth,
          paddingVertical: moderateScale(15, 0.6),
          backgroundColor: Color.white,
          marginTop: moderateScale(10, 0.3),
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
            marginTop: moderateScale(10, 0.3),
          }}>
          <View style={styles.profileSection2}>
            <CustomImage
              source={item?.profileImage}
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="contain"
            />
          </View>

          <View style={{width: windowWidth * 0.65, justifyContent: 'center'}}>
            <CustomText numberOfLines={2}>{item?.Name}</CustomText>

            <View
              style={{
                flexDirection: 'row',
                width: windowWidth * 0.17,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <CustomText style={{textAlign: 'left'}}>{item?.date}</CustomText>
              <TouchableOpacity activeOpacity={0.7}>
                <Entypo name="globe" size={14} color={Color.veryLightGray} />
              </TouchableOpacity>
            </View>
          </View>

    
            <OptionsMenu
              button={MoreIcon}
              buttonStyle={{
                width: 36,
                height: 30,
                tintColor:'#000'
              }} 
              destructiveIndex={1}
              options={['Edit', 'Delete', 'Cancel']}
              actions={[editPost, deletePost]}
            />
            
        </View>

        <View
          style={{
            width: windowWidth,
            marginTop: moderateScale(8, 0.3),
          }}>
          <ShowMoreAndShowLessText
            minTextLength={12}
            style={{
              textAlign: 'left',
              marginLeft: moderateScale(15, 0.3),
              fontSize: moderateScale(13, 0.6),
            }}>
            {item?.desc}
          </ShowMoreAndShowLessText>
        </View>
        {(item?.image || item?.video) && (
          <View style={{width: windowWidth, height: windowHeight * 0.3}}>
            {item?.image ? (
              <CustomImage
                source={item?.image}
                style={{
                  height: '100%',
                  width: '100%',
                  marginTop: moderateScale(5, 0.3),
                }}
                resizeMode="cover"
              />
            ) : (
              <VideoController />
            )}
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            width: windowWidth,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.3),
            marginTop: moderateScale(15, 0.3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.25,
              alignItems: 'center',
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <CustomImage
                source={require('../Assets/Images/facebook.jpg')}
                style={{
                  height: 34,
                  width: 34,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <CustomImage
                source={require('../Assets/Images/heart1.png')}
                style={{
                  height: 19,
                  width: 19,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <CustomText
              style={{
                color: Color.veryLightGray,
                marginLeft: moderateScale(5, 0.3),
                fontSize: moderateScale(13, 0.6),
                width: windowWidth * 0.16,
              }}>
              {item?.Like}K
            </CustomText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.62,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <CustomText
              numberOfLines={1}
              style={[
                {
                  color: Color.veryLightGray,
                  fontSize: moderateScale(13, 0.6),
                  width: windowWidth * 0.3,
                },
                item?.View == null && {textAlign: 'right', width: '90%'},
              ]}>
              {item?.comment} comments
            </CustomText>
            {item?.View && (
              <CustomText
                numberOfLines={1}
                style={{
                  color: Color.veryLightGray,
                  fontSize: moderateScale(13, 0.6),
                  width: windowWidth * 0.3,
                }}>
                {item?.View} views
              </CustomText>
            )}
          </View>
        </View>

        <Divider my="2" _light={{color: Color.veryLightGray}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: moderateScale(5, 0.6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.16,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <AntDesign name="like2" size={23} color={Color.themeBlack} />
            </TouchableOpacity>
            <CustomText>Like</CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.26,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Octicons name="comment" size={23} color={Color.themeBlack} />
            </TouchableOpacity>
            <CustomText>comments</CustomText>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileSection2: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
    backgroundColor: '#336ecb',
    borderRadius: (windowHeight * 0.08) / 2,
    borderWidth: 2,
    borderColor: Color.themeColor,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default PostComponent;
