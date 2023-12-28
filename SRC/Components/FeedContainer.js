import React, {useState, useRef} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Color from '../Assets/Utilities/Color';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Video from 'react-native-video';
import numeral from 'numeral';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import {useSelector} from 'react-redux';
import {baseUrl} from '../Config';
import ComentsSection from './ComentsSection';
import {Post} from '../Axios/AxiosInterceptorFunction';

const FeedContainer = ({item, source}) => {
  const profileData = useSelector(state => state.commonReducer.selectedProfile);
  const token = useSelector(state => state.authReducer.token);
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const [like, setLike] = useState(item?.my_like ? true : false);
  const refRBSheet = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [loading, setloading] = useState(false);

  const likePost = async () => {
    const url = `auth/post_like`;
    const body = {
      post_id: item?.id,
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
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.card,
        {height: windowHeight, paddingBottom: moderateScale(0, 0.3)},
      ]}>
      <Video
        resizeMode={'stretch'}
        repeat={true}
        pause={false}
        controls={true}
        // source={require('../Assets/Images/video1.mp4')}
        source={{uri: source}}
        style={styles.backgroundVideo}
        onProgress={data => {
          console.log('hereeeeeeeeeee================>>>>>', data);
          setDuration(data?.playableDuration);
          setCurrentTime(data?.currentTime);
        }}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.9}}
        colors={['#ffffff00', '#000000']}
        style={{
          position: 'absolute',
          bottom: 0,
          justifyContent: 'flex-end',
          shadowOffset: {height: 2, width: 0},
          shadowOpacity: 1,
          shadowRadius: 4,
          width: '100%',
          paddingBottom: moderateScale(30, 0.3),
        }}>
        <View
          style={{
            height: windowHeight * 0.4,
            width: windowWidth * 0.7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(40, 0.6),
              paddingLeft: moderateScale(5, 0.6),
            }}>
            <View
              style={{
                width: windowWidth * 0.1,
                height: windowWidth * 0.1,
                backgroundColor: 'white',
                overflow: 'hidden',
                borderColor: '#33dd50',
                borderWidth: 2,
                borderRadius: (windowWidth * 0.1) / 2,
                marginTop: moderateScale(12, 0.3),
                marginLeft: moderateScale(5, 0.3),
                marginRight: moderateScale(8, 0.3),
              }}>
              <CustomImage
                source={
                  item?.profile_info?.photo
                    ? {uri: `${baseUrl}/${item?.profile_info?.photo}`}
                    : require('../Assets/Images/avatar3.png')
                }
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.white,
                  marginTop: moderateScale(12, 0.3),
                  textAlign: 'left',
                }}
                isBold>
                {item?.profile_info?.name}
              </CustomText>

              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(10, 0.6),
                  color: Color.white,
                  textAlign: 'left',
                }}>
                new york
              </CustomText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: windowWidth * 0.5,
              alignItems: 'center',
              marginTop: moderateScale(30, 0.3),
              paddingLeft: moderateScale(5, 0.6),
            }}>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.white}}>
              50 Views
            </CustomText>
            <View
              style={{
                width: 1,
                height: windowHeight * 0.02,
                backgroundColor: '#fff',
              }}></View>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.white}}>
              {item?.comments?.length} comments
            </CustomText>
          </View>

          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: Color.white,
              textAlign: 'left',
              paddingLeft: moderateScale(15, 0.6),
              marginTop: moderateScale(10, 0.3),
            }}>
            {item?.caption}
          </CustomText>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 35,
          }}>
          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                likePost();
              }}
              style={{
                height: moderateScale(30, 0.6),
                width: moderateScale(30, 0.6),
                borderRadius: moderateScale(30, 0.6) / 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={like == true ? 'like1' : 'like2'}
                as={AntDesign}
                color={like == true ? 'white' : 'white'}
                size={like == true ? 8 : 5}
              />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              {(item?.my_like && like) || (!item?.my_like && !like)
                ? numeral(item?.total_likes_count).format('0a')
                : item?.my_like && !like
                ? numeral(item?.total_likes_count - 1).format('0a')
                : numeral(item?.total_likes_count + 1).format('0a')}
            </CustomText>
          </View>

          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}
              style={{
                height: moderateScale(30, 0.6),
                width: moderateScale(30, 0.6),
                borderRadius: moderateScale(30, 0.6) / 2,
                backgroundColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'comments'}
                as={FontAwesome5}
                color={'white'}
                size={5}
              />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              style={{fontSize: moderateScale(12, 0.6), color: Color.white}}>
              {item?.comments?.length}
            </CustomText>
          </View>

          <ComentsSection refRBSheet={refRBSheet} data={item} />
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: Color.themeColor,
            height: windowWidth * 0.03,
            width: currentTime
              ? duration
                ?`${(currentTime / duration)*100}%`
                : '0%'
              : '0%',
          }}></View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileSection1: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    backgroundColor: '#fff',
    borderRadius: (windowHeight * 0.05) / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#33dd50',
    justifyContent: 'center',
  },
  card: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    height: '100%',
    width: '100%',
  },

  text: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
    textShadowColor: Color.black,
  },
  text1: {
    fontSize: moderateScale(15, 0.6),
    color: Color.veryLightGray,
    textShadowColor: Color.black,
  },
  view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  israelite: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.1,
    borderRadius: moderateScale(8, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default FeedContainer;
