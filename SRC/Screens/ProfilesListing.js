import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
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
import {setProfileSelcted} from '../Store/slices/auth';
import {setSelectedProfileData} from '../Store/slices/common';
import navigationService from '../navigationService';

const ProfilesListing = () => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  const [isLoading, setIsLoading] = useState(false);
  const [bubbleData, setBubbleData] = useState([]);
  const dispatch = useDispatch();

  const profileListing = async () => {
    const url = 'auth/profile';
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
      console.log(
        '🚀 ~ file: ProfileList.js:37 ~ profileListing ~ response:',
        response?.data,
      );

      setBubbleData(response?.data?.profile_info);
    }
  };

  const loginProfile = async () => {
    const url = 'auth/profile_login';
    const body = {
      name: '',
      passcode: '',
    };
    setIsLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setIsLoading(true);

    if (response != undefined) {
      return console.log(
        '🚀 ~ file: ProfilesListing.js:62 ~ loginProfile ~ response:',
        response,
      );
      dispatch(setSelectedProfileData(response?.data));
      dispatch(setProfileSelcted(true));
    }
  };

  useEffect(() => {
    profileListing();
  }, []);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Profile List'} showBack search />

      <ImageBackground
        source={
          privacy == 'private'
            ? require('../Assets/Images/theme2.jpg')
            : require('../Assets/Images/Main.png')
        }
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <CustomText
          // numberOfLines={1}
          style={styles.Text}>
          who's watching?
        </CustomText>
        <View style={styles.mapview}>
          <View style={styles.View}>
            {bubbleData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    
                    navigationService.navigate('ProfileLogin', {item});
                  }}
                  style={{
                    width: windowWidth * 0.4,
                    paddingVertical: moderateScale(10, 0.3),
                    paddingHorizontal: moderateScale(30, 0.3),
                  }}>
                  <View
                    style={{
                      height: windowHeight * 0.12,
                      width: windowHeight * 0.12,
                      borderRadius: (windowHeight * 0.12) / 2,
                      overflow: 'hidden',
                    }}>
                    <CustomImage
                      onPress={() => {
                        navigationService.navigate('ProfileLogin', {item});
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      source={{uri: item?.photo}}
                    />
                  </View>
                  <CustomText style={styles.text2}>{item?.name}</CustomText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProfilesListing;

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
