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

const Posts = ({onPress, bubbleId, bubbleInfo}) => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  console.log("🚀 ~ file: Posts.js:33 ~ Posts ~ token:", token)
  const profileData = useSelector(state => state.commonReducer.selectedProfile);

  const isFocused = useIsFocused();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const url = `auth/post/${bubbleId}?profile_id=${profileData?.id}`;
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
     console.log("🚀 ~ file: Posts.js:46 ~ getPosts ~ response:", JSON.stringify(response?.data?.post_info))
  
      setPosts(response?.data?.post_info?.filter(item => item?.post_videos?.length == 0));
    }
  };

  useEffect(() => {
    getPosts();
  }, [isFocused]);



  return (
    <View>
     {(bubbleInfo?.post_privacy?.toLowerCase() == 'yes' || bubbleInfo?.profile_id == profileData?.id) && <View
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
      </View>}
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
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  height: windowHeight * 0.4,
                  alignItems: 'center',
                }}>
                <CustomText style={{color: Color.black}} isBold>
                  No Posts Added yet!
                </CustomText>
              </View>
            );
          }}
          renderItem={({item, index}) => {
            return <PostComponentBubble data={item} bubbleInfo={bubbleInfo} />;
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
