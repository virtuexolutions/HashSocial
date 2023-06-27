import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import { windowHeight, windowWidth } from '../Utillity/utils';

const AccountSetting = () => {

  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Account Settings'} />

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View style={styles.profileSection}>
         
          <Image
            source={require('../Assets/Images/dummyman1.png')}
            style={{height: windowHeight / 6.5, width: windowWidth / 3.3, borderRadius: 80}}
            resizeMode="contain"
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CustomText
            style={{
              color: '#22393a',
              fontSize: moderateScale(22, 0.6),
              // fontWeight: '500',
              marginTop: moderateScale(15, 0.3),
            }} isBold>
            Jonathan
          </CustomText>
        </View>

        <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'#FFFFFF'} size={'small'} />
              ) : (
                'Create New Profile'
              )
            }
            textColor={'#30a3b9'}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            marginTop={moderateScale(10, 0.3)}
            onPress={() => {
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            bgColor={['#FFFFFF', '#FFFFFF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
          <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'#FFFFFF'} size={'small'} />
              ) : (
                'Profile List'
              )
            }
            textColor={'#30a3b9'}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            marginTop={moderateScale(10, 0.3)}
            onPress={() => {
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            bgColor={['#FFFFFF', '#FFFFFF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />

        {/* <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 50,
            width: width / 1.7,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScale(10, 0.3),
            borderRadius: 50,
          }}>
          <Text style={{fontSize: moderateScale(13, 0.6), color: '#30a3b9'}}>
            Create New Profile
          </Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          activeOpacity={0.8}
          style={{
            height: 50,
            width: width / 1.7,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScale(10, 0.3),
            borderRadius: 50,
          }}>
          <Text style={{fontSize: moderateScale(13, 0.6), color: '#30a3b9'}}>
            {' '}
            Profile List
          </Text>
        </TouchableOpacity> */}
      </ImageBackground>
    </>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowHeight / 6,
    width: windowWidth / 3,
    backgroundColor: '#fff',
    borderRadius: 80,
    marginTop: moderateScale(140, 0.3),
    borderWidth: 6,
    borderColor: '#33dd50',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
