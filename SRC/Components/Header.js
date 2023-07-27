import React, {useState} from 'react';
import {Alert, Icon} from 'native-base';
import {View, Platform, Dimensions, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
const {height, width} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import navigationService from '../navigationService';
import Modal from 'react-native-modal';
import { setBubbleSelected, setUserToken } from '../Store/slices/auth';

const Header = props => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  console.log("🚀 ~ file: Header.js:20 ~ Header ~ themeColor:", themeColor)
  const {showBack, Title, right, search} = props;
  const token = useSelector(state => state.authReducer.token);
  console.log('🚀 ~ file: Header.js:20 ~ Header ~ token:', token);
  const [modalVisible, setModalVisible] = useState(false);
  console.log('🚀 ~ file: Header.js:19 ~ Header ~ modalVisible:', modalVisible);
  const dispatch = useDispatch();
  const modalData = [
    {
      name: 'Notifications',
      onPress: () => {
        navigationService.navigate('Notifications');
      },
    },
    {
      name: 'Profile',
      onPress: () => {
        navigationService.navigate('Profile');
      },
    },
    {
      name: 'Bubble List',
      onPress: () => {
        navigationService.navigate('BubbleList');
      },
    },
    {name: 'Membership', onPress: () => {}},
    {name: 'Privacy', onPress: () => {}},
    {
      name: 'settings',
      onPress: () => {
        navigationService.navigate('AccountSetting');
      },
    },
    {
      name: 'Logout',
      onPress: () => {
        dispatch(setUserToken(null))
        dispatch(setBubbleSelected(false))
        navigationService.navigate('LoginScreen');
      },
    },
  ];

  return (
    <>
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {showBack ? (
          <Icon
            name={'left'}
            as={FontAwesome}
            size={moderateScale(15, 0.6)}
            color={Color.white}
            style={{
              position: 'absolute',
              left: moderateScale(20, 0.6),
              // width : moderateScale(100,0.6),
              // height : windowHeight * 0.1,
            }}
          />
        ) : (
          <View
            style={{
              position: 'absolute',
              left: 10,
              width: moderateScale(30, 0.6),
              height: 40,
            }}>
            <CustomImage
              source={require('../Assets/Images/logosmall.png')}
              resizeMode={'stretch'}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        )}
        {Title && (
          <CustomText style={{fontSize: 23}} isBold>
            {Title}
          </CustomText>
        )}
        {right && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              right: moderateScale(10, 0.6),
            }}>
            {search && (
              //   <Icon
              // name={'search'}
              // as={Ionicons}
              // size={moderateScale(20,0.6)}
              // color={'#757575'}
              // style={{

              // }}
              <CustomImage
                source={require('../Assets/Images/search.png')}
                style={{
                  width: moderateScale(20, 0.6),
                  height: moderateScale(20, 0.6),
                }}
                onPress={() => {
                  navigationService.navigate('BubbleSearch');
                }}
              />
            )}

            <Icon
              name={'reorder-three'}
              as={Ionicons}
              size={moderateScale(40, 0.6)}
              color={themeColor[1]}
              style={{}}
              onPress={() => token != null && setModalVisible(!modalVisible)}
            />
          </View>
        )}
      </View>
      
        <Modal
          visible={modalVisible}
          onBackdropPress={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              width: windowWidth * 0.32,
              top: 40,
              // right: 0,
              position: 'absolute',
              alignSelf: 'flex-end',
              alignItems: 'center',
              borderRadius: moderateScale(10, 0.6),
              // backgroundColor: 'rgba(225,225,225,.5)',
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            {/* <CustomText style={{fontSize:moderateScale(20,.6)}}>Hello</CustomText> */}
            {modalData.map(item => {
              return (
                <>
                  <CustomText
                    style={{
                      fontSize: moderateScale(15, 0.6),
                      paddingVertical: moderateScale(5, 0.6),
                    }}
                    onPress={item?.onPress}>
                    {item?.name}
                  </CustomText>
                  <View
                    style={{
                      width: windowWidth * 0.25,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      height: 2,
                    }}></View>
                </>
              );
            })}
          </View>
        </Modal>
     
    </>
  );
};
const styles = ScaledSheet.create({
  header1: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: Color.white,
    marginBottom: moderateScale(5, 0.3),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  statusModal: {
    alignSelf: 'flex-end',
    paddingVertical: moderateScale(15, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    backgroundColor: Color.white,
    // borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(60, 0.3),
    // borderWidth: 1,
    borderColor: Color.green,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  header2: {
    width: windowWidth,
    // height: windowHeight * 0.13,
    // backgroundColor: themeColor[1],
    // justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  notificationCircle: {
    position: 'absolute',
    height: moderateScale(10, 0.3),
    width: moderateScale(10, 0.3),
    borderRadius: moderateScale(5, 0.3),
    backgroundColor: Color.green,
    right: moderateScale(5, 0.3),
    // marginTop : moderateScale(10,0.3)
  },
});
export default Header;
