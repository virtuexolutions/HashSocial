import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import Entypo from 'react-native-vector-icons/Entypo';
import {Icon} from 'native-base';
import TextInputWithTitle from './TextInputWithTitle';
import {useSelector} from 'react-redux';
import navigationService from '../navigationService';
import {FlatList} from 'react-native';
import PostComponentBubble from './PostComponentBubble';
import {Get} from '../Axios/AxiosInterceptorFunction';
import {useIsFocused} from '@react-navigation/native';
import { baseUrl } from '../Config';

// import { TextInput } from 'react-native-gesture-handler';

const Posts = ({onPress, bubbleId}) => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  const profileData = useSelector(state => state.commonReducer.selectedProfile);
//  console.log("🚀 ~ file: Posts.js:32 ~ Posts ~ profileData:", profileData)

  const isFocused = useIsFocused();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const url = `auth/post/${bubbleId}?profile_id=${profileData?.id}`;
     console.log("🚀 ~ file: Posts.js:42 ~ getPosts ~ url:", url)
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
      console.log(
        '🚀 ~ file: Posts.js:36 ~ getPosts ~ response:',
        response?.data,
      );
      setPosts(response?.data?.post_info);
    }
  };

  useEffect(() => {
    getPosts();
  }, [isFocused]);

  const PostData = [
    {
      id: 1,
      Name: 'Meiko Nakahara',
      date: '19 July',
      desc: `124 degrees can't stop us from running into the desert for some quick potraits`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/archive.png'),
      video: null,
      Like: 15,
      love: 1100,
      comment: 44,
      View: null,
      blueTick: true,
      commentData: [
        {
          id: 1,
          name: 'James',
          comment: 'Looking Geourgous',
          pic: require('../Assets/Images/avatar6.jpg'),
          Time: '16',
        },
        {
          id: 2,
          name: 'Levik',
          comment: 'Nice',
          pic: require('../Assets/Images/avatar4.png'),
          Time: '3',
        },
        {
          id: 3,
          name: 'Frank',
          comment: 'Good',
          pic: require('../Assets/Images/avatar3.png'),
          Time: '10',
        },
        {
          id: 4,
          name: 'Salina',
          comment: 'Killer',
          pic: require('../Assets/Images/avatar1.png'),
          Time: '5',
        },
      ],
    },
    {
      id: 2,
      Name: 'Angelina julie',
      date: '24 Aug',
      desc: 'The mountains are calling, and I must go!',
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/art.png'),
      video: null,
      // video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      Like: 357,
      love: 4100,
      comment: 205,
      View: 1084,
      blueTick: false,
      commentData: [
        {
          id: 1,
          name: 'James',
          comment: 'Looking Geourgous',
          pic: require('../Assets/Images/avatar6.jpg'),
          Time: '16',
        },
        {
          id: 2,
          name: 'Levik',
          comment: 'Nice',
          pic: require('../Assets/Images/avatar4.png'),
          Time: '3',
        },
        {
          id: 3,
          name: 'Frank',
          comment: 'Good',
          pic: require('../Assets/Images/avatar3.png'),
          Time: '10',
        },
        {
          id: 4,
          name: 'Salina',
          comment: 'Killer',
          pic: require('../Assets/Images/avatar1.png'),
          Time: '5',
        },
      ],
    },

    {
      id: 3,
      Name: 'Gilan kamel ',
      date: '1 Aug',
      desc: 'Pastries in paris or take a pasta making class in italy. Where would you go if you could save 70% or more on Europe',
      profileImage: require('../Assets/Images/avatar4.png'),
      image: null,
      video: null,
      Like: 357,
      love: 4100,
      comment: 205,
      View: null,
      blueTick: true,
      commentData: [
        {
          id: 1,
          name: 'James',
          comment: 'Looking Geourgous',
          pic: require('../Assets/Images/avatar6.jpg'),
          Time: '16',
        },
        {
          id: 2,
          name: 'Levik',
          comment: 'Nice',
          pic: require('../Assets/Images/avatar4.png'),
          Time: '3',
        },
        {
          id: 3,
          name: 'Frank',
          comment: 'Good',
          pic: require('../Assets/Images/avatar3.png'),
          Time: '10',
        },
        {
          id: 4,
          name: 'Salina',
          comment: 'Killer',
          pic: require('../Assets/Images/avatar1.png'),
          Time: '5',
        },
      ],
    },
    {
      id: 4,
      Name: 'Great John',
      date: '4 Dec',
      desc: `Capturing the pure joy of childhood creativity! These little artists are turning blank canvases into vibrant masterpieces. It's incredible to witness their boundless imaginations at work.`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/tour1.jpg'),
      video: null,
      Like: 457,
      love: 1800,
      comment: 905,
      View: null,
      blueTick: true,
      commentData: [
        {
          id: 1,
          name: 'James',
          comment: 'Looking Geourgous',
          pic: require('../Assets/Images/avatar6.jpg'),
          Time: '16',
        },
        {
          id: 2,
          name: 'Levik',
          comment: 'Nice',
          pic: require('../Assets/Images/avatar4.png'),
          Time: '3',
        },
        {
          id: 3,
          name: 'Frank',
          comment: 'Good',
          pic: require('../Assets/Images/avatar3.png'),
          Time: '10',
        },
        {
          id: 4,
          name: 'Salina',
          comment: 'Killer',
          pic: require('../Assets/Images/avatar1.png'),
          Time: '5',
        },
      ],
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: moderateScale(10, 0.6),
          alignItems: 'center',
          paddingVertical: moderateScale(10, 0.6),
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <View style={styles.profileImage}>
          <CustomImage
            // source={require('../Assets/Images/fitness2.png')}
            source={{uri: `${baseUrl}/${profileData?.photo}`}}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: moderateScale(10, 0.6),
            width: windowWidth * 0.7,
            height: windowHeight * 0.05,
            paddingHorizontal: moderateScale(10, 0.6),
            justifyContent: 'center',
          }}
          onPress={() => {
            onPress();
          }}>
          <CustomText
            style={{
              color: 'black',
              fontSize: moderateScale(13, 0.6),
              width: windowWidth * 0.6,
            }}
            onPress={() => {
              onPress();
            }}>
            What's on your mind?
          </CustomText>
        </TouchableOpacity>

        <View>
          <Icon name={'images'} as={Entypo} color={'white'} size={7} />
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loaderView}>
          <ActivityIndicator color={Color.white} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={posts}
          contentContainerStyle={{
            paddingBottom: moderateScale(80, 0.3),
          }}
          renderItem={({item, index}) => {
            return <PostComponentBubble data={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  loaderView: {
    // backgroundColor: 'red',
    width: windowWidth,
    height: windowHeight * 0.4,
    justifyContent: 'center',
  },
  profileImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: Color.white,
    overflow: 'hidden',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: (windowWidth * 0.1) / 2,
    // marginTop: moderateScale(12, 0.3),
    // marginLeft: moderateScale(5, 0.3),
    // marginRight: moderateScale(8, 0.3),
  },
});
