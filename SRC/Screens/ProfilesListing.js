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
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import CardComponent from '../Components/CardComponent';
import {Get} from '../Axios/AxiosInterceptorFunction';
import {setProfileSelcted} from '../Store/slices/auth';
import {setSelectedProfileData} from '../Store/slices/common';

const ProfilesListing = () => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  const [isLoading, setIsLoading] = useState(false);
  const [bubbleData, setBubbleData] = useState([]);
  const dispatch = useDispatch()

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

  // const ProfileListData = [
  //   {
  //     id: 1,
  //     image: require('../Assets/Images/dummyman1.png'),
  //     desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     name: 'Book Author',
  //     profileType: 'Content creator',
  //     title: 'Private Account',
  //     close: true,
  //     check: false,
  //     edit: true,
  //     pending: false,
  //   },
  //   {
  //     id: 2,
  //     desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     image: require('../Assets/Images/dummyman4.png'),
  //     name: 'Alternative fitness',
  //     profileType: 'Enterpreneur',
  //     title: 'Public Account',
  //     close: true,
  //     check: false,
  //     edit: true,
  //     pending: false,
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/avatar.png'),
  //     desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     name: 'Alchol',
  //     profileType: 'Connector',
  //     title: 'Public Account',
  //     close: true,
  //     check: false,
  //     edit: true,
  //     pending: false,
  //   },
  //   {
  //     id: 4,
  //     image: require('../Assets/Images/dummyUser.png'),
  //     name: 'Bords Shooting',
  //     desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     title: 'Private Account',
  //     close: true,
  //     profileType: 'Explore',
  //     check: false,
  //     edit: true,
  //     pending: false,
  //   },
  // ];
  const data = [
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'njdfhjdf',
    },
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'hey',
    },
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'bye',
    },
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'good',
    },
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'great',
    },
    {
      image: require('../Assets/Images/avatar4.png'),
      name: 'great',
    },
  ];

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
          style={{
            fontSize: moderateScale(19, 0.6),
            color: Color.white,
            fontWeight: '700',
            textAlign: 'center',
            paddingVertical: moderateScale(20, 0.3),
          }}>
          who's watching?
        </CustomText>
        <View
          style={{
            width: windowWidth,
            marginBottom: moderateScale(10, 0.3),
            marginTop: moderateScale(10, 0.3),
          }}>
          <View
            style={{
              //   alignItems:'center',
              justifyContent: 'center',
              //   backgroundColor:'green',
              flexDirection: 'row',
              flexWrap: 'wrap',
              // width:windowWidth*0.2
            }}>
            {bubbleData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setSelectedProfileData(item));
                    dispatch(setProfileSelcted(true));
                  }}
                  style={{
                    width: windowWidth * 0.4,
                    paddingVertical: moderateScale(10, 0.3),
                    paddingHorizontal: moderateScale(30, 0.3),
                    // marginHorizontal:moderateScale(10,0.3),
                    // backgroundColor: 'red',
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
                        dispatch(setSelectedProfileData(item));
                        dispatch(setProfileSelcted(true));
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      // source={require('../Assets/Images/crown.png')}
                      source={{uri: item?.photo}}
                    />
                  </View>
                  <CustomText
                    // numberOfLines={1}
                    style={{
                      fontSize: moderateScale(15, 0.6),
                      color: Color.white,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    {item?.name}
                  </CustomText>
                </TouchableOpacity>
              );
            })}
            {/* <FlatList
              data={ProfileListData}
              contentContainerStyle={{
                marginBottom: moderateScale(30, 0.3),
              }}
              renderItem={({item, index}) => {
                return (
                  <CardComponent
                    item={item}
                    check={item?.check}
                    close={item?.close}
                    edit={item?.edit}
                    pending={item?.pending}
                  />
                );
              }}
            /> */}
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
});
