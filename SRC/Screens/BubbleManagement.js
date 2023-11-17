import React, {useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';
import ImagePickerModal from '../Components/ImagePickerModal';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleComponent from '../Components/ToggleComponent';
import CustomSwitch from '../Components/CustomSwitch';
import { useNavigation } from '@react-navigation/native';

const BubbleManagement = () => {
  const navigation = useNavigation()
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const onSelectSwitch = index => {
    // alert('Selected index: ' + index);
  };

  const Data = [
    {
      text: 'All Bubble Member Post',
      Answer: '(N) Only bubble team posts',
    },
    {
      text: 'Bubble team can remove comments',
      Answer: '(N) Only bubble owner can remove comments',
    },
    {
      text: 'Bubble team can remove content',
      Answer: '(N) Only bubble owner can remove content',
    },
    {
      text: 'Entire bubble can invite new members',
      Answer: '(N) Only bubble team can send invites',
    },
    {
      text: 'Joining is open to everyone',
      Answer: '(N) Only bubble team can accept request',
    },
  ];
  
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header Title={'Bubble Management'} showBack />
      <ScrollView>
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
            alignItems: 'center',
          }}>
          <CustomText
            isBold
            style={{
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
              fontSize: moderateScale(15, 0.6),
              marginTop: moderateScale(20, 0.6),
            }}>
            Bubble Management
          </CustomText>

          <View
            style={{
              width: windowWidth,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(10, 0.6),
              alignItems: 'center',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: windowWidth * 0.75,
                  marginTop: moderateScale(10, 0.3),
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.themeLightGray,
                  }}>
                  Owner :
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.black,
                  }}>
                  {''} Default to Bubble Creator
                </CustomText>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: windowWidth * 0.75,
                  marginTop: moderateScale(10, 0.3),
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.black,
                  }}>
                  Moderate :
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.themeLightGray,
                  }}>
                  {''} Bubble Creator
                </CustomText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: windowWidth * 0.75,
                  marginTop: moderateScale(10, 0.3),
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.black,
                  }}>
                  Moderate :
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.themeLightGray,
                  }}>
                  {''} Bubble Creator
                </CustomText>
              </View>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: windowWidth * 0.05,
                  height: windowHeight * 0.03,
                  backgroundColor: Color.white,
                  justifyContent: 'center',
                  marginTop: moderateScale(10, 0.3),
                  alignItems: 'center',
                  borderRadius: moderateScale(3, 0.3),
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 5.62,
                  elevation: 7,
                }}>
                <Icon
                  name={'search1'}
                  as={AntDesign}
                  size={moderateScale(12, 0.6)}
                  color={'#000'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: windowWidth * 0.05,
                  height: windowHeight * 0.03,
                  backgroundColor: Color.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: moderateScale(3, 0.3),
                  marginTop: moderateScale(5, 0.3),
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 5.62,
                  elevation: 7,
                }}>
                <Icon
                  name={'search1'}
                  as={AntDesign}
                  size={moderateScale(12, 0.6)}
                  color={'#000'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  width: windowWidth * 0.05,
                  height: windowHeight * 0.03,
                  backgroundColor: Color.white,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: moderateScale(3, 0.3),
                  marginTop: moderateScale(5, 0.3),
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 5.62,
                  elevation: 7,
                }}>
                <Icon
                  name={'search1'}
                  as={AntDesign}
                  size={moderateScale(12, 0.6)}
                  color={'#000'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: moderateScale(40, 0.3),
            }}>
            <CustomText
              isBold
              style={{
                width: windowWidth,
                paddingHorizontal: moderateScale(10, 0.6),
                fontSize: moderateScale(15, 0.6),
                marginTop: moderateScale(10, 0.6),
              }}>
              Team Role | Perms
            </CustomText>
            {Data.map((item, index) => {
              return (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: windowWidth * 0.7,
                        paddingVertical: moderateScale(8, 0.6),
                        paddingHorizontal: moderateScale(10, 0.6),
                      }}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(13, 0.6),
                          color: Color.veryLightGray,
                        }}>
                        {item.text}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(11, 0.6),
                          color: Color.black,
                        }}>
                        {item.Answer}
                      </CustomText>
                    </View>
                    <View
                      style={{
                        width: windowWidth * 0.3,
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingHorizontal: moderateScale(10, 0.6),
                      }}>
                      <CustomSwitch
                        selectionMode={1}
                        roundCorner={true}
                        option1={'Yes'}
                        option2={'No'}
                        onSelectSwitch={onSelectSwitch}
                        selectionColor={'#11d40d'}
                      />
                    </View>
                  </View>
                </>
              );
            })}
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
            activeOpacity={0.7}
            style={{
              width: windowWidth * 0.3,
              height: windowHeight * 0.05,
              backgroundColor: Color.white,
              borderRadius: moderateScale(5, 0.3),
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: moderateScale(20, 0.3),
              alignItems: 'center',
              shadowColor: '#000000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.18,
              shadowRadius: 4.59,
              elevation: 5,
            }}>
            <Icon
              name={'zip-disk'}
              as={MaterialCommunityIcons}
              size={moderateScale(25, 0.6)}
              color={Color.black}
              style={{
                width : 30,

              }}
            />

            <CustomText
            // isBold
              style={{fontSize: moderateScale(15, 0.3), color: Color.black}}>
              Save
            </CustomText>
          </TouchableOpacity>

          {/* <CustomText
            style={{
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
              marginTop: moderateScale(20, 0.3),
              fontSize: moderateScale(14, 0.3),
            }}>
            "Owner can Search and change moderate and admin and these people
            represent bubble management
          </CustomText> */}

          {/* <CustomText
            style={{
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
              fontSize: moderateScale(14, 0.3),
            }}>
            "I have decided to treat the management team as one with the owner
            able to change the moderators admins whenever they see fit And if
            the setting change to no only the owner has control.
          </CustomText> */}
        </ImageBackground>
      </ScrollView>
    </>
  );
  F;
};

export default BubbleManagement;
