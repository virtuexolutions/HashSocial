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
import CustomImage from '../Components/CustomImage';

const AccountSetting = () => {

  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Account Settings'} search />

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View style={styles.profileSection}>
            <CustomImage
              source={require('../Assets/Images/dummyman1.png')}
              style={{
                height:'100%',
                width: '100%',
}}
              resizeMode={'stretch'}
            />
          </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CustomText
            style={{
              color: '#22393a',
              fontSize: moderateScale(22, 0.6),
              marginTop: moderateScale(5, 0.3),
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
            }}
            fontSize={moderateScale(12,0.6)}
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
            fontSize={moderateScale(12,0.6)}
            onPress={() => {
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            bgColor={['#FFFFFF', '#FFFFFF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />

     
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
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
    backgroundColor: '#ACACAC',
    borderRadius: (windowWidth * 0.35) /2,
    marginTop: windowHeight * 0.2,
    overflow :'hidden' ,
    borderWidth: 4,
    borderColor: '#33dd50',
  },
});
