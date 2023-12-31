import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import Modal from 'react-native-modal';
import navigationService from '../navigationService';
import TextInputWithTitle from './TextInputWithTitle';
import {baseUrl} from '../Config';
import moment from 'moment';
import {Post} from '../Axios/AxiosInterceptorFunction';

const CardComponent = ({
  item,
  pending,
  check,
  close,
  edit,
  MemberList,
  invited,
  Requested,
  blocked,
}) => {
  console.log("🚀 ~ file: CardComponent.js:49 ~ item:", item)

  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const token = useSelector(state => state.authReducer.token);
  const profileData = useSelector(state => state.commonReducer.profileData);

  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [requested , setRequested] = useState(item?.profile_id == profileData?.id  && item?.status == 'request' ? true : false)
  const [invite , setinvited] = useState(item?.profile_id == profileData?.id  && item?.status == 'invite' ? true : false)
  const [block , setblocked] = useState(item?.profile_id == profileData?.id  && item?.status == 'blocked' ? true : false)
  const [member , setmember] = useState(item?.profile_id == profileData?.id  && item?.status == 'follow' ? true : false)

  console.log('Heereeeeeee',  `${baseUrl}/${item?.photo}` )


  const handleMemberAction = async actionType => {
    const url = `auth/community_member/pending_list/${item?.id}`;
    const body = {
      status: actionType,
    };
    setisLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setisLoading(false);
    if (response != undefined) {
      if(actionType == 'accept'){
        setRequested(false)
        setmember(true)
        setblocked(false)
      }
      else if (actionType == 'reject'){
        setRequested(false)
        setmember(false)
        setinvited(false)
      }
      else if (actionType == 'blocked'){
        setmember(false)
        setblocked(true)
      }
      else if (actionType == 'blocked'){
        setmember(false)
        setblocked(true)
      }
    }
  };

  return (
    <>
      <View style={styles.row}>
        <View>
          <View style={styles.profileSection}>
            <CustomImage
              source={{uri: `${baseUrl}/${item?.photo ? item?.photo : item?.profile_info?.photo}`}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          
            <TouchableOpacity
              onPress={() => {
                setIsVisible(true);
              }}
              style={styles.view}>
              <Icon
                name="message1"
                as={AntDesign}
                color={themeColor[1]}
                onPress={() => {
                  setIsVisible(true);
                }}
              />
            </TouchableOpacity>
     
        </View>

        <View
          style={{
            paddingLeft: moderateScale(15, 0.6),
            width: windowWidth * 0.45,
          }}>
          <CustomText
            numberOfLines={1}
            style={{
              fontSize: moderateScale(16, 0.6),
              color: '#000',
              fontWeight: '500',
              textAlign: 'left',
            }}>
            {item?.profile_info?.name}
          </CustomText>
          <CustomText
            numberOfLines={1}
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#000',
              textAlign: 'left',
            }}>
            {moment(item?.created_at).format('ll')}
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#000',
              textAlign: 'left',
            }}>
            {item?.role}
          </CustomText>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            // backgroundColor: 'red',
            width: windowWidth * 0.3,
          }}>
          {pending && (
            <CustomButton
              text={'Pending'}
              textColor={Color.black}
              // width={windowWidth * 0.13}
              height={windowHeight * 0.05}
              fontSize={moderateScale(10, 0.6)}
              bgColor={'#FFFFFF'}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(5, 0.3)}
              marginRight={moderateScale(5, 0.3)}
            />
          )}

          {requested && (
            <>
              <CustomButton
                iconName={isLoading ? 'loader' : 'check'}
                iconType={isLoading ? Feather : Entypo}
                onPress={() => {
                  handleMemberAction('accept');
                }}
                iconStyle={{
                  color: Color.black,
                }}
                textColor={Color.black}
                height={windowHeight * 0.05}
                fontSize={moderateScale(12, 0.6)}
                borderRadius={moderateScale(10, 0.3)}
                paddingHorizontal={moderateScale(15, 0.3)}
                marginRight={moderateScale(5, 0.3)}
                bgColor={'#FFFFFF'}
              />
              <CustomButton
                iconName={isLoading ? 'loader' : 'cross'}
                iconType={isLoading ? Feather : Entypo}
                onPress={() => {
                  handleMemberAction('reject');
                }}
                iconStyle={{
                  color: Color.black,
                }}
                textColor={Color.black}
                height={windowHeight * 0.05}
                fontSize={moderateScale(12, 0.6)}
                borderRadius={moderateScale(10, 0.3)}
                paddingHorizontal={moderateScale(15, 0.3)}
                marginRight={moderateScale(5, 0.3)}
                bgColor={'#FFFFFF'}
              />
            </>
          )}
          {member &&  (
            <>
              <CustomButton
                iconName={isLoading ? 'loader' : 'pause'}
                iconType={isLoading ? Feather : AntDesign}
                onPress={() => {
                  handleMemberAction('blocked');
                }}
                iconStyle={{
                  color: Color.black,
                }}
                textColor={Color.black}
                height={windowHeight * 0.05}
                fontSize={moderateScale(12, 0.6)}
                borderRadius={moderateScale(10, 0.3)}
                paddingHorizontal={moderateScale(15, 0.3)}
                marginRight={moderateScale(5, 0.3)}
                bgColor={'#FFFFFF'}
              />
              <CustomButton
                iconName={isLoading ? 'loader' : 'cross'}
                iconType={isLoading ? Feather : Entypo}
                onPress={() => {
                  handleMemberAction('reject');
                }}
                iconStyle={{          
                  color: Color.black,
                }}
                textColor={Color.black}
                height={windowHeight * 0.05}
                fontSize={moderateScale(12, 0.6)}
                borderRadius={moderateScale(10, 0.3)}
                paddingHorizontal={moderateScale(15, 0.3)}
                marginRight={moderateScale(5, 0.3)}
                bgColor={'#FFFFFF'}
              />
            </>
          )}
          {block && (
            <CustomButton
              iconName={isLoading ? 'loader' : 'caretright'}
              iconType={isLoading ? Feather : AntDesign}
              onPress={() => {
                handleMemberAction('accept');
              }}
              iconStyle={{
                color: Color.black,
              }}
              textColor={Color.black}
              height={windowHeight * 0.05}
              fontSize={moderateScale(12, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(15, 0.3)}
              marginRight={moderateScale(5, 0.3)}
              bgColor={'#FFFFFF'}
            />
          )}
          {invite && (
            <CustomButton
              text={
                isLoading ? (
                  <ActivityIndicator color={'#000000'} size={'small'} />
                ) : (
                  'Withdraw Request'
                )
              }
              onPress={() => {
                handleMemberAction('reject');
              }}
              textColor={Color.black}
              height={windowHeight * 0.05}
              fontSize={moderateScale(10, 0.6)}
              bgColor={'#FFFFFF'}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(10, 0.3)}
              marginRight={moderateScale(5, 0.3)}
            />
          )}
        </View>
      </View>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: themeColor[1],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(15, 0.6),
                paddingVertical: moderateScale(10, 0.6),
                paddingHorizontal: moderateScale(30, 0.6),
                textAlign: 'center',
              }}
              isBold>
              send Message Request
            </CustomText>
          </View>
          <View
            style={{
              height: windowHeight * 0.22,
              width: windowWidth * 0.85,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.circle}>
              <CustomImage
                source={require('../Assets/Images/chat.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <TextInputWithTitle
              marginTop={moderateScale(10, 0.6)}
              secureText={false}
              placeholder={'Write message here'}
              setText={setMsg}
              value={msg}
              viewHeight={0.1}
              viewWidth={0.7}
              inputWidth={0.65}
              backgroundColor={'white'}
              border={1}
              borderColor={Color.veryLightGray}

              color={themeColor[1]}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(10, 0.3)}
            />

           
          </View>

          <CustomButton
            text={'Send'}
            onPress={() => {
              setIsVisible(false);
              Platform.OS == 'android'
                ? ToastAndroid.show('Message request sent', ToastAndroid.SHORT)
                : Alert.alert('Message request sent');
            }}
            textColor={Color.white}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            marginTop={moderateScale(20, 0.3)}
            bgColor={themeColor}
            borderRadius={moderateScale(25, 0.3)}
            elevation
            isGradient
            multiline
            fontSize={moderateScale(14, 0.6)}
          />
        </View>
      </Modal>
    </>
  );
};
export default CardComponent;

const styles = StyleSheet.create({
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
  view:{
    backgroundColor: 'white',
    height: windowHeight * 0.03,
    width: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (windowHeight * 0.03) / 2,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  row: {
    paddingVertical:moderateScale(5,.6),
    width: windowWidth * 0.97,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: moderateScale(5, 0.3),
    // paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },

  container: {
    width: windowWidth * 0.85,
    paddingBottom: moderateScale(20, 0.6),
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.6),
    overflow: 'hidden',
  },
  circle: {
    width: moderateScale(70, 0.6),
    height: moderateScale(70, 0.6),
    // borderRadius: moderateScale(30, 0.6),
    justifyContent: 'center',
    overflow: 'hidden',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,

    // elevation: 9,
  },
});
