import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Color from '../Assets/Utilities/Color';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';
import TextInputWithTitle from './TextInputWithTitle';
import CustomButton from './CustomButton';
import moment from 'moment';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

const ComentsSection = ({refRBSheet, data}) => {
  //   console.log('🚀 ~ file: ComentsSection.js:20 ~ ComentsSection ~ data:', data);
  const [yourComment, setYourComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [commentsData, setCommentsData] = useState(
    data?.comments ? data?.comments : [],
  );
  console.log(
    '🚀 ~ file: ComentsSection.js:27 ~ ComentsSection ~ commentsData:',
    commentsData,
  );
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const token = useSelector(state => state.authReducer.token);
  const profileData = useSelector(state => state.commonReducer.selectedProfile);

  const addComment = async () => {
    const url = 'auth/comment';
    const body = {
      profile_id: profileData?.id,
      post_id: data?.id,
      description: yourComment,
    };

    if (yourComment == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show('Add some text', ToastAndroid.SHORT)
        : Alert.alert('Add some text');
    }

    setIsLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setIsLoading(false);
    if (response != undefined) {
      //    console.log(
      //     '🚀 ~ file: ComentsSection.js:18 ~ addComment ~ response:',
      //     response?.data,
      //   );
      //    Platform.OS == 'android'
      //   ? ToastAndroid.show('Comment added', ToastAndroid.SHORT)
      //   : Alert.alert('Comment added');
      setCommentsData(prev => [
        ...prev,
        {
          id: 12,
          user: profileData?.user,
          description: yourComment,
          time: moment(),
        },
      ]);
    }
  };
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        draggableIcon: {
          backgroundColor: Color.veryLightGray,
        },
      }}
      height={700}>
      <View>
        <FlatList
          contentContainerStyle={{}}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: windowHeight * 0.8,
                }}>
                <Text>No Comments</Text>
              </View>
            );
          }}
          data={commentsData}
          renderItem={({item, index}) => {
            return (
              <View
                style={{width: windowWidth, marginTop: moderateScale(5, 0.3)}}>
                <View
                  style={{
                    width: windowWidth,
                    // marginTop: moderateScale(10, 0.3),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: moderateScale(10, 0.6),
                      width: windowWidth,
                    }}>
                    <View style={styles.profileSection2}>
                      <CustomImage
                        source={
                          item?.profile_info?.photo
                            ? {uri: item?.profile_info?.photo}
                            : require('../Assets/Images/permissions.png')
                        }
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        // width: windowWidth * 0.42,
                        paddingVertical: moderateScale(5, 0.6),
                        paddingHorizontal: moderateScale(15, 0.6),
                        backgroundColor: Color.lightGrey,
                        borderRadius: moderateScale(10, 0.6),
                        marginLeft: moderateScale(10, 0.3),
                      }}>
                      <CustomText
                        numberOfLines={1}
                        style={{
                          color: 'black',
                          fontSize: moderateScale(14, 0.6),
                          // backgroundColor: 'red',
                        }}
                        isBold>
                        {item?.name}djksfkh
                      </CustomText>
                      <CustomText
                        style={{
                          // width:windowWidth*0.7,
                          color: 'black',
                          fontSize: moderateScale(12, 0.6),
                          // backgroundColor: 'red',
                        }}
                        numberOfLines={2}>
                        {item?.description}dsfsdf
                      </CustomText>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: windowWidth * 0.6,
                      marginLeft: moderateScale(60, 0.3),
                      justifyContent: 'space-between',
                      marginBottom: moderateScale(10, 0.3),
                    }}>
                    <CustomText
                      style={[styles.text]}
                      isBold>
                      {moment(item?.created_at).fromNow()}
                    </CustomText>
                    <CustomText style={styles.text} isBold>
                      Like
                    </CustomText>
                    <CustomText style={styles.text} isBold>
                      Reply
                    </CustomText>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'green',
            width: windowWidth,
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
            paddingVertical: moderateScale(10, 0.6),
            alignItems: 'center',
          }}>
          <TextInputWithTitle
            titleText={'your comment'}
            // secureText={false}
            placeholder={'your comment'}
            setText={setYourComment}
            value={yourComment}
            viewHeight={0.06}
            viewWidth={0.74}
            inputWidth={0.74}
            borderColor={Color.veryLightGray}
            border={2}
            backgroundColor={'#FFFFFF'}
            // marginTop={moderateScale(10, 0.3)}
            // color={Color.themeBlue}
            marginRight={moderateScale(10, 0.3)}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(25, 0.3)}
            // marginBottom={moderateScale(10, 0.3)}
            // elevation
          />
          <CustomButton
            isBold
            onPress={addComment}
            text={
              isLoading ? (
                <ActivityIndicator size={'small'} color={'white'} />
              ) : (
                'Add'
              )
            }
            textColor={Color.white}
            width={windowWidth * 0.17}
            height={windowHeight * 0.06}
            fontSize={moderateScale(12, 0.6)}
            bgColor={themeColor[1]}
            borderRadius={moderateScale(30, 0.3)}
          />
        </View>
      </View>
    </RBSheet>
  );
};

export default ComentsSection;

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
