import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  video,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
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
import navigationService from '../navigationService';

const PostComponent = ({data}) => {
  const [like, setLike] = useState(false);
  const refRBSheet = useRef();
  const MoreIcon = require('../Assets/Images/threedots.png');
  const editPost = () => {
    Alert.alert('Edit Your Post');
  };

  const deletePost = () => {
    Alert.alert('Delete Your Post');
  };

  return (
    <>
      <View
        style={{
          width: windowWidth,
          paddingVertical: moderateScale(15, 0.6),
          backgroundColor: Color.white,
          marginTop: moderateScale(10, 0.3),
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
            marginTop: moderateScale(10, 0.3),
          }}>
          <View style={styles.profileSection2}>
            <CustomImage
              source={data?.profileImage}
              style={{
                height: '100%',
                width: '100%',
              }}
              resizeMode="contain"
            />
          </View>

          <View style={{width: windowWidth * 0.65, justifyContent: 'center'}}>
            <CustomText numberOfLines={2}>{data?.Name}</CustomText>

            <View
              style={{
                flexDirection: 'row',
                width: windowWidth * 0.17,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <CustomText style={{textAlign: 'left'}}>{data?.date}</CustomText>
              <TouchableOpacity activeOpacity={0.7}>
                <Entypo name="globe" size={14} color={Color.veryLightGray} />
              </TouchableOpacity>
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
            width: windowWidth,
            marginTop: moderateScale(8, 0.3),
          }}>
          <CustomText
            style={{
              textAlign: 'left',
              marginLeft: moderateScale(15, 0.3),
              fontSize: moderateScale(13, 0.6),
            }}>
            {data?.desc}
          </CustomText>
        </View>
        {(data?.image || data?.video) && (
          <View style={{width: windowWidth, height: windowHeight * 0.3}}>
            {data?.image ? (
              <CustomImage
              onPress={()=>{
                navigationService.navigate('Feeds',{image : data?.image})
              }}
                source={data?.image}
                style={{
                  height: '100%',
                  width: '100%',
                  marginTop: moderateScale(5, 0.3),
                }}
                resizeMode="cover"
              />
            ) : (
              <VideoController item={data} />
            )}
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            width: windowWidth,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.3),
            marginTop: moderateScale(15, 0.3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.25,
              // backgroundColor:'green',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginRight: moderateScale(3, 0.3),
                width: moderateScale(20, 0.6),
                height: moderateScale(20, 0.6),
              }}>
              <CustomImage
                source={require('../Assets/Images/like.png')}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: moderateScale(25, 0.6),
                height: moderateScale(25, 0.6),
              }}>
              <CustomImage
                source={require('../Assets/Images/heart.png')}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                resizeMode="cover"
              />
            </View>
            <CustomText
              style={{
                color: Color.veryLightGray,
                marginLeft: moderateScale(5, 0.3),
                fontSize: moderateScale(13, 0.6),
                width: windowWidth * 0.16,
              }}>
              {data?.Like}K
            </CustomText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.62,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <CustomText
             onPress={() => refRBSheet.current.open()}
              numberOfLines={1}
              style={[
                {
                  color: Color.veryLightGray,
                  fontSize: moderateScale(13, 0.6),
                  width: windowWidth * 0.3,
                },
                data?.View == null && {textAlign: 'right', width: '90%'},
              ]}>
              {data?.comment} comments
            </CustomText>
            {data?.View && (
              <CustomText
                numberOfLines={1}
                style={{
                  color: Color.veryLightGray,
                  fontSize: moderateScale(13, 0.6),
                  width: windowWidth * 0.3,
                }}>
                {data?.View} views
              </CustomText>
            )}
          </View>
        </View>

        <Divider my="2" _light={{color: Color.veryLightGray}} />

        <View
          style={{

            flexDirection: 'row',
            // backgroundColor : 'red'
            // justifyContent: 'space-around',
            // paddingHorizontal: moderateScale(5, 0.6),
          }}>
          <TouchableOpacity
            onPress={() => {
              setLike(!like);
            }}
            style={{
              flexDirection: 'row',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth : 1,
              borderColor : Color.veryLightGray
            }}>
            <Icon
              as={AntDesign}
              name={like ? 'like2' : 'like1'}
              size={23}
              color={like ? Color.themeBlack : '#2a95fd'}
              onPress={() => {
                setLike(!like);
              }}
            />

            <CustomText>Like</CustomText>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => refRBSheet.current.open()}
            style={{
              flexDirection: 'row',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Octicons
              name="comment"
              size={23}
              color={Color.themeBlack}
              onPress={() => refRBSheet.current.open()}
            />
            <CustomText>comments</CustomText>
          </TouchableOpacity>

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
            <FlatList
              data={data?.commentData}
              renderItem={({item, index}) => {
                return (
                  <View style={{width: windowWidth}}>
                    <View
                      style={{
                        width: windowWidth,
                        marginTop: moderateScale(10, 0.3),
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
                            source={item?.pic}
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
                            {item?.name}
                          </CustomText>
                          <CustomText
                            style={{
                              // width:windowWidth*0.7,
                              color: 'black',
                              fontSize: moderateScale(12, 0.6),
                              // backgroundColor: 'red',
                            }}
                            numberOfLines={2}>
                            {item?.comment}
                          </CustomText>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          width: windowWidth * 0.4,
                          marginLeft: moderateScale(60, 0.3),
                          justifyContent: 'space-evenly',
                          marginTop: moderateScale(5, 0.3),
                        }}>
                        <CustomText style={styles.text}>
                          {item?.Time}h
                        </CustomText>
                        <CustomText style={styles.text}>Like</CustomText>
                        <CustomText style={styles.text}>Reply</CustomText>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </RBSheet>
        </View>
      </View>
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

export default PostComponent;
