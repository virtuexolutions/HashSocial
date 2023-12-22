import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useSelector} from 'react-redux';
import CardComponent from '../Components/CardComponent';
import BubbleCard from '../Components/BubbleCard';
import { Get } from '../Axios/AxiosInterceptorFunction';
import { useIsFocused } from '@react-navigation/native';
// const {height, width} = Dimensions.get('window');

const BubbleList = () => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const [selectedTab, setSelectedTab] = useState(1);
  const [yourBubbles, setYourBubbles] = useState([])
  const [requests, setRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const isFocused = useIsFocused()

  const profileData = useSelector(state=> state.commonReducer.selectedProfile)
  const token = useSelector(state=> state.authReducer.token)


  const getYourBubbles = async () => {
    const url = `auth/my_community/${profileData?.id}`;
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
       console.log(
        '🚀 ~ file: Events.js:34 ~ getEvents ~ response:',
        response?.data,
      );
      setYourBubbles(response?.data?.community_info);
    }
  };
  useEffect(() => {
    getYourBubbles();
  }, [isFocused]);



  const BubbleListData = [
    {
      id: 1,
      image: require('../Assets/Images/gallery3.png'),
      name: 'Book Author',
      Time: 'Today 9:00 Am',
      title: 'Owner Mood Admin',
      bubble: true,
      close: true,
      check: false,
      edit: true,
      pending: false,
      author: 'alvin',
      moderator: 'zenith',
      architecture: 'Creator',
    },
    {
      id: 2,
      image: require('../Assets/Images/dummyman1.png'),
      name: 'Alternative fitness',
      Time: 'Today 9:00 Am',
      title: 'Member',
      bubble: true,
      close: true,
      check: true,
      edit: false,
      pending: false,
      author: 'alvin',
      moderator: 'zenith',
      architecture: 'Creator',
    },
    {
      id: 3,
      image: require('../Assets/Images/bubble11.png'),
      name: 'Alchol',
      Time: 'Today 9:00 Am',
      title: 'Request to join awaiting Response',
      close: false,
      bubble: true,
      check: false,
      edit: false,
      pending: true,
      author: 'alvin',
      moderator: 'zenith',
      architecture: 'Creator',
    },
    {
      id: 4,
      image: require('../Assets/Images/bubble1.png'),
      name: 'Adventure',
      Time: 'Today 9:00 Am',
      title: 'Invite to bubble Need to help',
      close: true,
      bubble: true,
      check: false,
      edit: true,
      pending: false,
      author: 'jonathan',
      moderator: 'alvin',
      architecture: 'Creator',
    },
    {
      id: 5,
      image: require('../Assets/Images/gallery5.png'),
      name: 'Bords Shooting',
      Time: 'Today 9:00 Am',
      title: 'Requested to join awaiting for response',
      close: false,
      bubble: true,
      check: false,
      edit: false,
      pending: true,
      author: 'alvin',
      moderator: 'zenith',
      architecture: 'Creator',
    },
    {
      id: 6,
      image: require('../Assets/Images/fitness2.png'),
      name: 'Bords Shooting',
      Time: 'Today 9:00 Am',
      title: 'Member',
      close: true,
      bubble: true,
      check: true,
      edit: false,
      pending: false,
      author: 'alvin',
      moderator: 'zenith',
      architecture: 'Creator',
    },
  ];

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Bubble List'} showBack search />

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: windowWidth * 0.9,
            marginTop: moderateScale(10, 0.3),
          }}>
          <CustomText
            numberOfLines={1}
            children={'Your bubbles'}
            style={{
              ...styles.activityText,
              ...{
                borderBottomColor: selectedTab == 1 ? 'black' : 'white',
              },
            }}
            onPress={() => {
              setSelectedTab(1);
            }}
            isBold
          />
          <CustomText
            numberOfLines={1}
            children={'Requests'}
            style={{
              ...styles.activityText,
              ...{
                borderBottomColor: selectedTab == 2 ? 'black' : 'white',
              },
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
            isBold
          />
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            width: windowWidth,
            marginTop: moderateScale(5, 0.3),
            marginBottom: moderateScale(20, 0.3),
          }}>
          <FlatList
            data={yourBubbles}
            contentContainerStyle={{
              marginBottom: moderateScale(10, 0.3),
            }}
            renderItem={({item, index}) => {
              return (
                <BubbleCard
                  item={item}
                  check={item?.check}
                  close={item?.close}
                  edit={item?.edit}
                  pending={item?.pending}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default BubbleList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    backgroundColor: '#fff',
    borderRadius: (windowWidth * 0.2) / 2,
    overflow: 'hidden',
  },
  activityText: {
    fontSize: moderateScale(17, 0.6),
    color: Color.white,
    width: windowWidth * 0.4,
    height: windowHeight * 0.04,
    textAlign: 'center',
    borderBottomWidth: 1.5,
  },
  line: {
    width: windowWidth * 0.9,
    height: 2,
    backgroundColor: 'white',
    // backgroundColor:'white',
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.5,
    marginBottom: moderateScale(10, 0.3),
  },
  row: {
    width: windowWidth * 1,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20, 0.6),
    marginBottom: moderateScale(5, 0.3),
  },
});
