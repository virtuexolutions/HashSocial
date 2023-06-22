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
// import CustomText from '../Components/CustomText';
// import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
// import TextInputWithTitle from '../Components/TextInputWithTitle';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import CustomButton from '../Components/CustomButton';
import {Image, ScrollView} from 'native-base';
import {useIsFocused} from '@react-navigation/native';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {validateEmail} from '../Config';
import {setSelectedRole, setUserData} from '../Store/slices/common';
import {setUserLogin, setUserToken, setWalkThrough} from '../Store/slices/auth';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Header from '../Components/Header';
import navigationService from '../navigationService';

const LoginScreen = () => {
  const disptach = useDispatch();
  const [firstSection, setFirstSection] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setusername] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedType] = useState('Qbid Member');

  // const handleLogin = async loginFor => {
  //   console.log(
  //     '🚀 ~ file: LoginScreen.js:38 ~ handleLogin ~ loginFor',
  //     loginFor,
  //   );
  //   const url = 'login';
  //   const body = {
  //     email: email.trim(),
  //     password: password,
  //   };
  //   if (email == '' || password == '') {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show('Required Field is empty', ToastAndroid.SHORT)
  //       : alert('Required Field is empty');
  //   }
  //   if (!validateEmail(email)) {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show('Please use valid email', ToastAndroid.SHORT)
  //       : alert('Please use valid email');
  //   }
  //   setIsLoading(true);
  //   const response = await Post(url, body, apiHeader());
  //   setIsLoading(false);
  //   if (response != undefined) {
  //     console.log(response?.data);
  //     // console.log('yes' ,  response?.data?.data?.user_info?.role , loginFor)
  //     response?.data?.data?.user_info?.role == loginFor
  //       ? (dispatch(setUserData(response?.data?.data?.user_info)),
  //         dispatch(setUserLogin(response?.data?.data?.token)))
  //       : Platform.OS == 'android'
  //       ? ToastAndroid.show(
  //           'This User is not registered for selected role',
  //           ToastAndroid.SHORT,
  //         )
  //       : alert('This User is not registered for selected role');
  //   }
  // };

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
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(25, 0.6),
            color: '#353434',
            width: windowWidth * 0.9,
            textAlign: 'left',
            marginTop : moderateScale(10,0.3),
          }}
          isBold={true}
          children={' Hello, Welcome Back'}
        />

        <CustomText
          style={{
            fontSize: moderateScale(15, 0.6),
            color: '#353434',
            width: windowWidth * 0.9,
            textAlign: 'left',
          }}
          children={' Login to continue'}></CustomText>
        <View style={styles.conatiner}>
          <TextInputWithTitle
            title={'User Name'}
            secureText={false}
            placeholder={'User Name'}
            setText={setusername}
            value={username}
            viewHeight={0.07}
            viewWidth={0.82}
            inputWidth={0.8}
            border={1}
            borderColor={'#A7A7A7'}
            backgroundColor={'#FFFFFF'}
            // marginTop={moderateScale(20,0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(10, 0.3)}
          />
          <TextInputWithTitle
            title={'password'}
            titleText={'Password'}
            secureText={true}
            placeholder={'password'}
            setText={setPassword}
            value={password}
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
          <CustomText
            numberOfLines={1}
            children={'Forgot Password?'}
            style={{
              fontSize: moderateScale(10, 0.6),
              color: 'black',
              width: windowWidth * 0.8,
              textAlign: 'right',
            }}
            onPress={()=>{
              console.log('here')
              navigationService.navigate('EnterPhone')
            }}
          />
          <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'#FFFFFF'} size={'small'} />
              ) : (
                'Login'
              )
            }
            textColor={Color.white}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            marginTop={moderateScale(20, 0.3)}
            onPress={() => {
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            bgColor={['#01E8E3', '#1296AF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
        </View>
        <CustomText
          style={{
            color: Color.white,
            width: windowWidth,
            textAlign: 'center',
            marginTop: moderateScale(20, 0.3),
          }}>
          {' '}
          Or sign in with
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.6,
            justifyContent: 'space-between',
            marginTop: moderateScale(20, 0.3),
          }}>
          <View
            style={{
              width: windowWidth * 0.17,
              height: windowHeight * 0.05,
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomImage
              source={require('../Assets/Images/google.png')}
              style={{width: 20, height: 20}}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.17,
              height: windowHeight * 0.05,
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomImage
              source={require('../Assets/Images/facebook.png')}
              style={{width: 20, height: 20}}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.17,
              height: windowHeight * 0.05,
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomImage
              source={require('../Assets/Images/twitter.png')}
              style={{width: 20, height: 20}}
            />
          </View>
        </View>

        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator color={'#01E8E3'} size={'small'} />
            ) : (
              'Sign up'
            )
          }
          textColor={'#0E9AB0'}
          width={windowWidth * 0.7}
          height={windowHeight * 0.06}
          marginTop={moderateScale(40, 0.3)}
          onPress={() => {
            // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            navigationService.navigate('Signup');
          }}
          bgColor={['#FFFFFF', '#FFFFFF']}
          borderRadius={moderateScale(30, 0.3)}
          isGradient
        />

        {/* <CustomImage
              source={
              require('../Assets/Images/Main.png')
              }
              // resizeMode={'stretch'}
              style={{
                width : windowWidth * 0.3,
                height : windowHeight * 0.1,
              }}
            /> */}

        {/* <FloatingLabelInput
        label="Phone"
        value={email}
        // staticLabel
        hintTextColor={'#aaa'}
        mask="+11-1111111111"
        hint="+92-3112048588"
        containerStyles={{
          borderWidth: 2,
          paddingHorizontal: 10,
          margin : 20,
          backgroundColor: '#fff',
          borderColor: 'blue',
          borderRadius: 8,
          width : '90%' ,
          height : windowHeight * 0.06,
          alignSelf : 'center',
          // backgroundColor : 'yellow'
        }}
        customLabelStyles={{
          colorFocused: 'red',
          fontSizeFocused: 13,
          alignSelf : 'center',
        }}
        labelStyles={{
          backgroundColor: 'transparent',
          alignSelf : 'center',
          paddingHorizontal: 5,
          paddingBottom : 10
        }}
        inputStyles={{
          color: 'blue',
          paddingHorizontal: 10,
        }}
        onChangeText={value => {
          setEmail(value);
        }}
    
      /> */}
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
    marginTop: moderateScale(20, 0.3),
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

export default LoginScreen;
