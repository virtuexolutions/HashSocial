import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';

const EnterPhone = () => {
  const disptach = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right />
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          // justifyContent : 'center',
          alignItems: 'center',
          // justifyContent:'center',
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(25, 0.6),
            color: '#353434',
            width: windowWidth * 0.9,
            textAlign: 'left',
            marginTop: moderateScale(10, 0.3),
          }}
          isBold={true}
          children={'Reset Password'}
        />

        <View style={styles.conatiner}>
          <TextInputWithTitle
            title={'Phone Number'}
            titleText={'Phone Number'}
            secureText={false}
            placeholder={'Phone Number'}
            setText={setPhone}
            value={phone}
            viewHeight={0.07}
            viewWidth={0.82}
            inputWidth={0.8}
            border={1}
            borderColor={'#A7A7A7'}
            backgroundColor={'#FFFFFF'}
            // marginTop={moderateScale(30,0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(10, 0.3)}
          />

          <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'#FFFFFF'} size={'small'} />
              ) : (
                'send OTP'
              )
            }
            textColor={Color.white}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            marginTop={moderateScale(20, 0.3)}
            onPress={() => {
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
              navigationService.navigate('VerifyNumber', {phoneNumber: phone});
            }}
            bgColor={Color.themeBgColor}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  conatiner: {
    width: windowWidth * 0.9,
    // height: windowHeight *0.4,
    paddingVertical: moderateScale(15, 0.6),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    marginTop: windowHeight * 0.2,
  },
  textInput: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.7,
    borderWidth: 1,
    borderColor: Color.darkGray,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  bottomImage: {
    width: windowWidth * 0.4,
    backgroundColor: 'green',
  },

  textContainer: {
    marginTop: moderateScale(20, 0.3),
  },

  Heading: {
    fontSize: moderateScale(20, 0.3),
    // fontWeight: 'bold',
    color: '#ffffff',

    alignSelf: 'flex-start',
  },

  txt3: {
    fontSize: moderateScale(10, 0.6),
    alignSelf: 'center',
    fontWeight: '600',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    // marginTop: moderateScale(10,0.3),
  },
  txt4: {
    color: Color.purple,
    fontSize: moderateScale(15, 0.6),
    marginTop: moderateScale(8, 0.3),
    fontWeight: 'bold',
  },
  txt5: {
    color: Color.white,
    marginTop: moderateScale(10, 0.3),
    fontSize: moderateScale(12, 0.6),
  },
  dropDown: {
    backgroundColor: Color.red,
  },
});

export default EnterPhone;
