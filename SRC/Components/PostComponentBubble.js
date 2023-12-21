import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  video,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import {Divider} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import CustomImage from './CustomImage';
import ShowMoreAndShowLessText from './ShowMoreAndShowLessText';
import VideoController from './VideoController';
import OptionsMenu from 'react-native-options-menu';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FlatList} from 'react-native';
import Lottie from 'lottie-react-native';
import {Image} from 'react-native-svg';
import {Delete, Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';
import moment from 'moment';
import navigationService from '../navigationService';
import TextInputWithTitle from './TextInputWithTitle';
import ComentsSection from './ComentsSection';
import numeral from 'numeral'

const PostComponentBubble = ({data}) => {
  const [like, setLike] = useState(data?.my_like ? data?.my_like : false);
  const userData = useSelector(state => state.commonReducer.userData);
  const profileData = useSelector(state => state.commonReducer.selectedProfile);
  const refRBSheet = useRef();
  const MoreIcon = require('../Assets/Images/threedots.png');
  const token = useSelector(state => state.authReducer.token);

  const [animationStarted, setAnimationStarted] = useState(false);
  const [loading, setloading] = useState(false);
  const lottieAnimation = useRef();

  const editPost = () => {
    navigationService.navigate('AddPost', {data});
  };

  const deletePost = async () => {
    const url = `auth/post/${data?.id}`;
    setloading(true);
    const response = await Delete(url, apiHeader(token));
    setloading(false);
    if (response != undefined) {
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
      <View
        style={{
          width: windowWidth * 0.95,
          marginVertical: moderateScale(10, 0.6),
          paddingVertical: moderateScale(10, 0.3),
          backgroundColor: '#F5F5F5',
          borderRadius: moderateScale(10, 0.6),
          alignSelf: 'center',
          // marginTop: moderateScale(10, 0.3),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
            // marginTop: moderateScale(10, 0.3),
          }}>
          <View style={styles.profileSection2}>
            <CustomImage
              source={{uri: data?.profile_info?.photo}}
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="contain"
            />
          </View>

          <View style={{width: windowWidth * 0.65, justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth * 0.6,
                // backgroundColor : 'red',
                alignItems: 'center',
              }}>
              <CustomText
                isBold
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(15, 0.6),
                }}>
                {data?.profile_info?.name}
              </CustomText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CustomText style={{textAlign: 'left'}}>
                {moment(data?.created_at).fromNow()}
              </CustomText>
            </View>
          </View>

          <OptionsMenu
            button={MoreIcon}
            buttonStyle={{
              width: 36,
              height: 30,
              tintColor: '#000',
            }}
            destructiveIndex={1}
            options={['Edit', 'Delete']}
            actions={[editPost, deletePost]}
          />
        </View>

        <View
          style={{
            width: windowWidth * 0.9,
            // backgroundColor:'red',
            marginTop: moderateScale(8, 0.3),
          }}>
          <CustomText
            style={{
              textAlign: 'left',
              marginLeft: moderateScale(15, 0.3),
              fontSize: moderateScale(13, 0.6),
              lineHeight: moderateScale(20, 0.6),
            }}>
            {data?.caption}
          </CustomText>
        </View>
        {data?.post_images?.length > 0 && (
          <View
            style={{
              alignSelf: 'center',
              width: windowWidth * 0.9,
              height: windowHeight * 0.3,
              marginTop: moderateScale(10, 0.3),
              borderRadius: moderateScale(20, 0.6),
              overflow: 'hidden',
            }}>
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
                <View
                  style={{
                    flexDirection: 'row',
                    width: windowWidth,
                    height: windowHeight * 0.06,
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    paddingHorizontal: moderateScale(10, 0.3),

                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // width: windowWidth * 0.25,
                      justifyContent:'space-between',
                      // backgroundColor: 'green',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width:like ?  moderateScale(30, 0.6) : moderateScale(25, 0.6),
                        height: like ?  moderateScale(30, 0.6) : moderateScale(25, 0.6),
                        // backgroundColor:'purple',
                        
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
                      style={{
                        color: Color.black,
                        marginLeft: moderateScale(2, 0.3),
                        marginRight: moderateScale(10, 0.3),
                        fontSize: moderateScale(13, 0.6),
                        // width: windowWidth * 0.16,
                      }}>
                      {like ? numeral(data?.total_likes_count+1).format('0a'): numeral(data?.total_likes_count).format('0a')}
                    </CustomText>
                    <TouchableOpacity
                      onPress={() => {
                        refRBSheet.current.open();
                      }}
                      style={{
                        width: moderateScale(25, 0.6),
                        height: moderateScale(25, 0.6),
                        marginLeft:moderateScale(5,.3),
                      }}>
                      <CustomImage
                        onPress={() => {
                          refRBSheet.current.open();
                        }}
                        source={require('../Assets/Images/msg1.png')}
                        style={{
                          height: '100%',
                          width: '100%',
                          tintColor: 'white',
                        }}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <CustomText
                      onPress={() => {
                        refRBSheet.current.open();
                      }}
                      isBold
                      style={{
                        color: Color.black,
                        marginLeft: moderateScale(5, 0.3),
                        fontSize: moderateScale(13, 0.6),
                        width: windowWidth * 0.13,
                      }}>
                      {data?.comments?.length}
                    </CustomText>
                  </View>
                </View>
              </View>
            ) : (
              <VideoController item={data} />
            )}
          </View>
        )}
      </View>
      <ComentsSection refRBSheet={refRBSheet} data={data} />
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
});

export default PostComponentBubble;
