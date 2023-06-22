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

const EnterPhone = () => {
  const disptach = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');

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
          // justifyContent:'center',
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
              navigationService.navigate('VerifyNumber',{phoneNumber: phone})
            }}
            bgColor={['#01E8E3', '#1296AF']}
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
    marginTop: windowHeight*0.2 ,
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












































// import React, {useState} from 'react';
// import {
//   Image,
//   Dimensions,
//   ImageBackground,
//   Platform,
//   ToastAndroid,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {ScaledSheet, moderateScale} from 'react-native-size-matters';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import navigationService from '../navigationService';
// import TextInputWithTitle from '../Components/TextInputWithTitle';
// import Color from '../Assets/Utilities/Color';
// import CustomStatusBar from '../Components/CustomStatusBar';
// import CustomText from '../Components/CustomText';
// import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
// import CustomButton from '../Components/CustomButton';
// import {ActivityIndicator} from 'react-native';
// import {Post} from '../Axios/AxiosInterceptorFunction';
// import CardContainer from '../Components/CardContainer';
// import { useSelector } from 'react-redux';
// import LinearGradient from 'react-native-linear-gradient';



// const EnterPhone = props => {
//   const SelecteduserRole = useSelector(
//     state => state.commonReducer.selectedRole,
//   );
//   const fromForgot = props?.route?.params?.fromForgot;
//   console.log('here=>', fromForgot);
//   const [phone, setPhone] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const sendOTP = async () => {
//     const url = 'password/email';
//     if (['', null, undefined].includes(phone)) {
//       return Platform.OS == 'android'
//         ? ToastAndroid.show('Phone number is required', ToastAndroid.SHORT)
//         : alert('Phone number is required');
//     }
//     setIsLoading(true);
//     const response = await Post(url, {email: phone}, apiHeader());
//     setIsLoading(false);
//     if (response != undefined) {
//       console.log('response data =>', response?.data);
//       Platform.OS == 'android'
//         ? ToastAndroid.show(`OTP sent to ${phone}`, ToastAndroid.SHORT)
//         : alert(`OTP sent to ${phone}`);
//       fromForgot
//         ? navigationService.navigate('VerifyNumber', {
//             fromForgot: fromForgot,
//             phoneNumber: `${phone}`,
//           })
//         : navigationService.navigate('VerifyNumber', {
//             phoneNumber: `${phone}`,
//           });
//     }
//   };

//   return (
//     <>
//       <CustomStatusBar
//         backgroundColor={
//           SelecteduserRole == 'Qbid member' ? Color.blue : Color.themeColor
//         }
//         barStyle={'light-content'} />
      
//       <LinearGradient
//         style={{
//           width: windowWidth,
//           height: windowHeight,
//         }}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y:1}}
//         colors={['purple', 'white' ]}
//         // locations ={[0, 0.5, 0.6]}
//         >
//         <KeyboardAwareScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{
//             paddingBottom: moderateScale(20, 0.3),
//             alignItems: 'center',
//             justifyContent : 'center',
//             width: '100%',
//             height : windowHeight
//           }}>
         

//           <CardContainer  style={{paddingVertical: moderateScale(30, 0.3) , alignItems : 'center'}}>
//             <CustomText isBold style={styles.txt2}>Forget Password</CustomText>
//             <CustomText style={styles.txt3}>
//             Forgot your password ? don't worry, jsut take a simple step and create your new password!
//             </CustomText>
            
//             <TextInputWithTitle

//             titleText={'Enter your Email'}
//             secureText={false}
//             placeholder={'Enter your Email'}
//             setText={setPhone}
//             value={phone}
//             viewHeight={0.07}
//             viewWidth={0.75}
//             inputWidth={0.7}
//             // border={1}
//             borderColor={'#ffffff'}
//             backgroundColor={'#FFFFFF'}
//             marginTop={moderateScale(35, 0.3)}
//             color={Color.themeColor}
//             placeholderColor={Color.themeLightGray}
//             borderRadius={moderateScale(25, 0.3)}
//             elevation
//           />
//           <CustomButton
//             text={
//               isLoading ? (
//                 <ActivityIndicator color={'#FFFFFF'} size={'small'} />
//               ) : (
//                 'Submit'
//               )
//             }
//             textColor={Color.white}
//             width={windowWidth * 0.75}
//             height={windowHeight * 0.06}
//             marginTop={moderateScale(20, 0.3)}
//             onPress={() => {
//            navigationService.navigate('VerifyNumber', {phoneNumber : phone})
//              }}
//             bgColor={ SelecteduserRole == 'Qbid member'
//             ?  Color.blue : Color.themeColor}
//             // borderColor={Color.white}
//             // borderWidth={2}
//             borderRadius={moderateScale(30, 0.3)}
//           />

//           <View style={styles.container2}>
//             <CustomText style={styles.txt5}>
//               {"Already have an account? "}
//             </CustomText>

//             <TouchableOpacity
//               activeOpacity={0.8}
//               style={{marginLeft: moderateScale(1,0.3)}}
//               onPress={() => navigationService.navigate('LoginScreen')}>
//               <CustomText style={styles.txt4}>{'Sign In'}</CustomText>
//             </TouchableOpacity>
//           </View>
//           </CardContainer>
//         </KeyboardAwareScrollView>
//         </LinearGradient>
//     </>
//   );
// };

// const styles = ScaledSheet.create({

//   txt2: {
//     color: Color.black,
//     fontSize: moderateScale(25, 0.6),
//   },
//   txt3: {
//     color: Color.themeLightGray,
//     fontSize: moderateScale(10, 0.6),
//     textAlign: 'center',
//     width: '80%',
//     marginTop: moderateScale(5, 0.3),
//     lineHeight: moderateScale(17, 0.3),
//   },
 
 
//   phoneView: {
//     width: '80%',
//     paddingVertical: moderateScale(5, 0.3),
//     flexDirection: 'row',
//     marginTop: moderateScale(20, 0.3),
//   },
//   container2: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: windowWidth * 0.9,
//     // marginTop: moderateScale(10,0.3),
//   },
//   txt4: {
//     color: Color.themeColor,
//     fontSize: moderateScale(14, 0.6),
//     marginTop: moderateScale(8, 0.3),
//     fontWeight: 'bold',
//   },
//   txt5: {
//     color: Color.themeLightGray,
//     marginTop: moderateScale(10, 0.3),
//     fontSize: moderateScale(12, 0.6),
//   },
// });

// export default EnterPhone;
