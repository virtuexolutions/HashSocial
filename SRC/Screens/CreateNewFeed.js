import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginButton,
  LoginManager,
  Profile,
} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Icon} from 'native-base';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';

const CreateNewFeed = () => {
  //   const disptach = useDispatch();
  //   const [firstSection, setFirstSection] = useState(true);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [username, setusername] = useState('');
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState('');
  //   const [selectedRole, setSelectedType] = useState('Qbid Member');
  //   const [userInfo, setUserInfo] = useState({})
  //   const [isLogin, setIsLogin] = useState(false)
  const [feedTitle, setFeedTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Details, setDetails] = useState('');
  const [privacy, setPrivacy] = useState('');

  const architecture = ['#architecture', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue, setDropDownValue] = useState('#Architecture');
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Create New Feed'} />
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          // justifyContent : 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.28,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            marginTop: moderateScale(20, 0.3),
            // marginHorizontal: moderateScale(20, 0.3),
            // marginHorizontal:moderateScale(50,0.3),
            // marginRight: moderateScale(80,.3),
            marginLeft: moderateScale(-20, 0.3),
          }}>
          <View style={{
            // flexGrow: 1,

            // alignItems
            }}>
            <TextInputWithTitle
              // title={'Feed title'}
              titleText={'Feed title'}
              placeholder={'Feed Title'}
              setText={setFeedTitle}
              value={feedTitle}
              viewHeight={0.05}
              viewWidth={0.5}
              inputWidth={0.6}
              // border={1}
              // borderColor={'#A7A7A7'}
              // backgroundColor={'#FFFFFF'}
              marginBottom={moderateScale(-15,0.3)}
              color={Color.black}
              placeholderColor={Color.black}
              style={{fontWeight: 'bold'}}
              multiline
              numberOfLines={4}

              //   borderRadius={moderateScale(10, 0.3)}
            />

            <TextInputWithTitle
              maxLength={2000}
              
              secureText={false}
              placeholder={
               'Description'
              }
              setText={setDescription}
              value={description}
              viewHeight={0.22}
              viewWidth={0.6}
              inputWidth={0.55}
              // border={1}
              // borderColor={Color.veryLightGray}
              // backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(5, 0.3)}
              color={Color.red}
              placeholderColor={Color.themeLightGray}
              // borderRadius={moderateScale(5, 0.3)}
              multiline
            />
          </View>

          <View
            style={{
              height: windowHeight * 0.25,
              width: windowWidth * 0.32,
              backgroundColor: 'white',
              borderRadius: 20,
              // alignItems: 'center',
              // justifyContent: 'center',
              overflow: 'hidden',
              //   marginVertical: moderateScale(5, 0.3),
              //   marginHorizontal: moderateScale(2, 0.3),
            }}>
            <CustomImage
              source={require('../Assets/Images/gallery3.png')}
              style={{
                width: '100%',
                height: '100%',
                // position: 'absolute',
                // top: -77,
                // left:-56,
                alignItems: 'center',
                // justifyContent:'center',
              }}
              // key={it}
              resizeMode={'cover'}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.14,
            // flexDirection: 'row',
            // justifyContent: 'center',
            marginTop: moderateScale(10, 0.3),
            // marginHorizontal: moderateScale(20, 0.3),
            // marginHorizontal:moderateScale(50,0.3),
            // marginRight: moderateScale(10,.3),
            marginLeft: moderateScale(-20, 0.3),

          }}>
          <CustomText
            style={{
              textAlign: 'left',
              width: windowWidth * 0.5,
              fontSize: moderateScale(15, 0.6),
              marginLeft: moderateScale(25,0.3)
            }}
            isBold>
            Add The Details
          </CustomText>
          <TextInputWithTitle
              maxLength={2000}
              
              secureText={false}
              placeholder={
               ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
              }
              setText={setDetails}
              value={Details}
              viewHeight={0.22}
              viewWidth={0.89}
              inputWidth={0.89}
              // border={1}
              // borderColor={Color.veryLightGray}
              // backgroundColor={'#FFFFFF'}
              // marginTop={moderateScale(5, 0.3)}
              color={Color.red}
              placeholderColor={Color.themeLightGray}
              // borderRadius={moderateScale(5, 0.3)}
              multiline
            />
          {/* <CustomText
            style={{
              textAlign: 'left',
              width: windowWidth * 0.85,
              fontSize: moderateScale(12, 0.6),
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </CustomText> */}
        </View>

        <View style={styles.line}></View>
        <DropDownSingleSelect
          // iconName={'chevron-thin-down'}
          // iconType={Entypo}
          backgroundColor={'white'}
          array={architecture}
          item={dropDownValue}
          setItem={setDropDownValue}
          width={windowWidth * 0.9}
          placeholder={dropDownValue}
          dropdownStyle={{
            alignItems: 'center',
            marginTop: moderateScale(15, 0.3),
          }}
          // height={windowHeight * 0.05}
        />
        {/* <View
          style={{
            height: windowHeight * 0.05,
            width: windowWidth * 0.9,
            marginTop: moderateScale(10, 0.3),
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: moderateScale(20, 0.6),
            // marginLeft:moderateScale(10,0.3),
            // marginRight:moderateScale(10,0.3),
          }}>
            
          <CustomText style={{marginLeft: moderateScale(20, 0.3)}}>
            #Architecture
          </CustomText>
          <Icon
            name="chevron-thin-down"
            as={Entypo}
            color={'#1296AF'}
            style={{marginRight: moderateScale(20, 0.3)}}
          />
        </View> */}

        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.05,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(10, 0.3),
          }}>
          <CustomText style={{textAlign: 'left'}}>Privacy Setting</CustomText>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: moderateScale(10, 0.3),
              }}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: privacy == 'Private' ? '#1296AF' : 'white',
                  marginRight: moderateScale(5, 0.3),
                  borderRadius: moderateScale(10, 0.6),
                }}></View>
              <CustomText
                onPress={() => {
                  setPrivacy('Private');
                }}>
                Private
              </CustomText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: privacy == 'Public' ? '#1296AF' : 'white',
                  marginRight: moderateScale(5, 0.3),
                  borderRadius: moderateScale(10, 0.6),
                }}></View>
              <CustomText
                onPress={() => {
                  setPrivacy('Public');
                }}>
                Public
              </CustomText>
            </View>
          </View>
        </View>

        {/* 
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
              onPress={GoogleLogin}
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
              onPress ={()=>{isLogin ?  logoutWithFacebook() : loginWithFacebook()} }
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
              onPress={isSignedIn}
            />
          </View>
        </View> */}

        {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
        {/* <CustomButton
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
        /> */}

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
  line: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.0004,
    // paddingVertical: moderateScale(15, 0.6),
    backgroundColor: 'white',
    alignSelf: 'center',
    // borderRadius: moderateScale(15, 0.6),
    // alignItems: 'center',
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

export default CreateNewFeed;
