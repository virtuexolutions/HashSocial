import {
  View,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';
import React, {useState, useRef} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';

import CustomImage from './CustomImage';
import VideoController from './VideoController';
import OptionsMenu from 'react-native-options-menu';
import {Delete, Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';
import moment from 'moment';
import navigationService from '../navigationService';
import ComentsSection from './ComentsSection';
import numeral from 'numeral';
import {baseUrl} from '../Config';
import { theme } from 'native-base';

const PostComponentBubble = ({data, bubbleInfo}) => {
//  return  console.log("🚀 ~ file: PostComponentBubble.js:25 ~ PostComponentBubble ~ data:", data)
  const [like, setLike] = useState(data?.my_like ? true : false);
  const userData = useSelector(state => state.commonReducer.userData);
  const profileData = useSelector(state => state.commonReducer.selectedProfile);
  const [commentsCount, setCommentsCount] = useState(0)
  const refRBSheet = useRef();
  const MoreIcon = require('../Assets/Images/threedots.png');
  const token = useSelector(state => state.authReducer.token);


  const [loading, setloading] = useState(false);

  const editPost = () => {
    navigationService.navigate('AddPost', {data});
  };

  const deletePost = async () => {
    if(bubbleInfo?.remove_content.toLowerCase()=='yes' || bubbleInfo?.profile==profileData?.id){

      const url = `auth/post/${data?.id}`;
      setloading(true);
      const response = await Delete(url, apiHeader(token));
      setloading(false);
      if (response != undefined) {
      }
    }else{
      alert("You don't have permission to delete this post.")
    }
  };

  const likePost = async () => {
    const url = `auth/post_like`;
    const body = {
      post_id: data?.id,
      profile_id: profileData?.id,
    };
    setloading(true);
    const response = await Post(url, body, apiHeader(token));
    setloading(false);
    if (response != undefined) {
      setLike(!like);
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.postFooter}>
          <View style={styles.profileSection2}>
            <CustomImage
              source={{uri: `${baseUrl}/${data?.profile_info?.photo}`}}
              // source={{uri: data?.profile_info?.photo}}
              style={styles.image}
            />
          </View>

          <View
            style={{
              width: windowWidth * 0.65,
              justifyContent: 'center',
            }}>
            <CustomText
              isBold
              numberOfLines={1}
              style={{
                fontSize: moderateScale(15, 0.6),
              }}>
                {/* 'hkjhsdfjkhskjdhfkjsdhkhskdj' */}
              {data?.profile_info?.name}
            </CustomText>

            <CustomText style={{textAlign: 'left'}}>
              {moment(data?.created_at).fromNow()}
            </CustomText>
          </View>

          <OptionsMenu
            button={MoreIcon}
            buttonStyle={{
              width: 36,
              height: 30,
              tintColor: '#000',
            }}
            destructiveIndex={1}
            options={['Delete']}
            actions={[deletePost]}
          />
        </View>
        <CustomText style={[styles.caption ,{
          color:Color.themeColor,
    paddingVertical: moderateScale(10, 0.6),
        }]}>{JSON.parse(data?.hashtags)}</CustomText>
         
        <CustomText style={styles.caption}>{data?.caption}</CustomText>

        {data?.post_images?.length > 0 && (
          <View style={styles.actions}>
            {data?.post_images?.length > 0 ? (
              <View
                style={{
                  width: windowWidth * 0.9,
                  height: windowHeight * 0.3,
                }}>
                <CustomImage
                  source={{uri: data?.post_images[0]?.name}}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <VideoController item={data} />
            )}
          </View>
        )}
        <View
          style={[
            styles.imageContainer,
            // data?.post_images?.length > 0 && {position: 'absolute'},
          ]}>
          <View
            style={{
              width: like ? moderateScale(30, 0.6) : moderateScale(25, 0.6),
              height: like ? moderateScale(30, 0.6) : moderateScale(25, 0.6),
            }}>
            <CustomImage
              source={
                like
                  ? require('../Assets/Images/heart.png')
                  : require('../Assets/Images/heart3.png')
              }
              style={{
                height: '100%',
                width: '100%',
              }}
              onPress={() => {
                likePost();
              }}
              resizeMode="cover"
            />
          </View>

          <CustomText
            isBold
            style={styles.numLikes}>
            {(data?.my_like && like) ||(!data?.my_like && !like)  
              ? numeral(data?.total_likes_count).format('0a')
              : data?.my_like && !like
              ? numeral(data?.total_likes_count - 1).format('0a')
              : numeral(data?.total_likes_count + 1).format('0a')}
          </CustomText>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={styles.comments}>
            <CustomImage
              onPress={() => {
                refRBSheet.current.open();
              }}
              source={require('../Assets/Images/msg1.png')}
              style={[styles.image, {tintColor: 'white'}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <CustomText
            onPress={() => {
              refRBSheet.current.open();
            }}
            isBold
            style={styles.commentsText}>
            {data?.comments?.length+commentsCount}
          </CustomText>
        </View>
      </View>
      <ComentsSection refRBSheet={refRBSheet} data={data} setCommentsCount={setCommentsCount} />
    </>
  );
};

const styles = StyleSheet.create({
  profileSection2: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
    backgroundColor: '#336ecb',
    borderRadius: (windowHeight * 0.08) / 2,
    borderWidth: 2,
    borderColor: Color.themeColor,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {fontSize: moderateScale(12, 0.6), color: 'black'},
  profileSection2: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    backgroundColor: '#336ecb',
    borderRadius: (windowHeight * 0.06) / 2,
    borderWidth: 2,
    borderColor: Color.themeColor,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mainContainer: {
    width: windowWidth * 0.95,
    marginVertical: moderateScale(10, 0.6),
    paddingVertical: moderateScale(10, 0.3),
    backgroundColor: '#F5F5F5',
    borderRadius: moderateScale(10, 0.6),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  nameView: {
    flexDirection: 'row',
    width: windowWidth * 0.6,
    alignItems: 'center',
  },
  caption: {
    textAlign: 'left',
    marginLeft: moderateScale(15, 0.3),
    fontSize: moderateScale(13, 0.6),
    lineHeight: moderateScale(20, 0.6),
    // paddingVertical: moderateScale(10, 0.6),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(5, 0.3),
    bottom: -12,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  actions: {
    alignSelf: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    marginTop: moderateScale(10, 0.3),
    borderRadius: moderateScale(20, 0.6),
    overflow: 'hidden',
  },
  comments: {
    width: moderateScale(25, 0.6),
    height: moderateScale(25, 0.6),
    marginLeft: moderateScale(5, 0.3),
  },
  commentsText: {
    color: Color.black,
    marginLeft: moderateScale(5, 0.3),
    fontSize: moderateScale(13, 0.6),
    width: windowWidth * 0.13,
  },
  numLikes:{
    color: Color.black,
    marginLeft: moderateScale(2, 0.3),
    marginRight: moderateScale(10, 0.3),
    fontSize: moderateScale(13, 0.6),
  }
});

export default PostComponentBubble;
