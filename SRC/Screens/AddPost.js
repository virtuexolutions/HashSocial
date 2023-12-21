import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {Icon} from 'native-base';
import Video from 'react-native-video';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import ImagePickerModal from '../Components/ImagePickerModal';
import CustomImage from '../Components/CustomImage';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useNavigation} from '@react-navigation/native';
import OptionsMenu from 'react-native-options-menu';


const AddPost = props => {
  const bubbleId = props?.route?.params?.bubbleId;
  const data = props?.route?.params?.data;
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  const profileData = useSelector(state => state.commonReducer.selectedProfile);
  const [selectedTab, setSelectedTab] = useState('Tag People');
  const [image, setImage] = useState({});
  const [images, setImages] = useState(
    data?.post_images ? data?.post_images : [],
  );
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(
    data?.caption ? data?.caption : '',
  );
  const [imagePickerVisible, setImagePickerVisible] = useState(false);
  const [videoPicker, setVideoPicker] = useState(false);
  const [hashtag, setHashtag] = useState({});
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState(
    data?.post_videos ? data?.post_videos : [],
  );
  const [hashtags, setHashtags] = useState(
    data?.hashtags ? JSON.parse(data?.hashtags) : [],
  );
  const MoreIcon = require('../Assets/Images/threedots.png');

  const navigation = useNavigation();

  useEffect(() => {
    if (Object.keys(image).length > 0) {
      setImages(prev => [...prev, image]);
      setImage({});
    }
  }, [image]);

  useEffect(() => {
    if (Object.keys(video).length > 0) {
      setVideos(prev => [...prev, video]);
      setVideo({});
    }
  }, [video]);

  const AddPost = async () => {
    const url = 'auth/post';
    const formData = new FormData();
    const body = {
      caption: description,
      profile_id: profileData?.id,
      // hashtags: hashtags,
      community_id: bubbleId,
    };
    if (images.length == 0 && videos.length == 0 && description == '') {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            ` please fill atleast one feild`,
            ToastAndroid.SHORT,
          )
        : Alert.alert(` plaease fill atleast one feild`);
    } else {
      for (let key in body) {
        formData.append(key, body[key]);
      }
      if (images.length > 0) {
        images?.map((item, index) =>
          formData.append(`image[${index}]`, images[index]),
        );
      }
      if (videos.length > 0) {
        videos?.map((item, index) =>
          formData.append(`video[${index}]`, videos[index]),
        );
      }
      if (hashtags.length > 0) {
        hashtags?.map((item, index) =>
          formData.append(`hashtags[${index}]`, hashtags[index]),
        );
      }
    }

    console.log('🚀 ~ file: AddPost.js:64 ~ AddPost ~ formData:', formData);

    setLoading(true);
    const response = await Post(url, formData, apiHeader(token));
    setLoading(false);
    if (response != undefined) {
     
      navigation.goBack();
    }
  };

  const UpdatePost = async () => {
    const url = 'auth/post';
    const formData = new FormData();
    const body = {
      caption: description,
      hashtags: hashtags[0],
      community_id: bubbleId,
    };
    if (images.length == 0 && videos.length == 0 && description == '') {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            ` please fill atleast one feild`,
            ToastAndroid.SHORT,
          )
        : Alert.alert(` plaease fill atleast one feild`);
    } else {
      for (let key in body) {
        formData.append(key, body[key]);
      }
      if (images.length > 0) {
        images?.map((item, index) =>
          formData.append(`image[${index}]`, images[index]),
        );
      }
      if (videos.length > 0) {
        videos?.map((item, index) =>
          formData.append(`video[${index}]`, videos[index]),
        );
      }
      if (hashtags.length > 0) {
        hashtags?.map((item, index) =>
          formData.append(`hashtags[${index}]`, hashtags[index]),
        );
      }
    }

    console.log('🚀 ~ file: AddPost.js:64 ~ AddPost ~ formData:', formData);

    setLoading(true);
    const response = await Post(url, formData, apiHeader(token));
    setLoading(false);
    if (response != undefined) {
      return console.log(
        '🚀 ~ file: AddPost.js:74 ~ AddPost ~ response:',
        response?.data,
      );
      navigation.goBack();
    }
  };
  const Video = ()=>{
      if (videos.length==0 && images.length == 0) {
        setVideoPicker(true);
      } else {
        Platform.OS == 'android'
          ? ToastAndroid.show(
              'you can only add one image',
              ToastAndroid.SHORT,
            )
          : Alert.alert('you can select only five images');
      }
  }

  const Image =()=>{
    if (videos?.length == 0 && images.length < 5) {
      setImagePickerVisible(true);
    } else {
      Platform.OS == 'android'
        ? ToastAndroid.show(
            'you can select only five images.',
            ToastAndroid.SHORT,
          )
        : Alert.alert('you can select only five images');
    }
  }

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header showBack Title={'ADD POST'} right />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          minHeight: windowHeight * 0.9,
        }}>
        <ImageBackground
          source={
            privacy == 'private'
              ? require('../Assets/Images/theme2.jpg')
              : require('../Assets/Images/Main.png')
          }
          resizeMode={'cover'}
          style={{
            width: windowWidth,
            height: windowHeight * 0.9,
            // justifyContent : 'center',
            alignItems: 'center',
          }}>
          <CustomText
            style={styles.title}
            isBold={true}
            children={' Write Captions'}
          />
          <TextInputWithTitle
            maxLength={2000}
            secureText={false}
            placeholder={'Description'}
            setText={setDescription}
            value={description}
            viewHeight={0.22}
            viewWidth={0.9}
            inputWidth={0.85}
            marginTop={moderateScale(5, 0.3)}
            color={Color.red}
            border={1}
            // marginLeft={moderateScale(10, 0.3)}
            borderColor={Color.white}
            placeholderColor={Color.themeLightGray}
            multiline
          />
          {/* <CustomText style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </CustomText> */}

          {/* <CustomText
            style={[styles.title, {marginTop: moderateScale(10, 0.3)}]}
            isBold={true}
            children={'Add Images'}
          />
          <View style={styles.imagesContainer}>
            {images?.map(item => {
              return (
                <View style={styles.image}>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 2,
                      top: 2,
                      zIndex: 1,
                      // backgroundColor: 'green',
                    }}
                    onPress={() => {
                      setImages(images.filter(data => data?.id != item?.id));
                    }}>
                    <Icon
                      name={'cross'}
                      color={Color.white}
                      as={Entypo}
                      onPress={() => {
                        setImages(
                          images.filter(data => data?.uri != item?.uri),
                        );
                      }}
                    />
                  </TouchableOpacity>
                  <CustomImage
                    style={{width: '100%', height: '100%'}}
                    source={{uri: item?.uri ? item?.uri : item?.name}}
                  />
                </View>
              );
            })}
            {images.length < 5 && (
              <TouchableOpacity
                style={styles.plus}
                onPress={() => {
                  if (images.length < 5) {
                    setImagePickerVisible(true);
                  } else {
                    Platform.OS == 'android'
                      ? ToastAndroid.show(
                          'you can select only five images.',
                          ToastAndroid.SHORT,
                        )
                      : Alert.alert('you can select only five images');
                  }
                }}>
                <Icon
                  name="plus"
                  as={Entypo}
                  size={25}
                  color={'black'}
                  onPress={() => {
                    if (images.length < 5) {
                      setImagePickerVisible(true);
                    } else {
                      Platform.OS == 'android'
                        ? ToastAndroid.show(
                            'you can select only five images.',
                            ToastAndroid.SHORT,
                          )
                        : Alert.alert('you can select only five images.');
                    }
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          <CustomText
            style={[styles.title, {marginTop: moderateScale(10, 0.3)}]}
            isBold={true}
            children={'Add Video'}
          />
          <View style={styles.imagesContainer}>
            {videos?.map(item => {
              return <VideoComponent item={item} />;
            })}
            {videos.length < 5 && (
              <TouchableOpacity
                style={styles.plus}
                onPress={() => {
                  if (videos.length < 5) {
                    setVideoPicker(true);
                  } else {
                    Platform.OS == 'android'
                      ? ToastAndroid.show(
                          'you can select only five images.',
                          ToastAndroid.SHORT,
                        )
                      : Alert.alert('you can select only five images');
                  }
                }}>
                <Icon
                  name="plus"
                  as={Entypo}
                  size={25}
                  color={'black'}
                  onPress={() => {
                    if (videos.length < 5) {
                      setVideoPicker(true);
                    } else {
                      Platform.OS == 'android'
                        ? ToastAndroid.show(
                            'you can select only five images.',
                            ToastAndroid.SHORT,
                          )
                        : Alert.alert('you can select only five images.');
                    }
                  }}
                />
              </TouchableOpacity>
            )}
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: windowWidth * 0.9,
              paddingVertical: moderateScale(10, 0.6),
              alignItems:'space-between',
              // backgroundColor:'red'
            }}>
            <CustomText
              style={[
                styles.title,
                {marginTop: moderateScale(10, 0.3), width: windowWidth * 0.5},
              ]}
              isBold={true}
              children={'Add Media'}
            />
           <OptionsMenu
            button={MoreIcon}
            buttonStyle={{
              width: 36,
              height: 30,
              tintColor: '#000',
            }}
            destructiveIndex={1}
            options={['Video', 'Image']}
            actions={[Video, Image]}
          />
          </View>
          <View style={styles.imagesContainer}>
            {images?.map(item => {
              return (
                <View style={styles.image}>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 2,
                      top: 2,
                      zIndex: 1,
                      // backgroundColor: 'green',
                    }}
                    onPress={() => {
                      setImages(images.filter(data => data?.id != item?.id));
                    }}>
                    <Icon
                      name={'cross'}
                      color={Color.white}
                      as={Entypo}
                      onPress={() => {
                        setImages(
                          images.filter(data => data?.uri != item?.uri),
                        );
                      }}
                    />
                  </TouchableOpacity>
                  <CustomImage
                    style={{width: '100%', height: '100%'}}
                    source={{uri: item?.uri ? item?.uri : item?.name}}
                  />
                </View>
              );
            })}
         
          </View>
          <View style={styles.videoContainer}>
            {videos?.map(item => {
              return <VideoComponent item={item} />;
            })}
          
          </View>


          

          <CustomText
            style={[styles.title, {marginTop: moderateScale(10, 0.3)}]}
            isBold={true}
            children={'Add hashtag'}
          />
          <View style={styles.mapview}>
            {hashtags.map(item => {
              return (
                <CustomText
                  style={[
                    styles.mapText,
                    {
                      backgroundColor: themeColor[1],
                    },
                  ]}>
                  {item}
                </CustomText>
              );
            })}
          </View>
          <View style={styles.hashtagview}>
            <TextInputWithTitle
              // title={'Title'}
              secureText={false}
              placeholder={'#Hashtags'}
              setText={setHashtag}
              value={hashtag}
              viewHeight={0.06}
              viewWidth={0.7}
              inputWidth={0.65}
              backgroundColor={'white'}
              border={1}
              // marginTop={moderateScale(10, 0.3)}
              borderColor={'#FFFFFF'}
              color={themeColor[1]}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(10, 0.3)}
            />
            <CustomButton
              text={'Add'}
              textColor={themeColor[1]}
              width={windowWidth * 0.2}
              height={windowHeight * 0.05}
              fontSize={moderateScale(13, 0.6)}
              // marginTop={moderateScale(40, 0.3)}
              onPress={() => {
                if (hashtag == '') {
                  Platform.OS == 'android'
                    ? ToastAndroid.show(
                        'Please add any hashtag',
                        ToastAndroid.SHORT,
                      )
                    : Alert.alert('Please add any hashtag');
                } else {
                  setHashtags(prev => [hashtag, ...prev]);

                  setHashtag('');
                }
              }}
              bgColor={['#FFFFFF', '#FFFFFF']}
              // borderRadius={moderateScale(10, 0.3)}
              isGradient
              isBold={true}
            />
          </View>

          {/* <View style={styles.conatiner}></View> */}

          <View style={styles.postView}>
            <CustomButton
              text={
                loading ? (
                  <ActivityIndicator color={'#01E8E3'} size={'small'} />
                ) : data ? (
                  'Update'
                ) : (
                  'Post'
                )
              }
              textColor={themeColor[1]}
              width={windowWidth * 0.7}
              height={windowHeight * 0.06}
              // marginTop={moderateScale(40, 0.3)}
              onPress={() => {
                if (data) {
                  UpdatePost();
                } else {
                  AddPost();
                }
              }}
              bgColor={['#FFFFFF', '#FFFFFF']}
              borderRadius={moderateScale(30, 0.3)}
              isGradient
              isBold={true}
            />
          </View>
        </ImageBackground>
      </ScrollView>
      <ImagePickerModal
        show={imagePickerVisible}
        setShow={setImagePickerVisible}
        setFileObject={setImage}
      />
      <ImagePickerModal
        show={videoPicker}
        type={'video'}
        setShow={setVideoPicker}
        setFileObject={setVideo}
      />
       
    </>
  );
};

const styles = ScaledSheet.create({
  text: {
    fontSize: moderateScale(12, 0.6),
    color: '#353434',
    width: windowWidth * 0.9,
    textAlign: 'left',
    marginTop: moderateScale(10, 0.3),
  },

  imagesContainer: {
    width: windowWidth,
    paddingHorizontal: moderateScale(10, 0.6),
    flexDirection: 'row',
    marginVertical: moderateScale(5, 0.3),
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  videoContainer: {
    width: windowWidth,
    paddingHorizontal: moderateScale(10, 0.6),
    flexDirection: 'row',
    marginVertical: moderateScale(5, 0.3),
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  conatiner: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.0009,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(20, 0.3),
  },
  image: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.16,
    borderRadius: moderateScale(10, 0.6),
    overflow: 'hidden',
    margin: moderateScale(5, 0.6),
  },

  title: {
    fontSize: moderateScale(18, 0.6),
    color: '#353434',
    // backgroundColor:'red',
    width: windowWidth * 0.9,
    textAlign: 'left',
    marginTop: moderateScale(15, 0.3),
  },
  plus: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.16,
    backgroundColor: 'white',
    borderRadius: moderateScale(10, 0.6),
    marginHorizontal: moderateScale(5, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: moderateScale(18, 0.3),
    // alignSelf: 'flex-start',
    // marginTop: moderateScale(10, 0.3),
  },
  hashtagview: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapview: {
    // backgroundColor: 'red',
    width: windowWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    // height: windowHeight * 0.1,
  },
  mapText: {
    color: 'white',
    fontSize: moderateScale(13, 0.6),
    marginHorizontal: moderateScale(5, 0.3),
    marginVertical: moderateScale(5, 0.3),
    padding: moderateScale(5, 0.6),
    borderRadius: moderateScale(10, 0.6),
  },
  postView: {
    position: 'absolute',
    bottom: 40,
    // backgroundColor: 'red',
    width: windowWidth,
    // height: windowHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPost;

const VideoComponent = ({item}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.image}>
      <TouchableOpacity
        onPress={() => {
          setIsPlaying(!isPlaying);
        }}
        style={{
          position: 'absolute',
          zIndex: 1,
          width: windowWidth * 0.16,
          height: windowWidth * 0.16,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'green',
          alignSelf: 'center',
        }}>
        {!isPlaying && (
          <Icon
            onPress={() => {
              setIsPlaying(!isPlaying);
            }}
            name={'controller-play'}
            as={Entypo}
            size={10}
            color={'rgba(255,255,255,.9)'}
          />
        )}
      </TouchableOpacity>
      <Video
        // muted
        paused={!isPlaying}
        repeat={true}
        // controls={true}
        source={{uri: item?.uri}}
        // ref={videoRef}
        // onProgress={x => {
        //   console.log(
        //     '🚀 ~ file: VideoController.js:46 ~ VideoController ~ x:',
        //     x,
        //   );
        //   setProgress(x);
        // }}
        // onBuffer={() => console.log('buffering video')}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Color.white,
        }}
      />
    </View>
  );
};
