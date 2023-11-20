import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import CardComponent from '../Components/CardComponent';
import {Get, Post} from '../Axios/AxiosInterceptorFunction';
import {setBubbleSelected, setFeedsSelected, setProfileSelcted} from '../Store/slices/auth';
import {setSelectedProfileData} from '../Store/slices/common';
import Modal from 'react-native-modal';
import TextInputWithTitle from '../Components/TextInputWithTitle';

const LoginProfile = props => {
  const item = props?.route?.params?.item;
  console.log('🚀 ~ file: LoginProfile.js:34 ~ LoginProfile ~ item:', item);
  const privacy = useSelector(state => state.authReducer.privacy);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const token = useSelector(state => state.authReducer.token);
  console.log("🚀 ~ file: LoginProfile.js:41 ~ LoginProfile ~ token:", token)
  const [isLoading, setIsLoading] = useState(false);
  const [bubbleData, setBubbleData] = useState([]);
  const [modal, setModal] = useState(false);
  const [passCode, setPassCode] = useState('');
  const dispatch = useDispatch();

  const loginProfile = async () => {
    const url = 'auth/profile_login';
    const body = {
      name: item?.name,
      passcode: passCode,
    };
    if (passCode == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show('Passcode is required', ToastAndroid.SHORT)
        : Alert.alert('Passcode is required');
    }
    console.log('🚀 ~ file: LoginProfile.js:50 ~ loginProfile ~ body:', body);
    setIsLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setIsLoading(false);
   
    if (response?.data?.success) {
    console.log(
        '🚀 ~ file: ProfilesListing.js:62 ~ loginProfile ~ response:',
        response?.data,
      );
      setPassCode('');
      setModal(false);
      dispatch(setSelectedProfileData(response?.data?.profile_info));
      dispatch(setProfileSelcted(true));
      dispatch(setBubbleSelected(response?.data?.profile_info?.bubbles?.length > 0 ? true : false ))
      dispatch(setFeedsSelected(response?.data?.profile_info?.feed?.length>0 ? true : false))
    }
  };

  useEffect(() => {
    setModal(true);
  }, []);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      {/* <Header right Title={'Profile List'} showBack search /> */}

      <ImageBackground
        source={
          privacy == 'private'
            ? require('../Assets/Images/theme2.jpg')
            : require('../Assets/Images/Main.png')
        }
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight,
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: windowHeight,
            // backgroundColor:'green',
            // height: windowWidth,
          }}>
          <View
            style={{
              height: windowHeight * 0.2,
              width: windowHeight * 0.2,
              borderRadius: moderateScale(2, 0.6),
              overflow: 'hidden',
              marginBottom: moderateScale(50, 0.6),
            }}>
            <CustomImage
              onPress={() => {
                console.log('first');
                setModal(true);
              }}
              source={{uri: item?.photo}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <ActivityIndicator color="red" size={moderateScale(60, 0.6)} />
        </View>
        <Modal
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // height:windowHeight*0.3,
          }}
          isVisible={modal}
          hasBackdrop={true}
          onBackdropPress={() => {
            setModal(false);
            // setIsVisible(false)
          }}>
          <View
            style={{
              backgroundColor: 'black',
              // height:windowHeight*0.3,
              borderRadius: moderateScale(10, 0.6),
              paddingVertical: moderateScale(20, 0.3),
              paddingHorizontal: moderateScale(20, 0.3),
            }}>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(18, 0.6),
                // marginTop: moderateScale(20, 0.3),
                paddingHorizontal: moderateScale(30, 0.6),
                textAlign: 'center',
              }}
              isBold>
              Enter Your Passcode
            </CustomText>
            <TextInputWithTitle
              secureText={true}
              placeholder={'Passcode'}
              setText={setPassCode}
              value={passCode}
              viewHeight={0.06}
              viewWidth={0.82}
              inputWidth={0.8}
              border={1}
              borderColor={'#353535'}
              color={themeColor[1]}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(10, 0.3)}
              titleColor={'#353535'}
              marginTop={moderateScale(15, 0.3)}
              // textAlign={'center'}
            />
            <CustomButton
              onPress={() => {
                loginProfile();
                // navigationService.navigate('Profile', {item: item});
              }}
              marginTop={moderateScale(20, 0.3)}
              text={
                isLoading ? (
                  <ActivityIndicator size={'small'} color={'black'} />
                ) : (
                  'OK'
                )
              }
              textColor={Color.black}
              width={windowWidth * 0.15}
              height={windowHeight * 0.06}
              fontSize={moderateScale(15, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              bgColor={'#FFFFFF'}
              paddingHorizontal={moderateScale(5, 0.3)}
              marginRight={moderateScale(5, 0.3)}
            />
          </View>
        </Modal>
      </ImageBackground>
    </>
  );
};

export default LoginProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    backgroundColor: '#fff',
    borderRadius: (windowWidth * 0.2) / 2,
    borderWidth: 3,
    borderColor: '#33dd50',
    overflow: 'hidden',
    // marginBottom : moderateScale(20,0.3)
  },

  row: {
    width: windowWidth * 0.97,
    // height: windowHeight  * 0.1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: moderateScale(20, 0.6),
    marginBottom: moderateScale(5, 0.3),
    // backgroundColor : 'green',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    // paddingBottom : 20,
  },
  Text: {
    fontSize: moderateScale(19, 0.6),
    color: Color.white,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: moderateScale(20, 0.3),
  },
  View: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text2: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  mapview: {
    width: windowWidth,
    marginBottom: moderateScale(10, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
});
