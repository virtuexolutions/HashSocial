import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
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
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'

const CreateNewBubble = (props) => {
  const item = props?.route?.params?.item
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const [CreateBubble, setCreateBubble] = useState('');
  const [Admin, setAdmin] = useState(item?.author ? item?.author : '');
  const [bubbleTitle, setBubbleTitle] = useState(item?.name ? item?.name :'');
  const [moderator, setModerator] = useState(item?.moderator ? item?.moderator : '');
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState({});
  const [isLoading, setisLoading] = useState(false);
  
  const architecture = ['ABC', 'BCD', 'CDE'];
  const [architectureValue, setArchitectureValue] = useState('#Architecture');
  const [switchValue, setSwitchValue] = useState('Private');

  const ApprovalForAdmittance = ['yes', 'No'];

  const [ApprovalForAdmittanceValue, SetApprovalForAdmittance] = useState(
    'Approval For Admittance',
  );

  const ApprovaltoPost = ['yes', 'No'];
  const [ApprovalToPostValue, setApprovalToPostValue] =
    useState('Approval To Post');

  const MembershipCost = ['yes', 'No'];
  const [MembershipCostValue, setMembershipCost] = useState('Member ship Cost');

  const onSelectSwitch = index => {
    if (index == 1) {
      setSwitchValue('private');
    } else if (index == 2) {
      setSwitchValue('public');
    }
  };

  const memberships = [
    {
      title: 'Gold \n Membership',
      color: ['#f0cd60', '#f8e290', '#d8ad3f', '#915711'],
      border: '#975e18',
    },
    {
      title: 'platinum \n Membership',
      color: ['#ebebeb', '#b3b3b5', '#9c9a9f'],
      border: '#dfdfe0',
    },
    {
      title: 'silver \n Membership',
      color: ['#ebebeb', '#b3b3b5', '#9c9a9f'],
      border: '#dfdfe0',
    },
  ];

  const body = {
    bubbleTitle: bubbleTitle,
    architecture: architectureValue,
    image: profilePicture,
    moderator: moderator,
    admin: Admin,
    ApprovalForAdmittance: ApprovalForAdmittanceValue,
    ApprovaltoPost: ApprovalToPostValue,
    MembershipCost: MembershipCostValue,
    privacy: switchValue,
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
      <Header right Title={'Create new Bubble'} showBack/>
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
              // backgroundColor={'red'}
              placeholderColor={Color.black}
              // style={{fontWeight: '900'}}
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
            onPress={()=>{ setShowModal(true)}}
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
                  source={item?.image ? item?.image : {uri: profilePicture?.uri}}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  onPress={() => {
                    // console.log('here')
                    setShowModal(true);
                  }}
                />
              ) : (
           
                <Icon name={'camera'} as ={Entypo} size={moderateScale(45,.6)} onPress={()=>{ setShowModal(true)}}/>
                 
              
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.line}></View>

          <View
            style={styles.view}>
            <View
              style={styles.Row}>
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

          <View style={styles.switchContainer}>
            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(13, 0.6),
              }}>
              Privacy Setting
            </CustomText>

            <CustomSwitch
              selectionMode={2}
              roundCorner={true}
              option1={'Private'}
              option2={'Public'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#12d50e'}
            />
          </View>

          <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'#01E8E3'} size={'small'} />
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
              navigationService.navigate('HomeScreen', {data: body});
            }}
          />
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
  view:{
    height: windowHeight * 0.27,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    marginTop: moderateScale(18, 0.3),
    alignItems: 'center',
  },
  Row:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: windowHeight * 0.045,
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: moderateScale(10, 0.3),
  }
});
