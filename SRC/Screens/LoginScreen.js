import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import {setAccountPrivate, setUserToken} from '../Store/slices/auth';

const LoginScreen = () => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  console.log("🚀 ~ file: LoginScreen.js:28 ~ LoginScreen ~ themeColor:", themeColor)
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(privacy)

  console.log('🚀 ~ file: LoginScreen.js:28 ~ LoginScreen ~ theme:', privacy);

  const disptach = useDispatch();
  const [firstSection, setFirstSection] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setusername] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedType] = useState('Qbid Member');
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right />
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
          // justifyContent : 'center',
          alignItems: 'center',
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
            color={themeColor[1]}
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
            color={themeColor[1]}
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
            onPress={() => {
              console.log('here');
              navigationService.navigate('EnterPhone');
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
              // navigationService.navigate('BubbleSelection');
              disptach(setUserToken({token: 'fasdasd awdawdawdada'}));
            }}
            bgColor={themeColor}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
        </View>
        <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf : 'center',
                marginTop : moderateScale(10,0.3)
              }}>
                <CustomText
                  style={{
                    color: '#000',
                    fontSize: moderateScale(11, 0.6),
                  }}>
                  Privacy Setting
                </CustomText>

              <View style={[styles.radioButtonContainer]}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('private')
                    dispatch(setAccountPrivate('private'))
                    setSelectedTab('private');
                  }}
                  style={[styles.radioButton,{
                    backgroundColor : selectedTab == 'private' ? Color.red : Color.veryLightGray
                  }]}>
                  {/* <View style={styles.radioButtonIcon} /> */}
                </TouchableOpacity>
                <CustomText  onPress={() => {
                  dispatch(setAccountPrivate('private'))
                    setSelectedTab('private');
                  }} style={styles.radioButtonText}>Private</CustomText>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(setAccountPrivate('public'))
                    setSelectedTab('public');
                  }}
                  style={[styles.radioButton,{
                    backgroundColor : selectedTab == 'public' ? themeColor[1] : Color.veryLightGray
                  }]}>
               
                </TouchableOpacity>
                <CustomText 
                 onPress={() => {
                  dispatch(setAccountPrivate('public'))
                    setSelectedTab('public');
                  }}
                style={styles.radioButtonText}>Public</CustomText>
              </View>
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
              // onPress={GoogleLogin}
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
              // onPress={isSignedIn}
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
          textColor={themeColor[1]}
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
      </ImageBackground>
      </ScrollView>
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
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
    paddingLeft: moderateScale(20, 0.3),
  },
  radioButton: {
    height: moderateScale(11,0.6),
    width: moderateScale(11,0.6),
    backgroundColor: '#e8e8e8',
    borderRadius: moderateScale(11,0.6),
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 8,
    width: 8,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: moderateScale(12, 0.6),
    fontWeight: '600',
    color: '#000',
  },
});

export default LoginScreen;
