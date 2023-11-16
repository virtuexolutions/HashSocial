import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Platform,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import CustomSwitch from '../Components/CustomSwitch';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import ImagePickerModal from '../Components/ImagePickerModal';
import navigationService from '../navigationService';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {setBubbleCreated} from '../Store/slices/auth';
import {Post} from '../Axios/AxiosInterceptorFunction';

const CreateNewBubble = props => {
  const item = props?.route?.params?.item;
  const token = useSelector(state => state.authReducer.token);
  console.log(
    '🚀 ~ file: CreateNewBubble.js:38 ~ CreateNewBubble ~ token:',
    token,
  );

  const dispatch = useDispatch();
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const [CreateBubble, setCreateBubble] = useState('');
  const [Admin, setAdmin] = useState(item?.author ? item?.author : '');
  const [bubbleTitle, setBubbleTitle] = useState(item?.name ? item?.name : '');
  const [moderator, setModerator] = useState(
    item?.moderator ? item?.moderator : '',
  );
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [allCanPost, setAllCanPost] = useState('Yes');
  const [openToAll, setOpenToAll] = useState('Yes');
  console.log(
    '🚀 ~ file: CreateNewBubble.js:59 ~ CreateNewBubble ~ allCanPost:',
    allCanPost,
  );
  const [teamRemoveCmmnts, setTeamRemoveCmnts] = useState('Yes');
  console.log(
    '🚀 ~ file: CreateNewBubble.js:64 ~ CreateNewBubble ~ teamRemoveCmmnts:',
    teamRemoveCmmnts,
  );
  const [teamCanRemoveContent, setTeamCanRemoveContent] = useState('Yes');
  const [allCanSendInvite, setAllCanSendInvite] = useState('Yes');
  const architecture = ['ABC', 'BCD', 'CDE'];
  const [architectureValue, setArchitectureValue] = useState('#Architecture');
  const [switchValue, setSwitchValue] = useState('Private');
  const ApprovalForAdmittance = ['yes', 'No'];
  const [ApprovalForAdmittanceValue, SetApprovalForAdmittance] = useState(
    '',
  );
  const Data = [
    {
      text: 'All Bubble Member Post',
      Answer: '(N) Only bubble team posts',
    },
    {
      text: 'Bubble team can remove comments',
      Answer: '(N) Only bubble owner can remove comments',
    },
    {
      text: 'Bubble team can remove content',
      Answer: '(N) Only bubble owner can remove content',
    },
    {
      text: 'Entire bubble can invite new members',
      Answer: '(N) Only bubble team can send invites',
    },
    {
      text: 'Joining is open to everyone',
      Answer: '(N) Only bubble team can accept request',
    },
  ];
  const onSelectSwitch = index => {
    if (index == 1) {
      setSwitchValue('private');
    } else if (index == 2) {
      setSwitchValue('public');
    }
  };
  const ApprovaltoPost = ['yes', 'No'];
  const [ApprovalToPostValue, setApprovalToPostValue] =
    useState('');

  const MembershipCost = ['yes', 'No'];
  const [MembershipCostValue, setMembershipCost] = useState('');

  const createBubble = async () => {
    const url = 'auth/community';
    const body = {
      title: bubbleTitle,
      moderator: moderator,
      admin: Admin,
      approval_admittance: ApprovalForAdmittanceValue,
      approval_post: ApprovalToPostValue,
      membership_cost: MembershipCostValue,
      privacy: openToAll,
      post_privacy: allCanPost,
      remove_content: teamCanRemoveContent,
      remove_comments: teamRemoveCmmnts,
      invite_members: allCanSendInvite,
    };
    const formData = new FormData();
    for (let key in body) {
      if (body[key] == '') {
        return Platform.OS == 'android'
          ? ToastAndroid.show(`${key} is required`, ToastAndroid.SHORT)
          : Alert.alert(`${key} is required`);
      } else {
        formData.append(key, body[key]);
      }
    }

    if (Object.keys(profilePicture).length > 0) {
      formData.append('image', profilePicture);
    } else {
      return Platform.OS == 'android'
        ? ToastAndroid.show(`image is empty`, ToastAndroid.SHORT)
        : Alert.alert(`image is empty`);
    }

    console.log(
      '🚀 ~ file: CreateNewBubble.js:132 ~ createBubble ~ formData:',
      formData,
    );

    setIsLoading(true);
    const response = await Post(url, formData, apiHeader(token));
    setIsLoading(false);

    if (response != undefined) {
      console.log(
        '🚀 ~ file: CreateNewBubble.js:92 ~ createBubble ~ response:',
        response?.data,
      );
      dispatch(setBubbleCreated(true));
      Platform.OS == 'android'
        ? ToastAndroid.show('Bubble created Successfully', ToastAndroid.SHORT)
        : Alert.alert('Bubble created Successfully');
    }
  };

  useEffect(() => {
    if (Object.keys(profilePicture).length > 0) {
    }
  }, [profilePicture]);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Create new Bubble'} menu={true} />
      <ScrollView>
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
          }}>
          <ScrollView nestedScrollEnabled>
            <View style={styles.topContainer}>
              <TextInputWithTitle
                placeholder={'Bubble Title'}
                setText={setBubbleTitle}
                value={bubbleTitle}
                marginTop={moderateScale(5, 0.3)}
                viewHeight={0.04}
                viewWidth={0.23}
                inputHeight={0.05}
                inputWidth={0.23}
                color={Color.black}
                placeholderColor={Color.black}
                isBold
              />

              <DropDownSingleSelect
                array={architecture}
                item={architectureValue}
                setItem={setArchitectureValue}
                width={windowWidth * 0.34}
                placeholder={'#Architecture'}
                fontSize={moderateScale(10, 0.5)}
                dropdownStyle={{
                  borderBottomWidth: 0,
                  width: windowWidth * 0.3,
                  height: windowHeight * 0.05,
                  // backgroundColor: 'red',
                }}
                btnStyle={{
                  backgroundColor: '#fff',
                  width: windowWidth * 0.2,
                  height: windowHeight * 0.04,
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  setShowModal(true);
                }}
                style={[
                  {
                    height: windowHeight * 0.27,
                    width: width * 0.35,
                    backgroundColor: 'white',
                    borderRadius: moderateScale(20, 0.6),
                    marginLeft: moderateScale(25, 0.3),
                    justifyContent: 'center',
                    overflow: 'hidden',
                  },
                  Object.keys(profilePicture).length == 0 && {
                    alignItems: 'center',
                  },
                ]}>
                {item?.image || Object.keys(profilePicture).length > 0 ? (
                  <CustomImage
                    source={
                      item?.image ? item?.image : {uri: profilePicture?.uri}
                    }
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    onPress={() => {
                      setShowModal(true);
                    }}
                  />
                ) : (
                  <Icon
                    name={'camera'}
                    as={Entypo}
                    size={moderateScale(45, 0.6)}
                    onPress={() => {
                      setShowModal(true);
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.line}></View>

            <View style={styles.view}>
              <View style={styles.Row}>
                <CustomText
                  style={{
                    width: windowWidth * 0.25,
                    color: Color.black,
                    fontSize: moderateScale(11, 0.6),
                    paddingLeft: moderateScale(20, 0.6),
                  }}>
                  Moderator :
                </CustomText>

                <TextInputWithTitle
                  placeholder={'Jonathan'}
                  setText={setModerator}
                  value={moderator}
                  viewHeight={0.06}
                  viewWidth={0.7}
                  inputWidth={0.8}
                  color={Color.black}
                  placeholderColor={Color.veryLightGray}
                  borderRadius={moderateScale(20, 0.3)}
                  // style={{fontWeight: '900'}}
                  isBold
                />
              </View>
              <TextInputWithTitle
                placeholder={'Admin'}
                setText={setAdmin}
                value={Admin}
                viewHeight={0.045}
                viewWidth={0.9}
                inputWidth={0.9}
                inputHeight={0.05}
                marginBottom={moderateScale(-5, 0.3)}
                marginLeft={moderateScale(0.1, 0.3)}
                color={Color.black}
                marginTop={moderateScale(5, 0.3)}
                placeholderColor={Color.veryLightGray}
                borderRadius={moderateScale(20, 0.3)}
                backgroundColor={Color.white}
              />

              <DropDownSingleSelect
                array={ApprovalForAdmittance}
                item={ApprovalForAdmittanceValue}
                setItem={SetApprovalForAdmittance}
                width={windowWidth * 0.9}
                placeholder={'Ápproval for Admittance'}
                dropdownStyle={{
                  borderBottomWidth: 0,
                  width: windowWidth * 0.9,
                  marginTop: 10,
                }}
                btnStyle={{
                  backgroundColor: '#fff',
                  height: windowHeight * 0.045,
                }}
              />

              <DropDownSingleSelect
                array={ApprovaltoPost}
                item={ApprovalToPostValue}
                setItem={setApprovalToPostValue}
                width={windowWidth * 0.9}
                placeholder={'Approval To Post'}
                dropdownStyle={{
                  borderBottomWidth: 0,
                  width: windowWidth * 0.9,
                }}
                btnStyle={{
                  backgroundColor: '#fff',
                  height: windowHeight * 0.045,
                }}
              />

              <DropDownSingleSelect
                array={MembershipCost}
                item={MembershipCostValue}
                setItem={setMembershipCost}
                width={windowWidth * 0.9}
                placeholder={'Membership Cost'}
                dropdownStyle={{
                  borderBottomWidth: 0,
                  width: windowWidth * 0.9,
                }}
                btnStyle={{
                  backgroundColor: '#fff',
                  height: windowHeight * 0.045,
                }}
              />
            </View>

            <View style={styles.line}></View>

            <View
              style={{
                marginTop: moderateScale(10, 0.3),
                marginBottom: moderateScale(20, 0.3),
              }}>
              <CustomText
                isBold
                style={{
                  width: windowWidth,
                  paddingHorizontal: moderateScale(10, 0.6),
                  fontSize: moderateScale(15, 0.6),
                  marginTop: moderateScale(10, 0.6),
                }}>
                Team Role | Perms
              </CustomText>
              <SwitchComponent
                text1={'All Bubble Member Post'}
                text2={'(N) Only bubble team posts'}
                value={allCanPost}
                setValue={setAllCanPost}
              />
              <SwitchComponent
                text1={'Bubble team can remove comments'}
                text2={'(N) Only bubble owner can remove comments'}
                value={teamRemoveCmmnts}
                setValue={setTeamRemoveCmnts}
              />
              <SwitchComponent
                text1={'Bubble team can remove content'}
                text2={'Only bubble owner can remove content'}
                value={teamCanRemoveContent}
                setValue={setTeamCanRemoveContent}
              />
              <SwitchComponent
                text1={'Entire bubble can invite new members'}
                text2={'(N) Only bubble team can send invites'}
                value={allCanSendInvite}
                setValue={setAllCanSendInvite}
              />
              <SwitchComponent
                text1={'Joining is open to everyone'}
                text2={'(N) Only bubble team can accept request'}
                value={openToAll}
                setValue={setOpenToAll}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(30, 0.6),
              }}>
              <CustomButton
                text={
                  isLoading ? (
                    <ActivityIndicator color={themeColor[1]} size={'small'} />
                  ) : (
                    'Next'
                  )
                }
                textColor={themeColor[1]}
                width={windowWidth * 0.4}
                height={windowHeight * 0.06}
                // marginTop={moderateScale(10, 0.3)}
                bgColor={['#FFFFFF', '#FFFFFF']}
                borderRadius={moderateScale(30, 0.3)}
                isGradient
                isBold={true}
                marginBottom={moderateScale(50)}
                onPress={() => {
                  createBubble();
                  // navigationService.navigate('HomeScreen', {data: body});
                }}
              />
              <CustomButton
                text={'cancel'}
                textColor={themeColor[1]}
                width={windowWidth * 0.4}
                height={windowHeight * 0.06}
                // marginTop={moderateScale(10, 0.3)}
                bgColor={['#FFFFFF', '#FFFFFF']}
                borderRadius={moderateScale(30, 0.3)}
                isGradient
                isBold={true}
                marginBottom={moderateScale(50)}
                onPress={() => {
                  dispatch(setBubbleCreated(true));
                  // navigationService.navigate('HomeScreen', {data: body});
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </ScrollView>
      <ImagePickerModal
        show={showModal}
        setShow={setShowModal}
        setFileObject={setProfilePicture}
      />
    </>
  );
};

export default CreateNewBubble;
const styles = ScaledSheet.create({
  topContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(15, 0.3),
    // padding: moderateScale(10, 0.6),
  },
  switchContainer: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.3),
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    // padding: moderateScale(20, 0.6),
  },
  crownIcon: {
    height: windowWidth * 0.12,
    width: windowWidth * 0.12,
    borderWidth: 1,

    borderRadius: (windowWidth * 0.12) / 2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: '#a0e8eb',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(15, 0.3),
  },
  image: {
    height: height * 0.04,
    width: windowWidth * 0.3,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: windowHeight * 0.27,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    marginTop: moderateScale(18, 0.3),
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: windowHeight * 0.045,
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: moderateScale(10, 0.3),
  },
});

const SwitchComponent = ({text1, text2, setValue, value}) => {
  const onSelectSwitch = index => {
    if (index == 1) {
      setValue('Yes');
    } else if (index == 2) {
      setValue('No');
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: windowWidth * 0.7,
          paddingVertical: moderateScale(8, 0.6),
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(13, 0.6),
            color: Color.veryLightGray,
          }}>
          {text1}
        </CustomText>
        <CustomText
          style={{
            fontSize: moderateScale(11, 0.6),
            color: Color.black,
          }}>
          {text2}
        </CustomText>
      </View>
      <View
        style={{
          width: windowWidth * 0.3,
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Yes'}
          option2={'No'}
          value={value}
          setValue={setValue}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#11d40d'}
        />
      </View>
    </View>
  );
};
