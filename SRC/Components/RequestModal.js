import {StyleSheet, Text, View, Platform, ToastAndroid} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Alert, Icon} from 'native-base';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomImage from './CustomImage';
import { useSelector } from 'react-redux';

const RequestModal = ({isVisible, setIsVisible, text}) => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => {
        setIsVisible(false);
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <View style={{backgroundColor:themeColor[1]}}>
          <CustomText
            style={{
              color: Color.white,
              fontSize: moderateScale(15, 0.6),
              // marginTop: moderateScale(20, 0.3),
              paddingVertical:moderateScale(10,.6),
              paddingHorizontal: moderateScale(30, 0.6),
              textAlign: 'center',
            }}
            isBold>
             Permission
          </CustomText>
        </View>

        <View
          // colors={['#286086', '#dfecf5']}
          style={{
            height: windowHeight * 0.22,
            width: windowWidth * 0.85,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.circle}>
            <CustomImage
              source={require('../Assets/Images/user.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>

          <CustomText
            style={{
              color: Color.black,
              fontSize: moderateScale(14, 0.6),
              marginTop: moderateScale(20, 0.3),
              paddingHorizontal: moderateScale(30, 0.6),
              textAlign: 'center',
            }}
            isBold>
            you need admins permission to get into the {text}
          </CustomText>
        </View>
        {/* <View style={styles.container2}>
        <CustomText
          style={{
            fontSize: moderateScale(20, 0.6),
            color: Color.black,
          }} isBold>
           Discrete Mode
        </CustomText>
        <CustomText
          style={{
            fontSize: moderateScale(11, 0.6),
            color: Color.veryLightGray,
            marginTop:moderateScale(10,0.3),
          }} >
          Monthly
        </CustomText>
        <CustomText
          style={{
            fontSize: moderateScale(24, 0.6),
            color: Color.black,
          }} isBold>
          $10.00
        </CustomText>
      </View> */}
        <CustomButton
          text={'Request to join'}
          onPress={() => {
            setIsVisible(false);
            Platform.OS == 'android'
              ? ToastAndroid.show('Request has been sent', ToastAndroid.SHORT)
              : Alert.alert('Request has been sent');
          }}
          textColor={Color.white}
          width={windowWidth * 0.65}
          height={windowHeight * 0.06}
          marginTop={moderateScale(20, 0.3)}
          bgColor={Color.themeBgColor}
          borderRadius={moderateScale(25, 0.3)}
          elevation
          isGradient
          fontSize={moderateScale(14, 0.6)}
        />
      </View>
    </Modal>
  );
};

export default RequestModal;

const styles = ScaledSheet.create({
  container: {
    width: windowWidth * 0.85,
    paddingBottom: moderateScale(20, 0.6),
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.6),
    overflow: 'hidden',
  },
  circle: {
    width: moderateScale(60, 0.6),
    height: moderateScale(60, 0.6),
    borderRadius: moderateScale(30, 0.6),
    //   backgroundColor: Color.white,
    justifyContent: 'center',
    //   alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  container2: {
    // height: windowHeight * 0.13,
    paddingVertical: moderateScale(10, 0.6),
    width: '100%',
    backgroundColor: '#EEEEEE',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
