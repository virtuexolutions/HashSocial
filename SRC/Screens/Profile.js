import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
// const {height, width} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import navigationService from '../navigationService';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountPrivate } from '../Store/slices/auth';

const Profile = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  // const theme = useSelector(state => state.authReducer.theme);
  // console.log("🚀 ~ file: Profile.js:28 ~ Profile ~ theme:", theme)
  const privacy = useSelector(state => state.authReducer.privacy);
  console.log("🚀 ~ file: Profile.js:30 ~ Profile ~ privacy:", privacy)
  const [username, setUserName] = useState('');
  const [desc, setdesc] = useState('');
  const [selectedTab, setSelectedTab] = useState(privacy? privacy :'');
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Create Profile'}  search/>

      <ImageBackground
        source={privacy == 'private' ? require('../Assets/Images/theme2.jpg'): require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>

          {/* Profile  Sectiopn Start */}
          <View style={[styles.profileSection,{borderColor : privacy=='private' ? Color.red: Color.green}]}>
            <CustomImage
              source={require('../Assets/Images/dummyUser.png')}
              style={{
                height:'100%',
                width: '100%',}}
              resizeMode={'stretch'}
            />
          </View>
          {/* Profile  Sectiopn Close */}

          <LinearGradient
            style={{
       
              width: windowWidth * 0.9,
   
              marginTop: moderateScale(30,0.3),
              borderRadius: moderateScale(20,0.6),
              borderLeftWidth: 4,
              borderColor: privacy == 'public' ? '#80dea8': '#FFABB0',
              borderTopWidth: 4,
              paddingVertical : moderateScale(20,0.3)
            }}
            colors={['rgba(234, 234, 234 , 0.6)','rgba(209,209,209,0.6)']}
            >
            <View
              style={{
                // justifyContent: 'center',
                
                alignSelf: 'center',
              }}>
           
              <TextInputWithTitle
                title={'User Name'}
                secureText={false}
                placeholder={'User Name'}
                setText={setUserName}
                value={username}
                viewHeight={0.06}
                viewWidth={0.82}
                inputWidth={0.8}
                border={1}
                borderColor={'#353535'}
                color={themeColor[1]}
                placeholderColor={Color.themeLightGray}
                borderRadius={moderateScale(10, 0.3)}
                titleColor={'#353535'}
              />
              <TextInputWithTitle
                title={'Description '}
                secureText={false}
                placeholder={'Description'}
                setText={desc}
                value={setdesc}
                viewHeight={0.06}
                viewWidth={0.82}
                inputWidth={0.8}
                border={1}
                borderColor={'#353535'}
                color={themeColor[1]}
                placeholderColor={Color.themeLightGray}
                borderRadius={moderateScale(10, 0.3)}
                titleColor={'#353535'}
              />
            
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf : 'center',
                marginTop : moderateScale(10,0.3)
              }}>
                <CustomText
                  style={{
                    color: '#000',
                    fontSize: moderateScale(11, 0.6),
                  }}>
                  Privacy Setting
                </CustomText>

              <View style={[styles.radioButtonContainer]}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('private')
                    dispatch(setAccountPrivate('private'))
                    setSelectedTab('private');
                  }}
                  style={[styles.radioButton,{
                    backgroundColor : selectedTab == 'private' ? Color.red : Color.veryLightGray
                  }]}>
                  {/* <View style={styles.radioButtonIcon} /> */}
                </TouchableOpacity>
                <CustomText  onPress={() => {
                  dispatch(setAccountPrivate('private'))
                    setSelectedTab('private');
                  }} style={styles.radioButtonText}>Private</CustomText>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(setAccountPrivate('public'))
                    setSelectedTab('public');
                  }}
                  style={[styles.radioButton,{
                    backgroundColor : selectedTab == 'public' ? themeColor[1] : Color.veryLightGray
                  }]}>
               
                </TouchableOpacity>
                <CustomText 
                 onPress={() => {
                  dispatch(setAccountPrivate('public'))
                    setSelectedTab('public');
                  }}
                style={styles.radioButtonText}>Public</CustomText>
              </View>
            </View>
            <CustomButton
            text={

              isLoading ? (
                <ActivityIndicator color={themeColor[1]} size={'small'} />
              ) : (
               'Insert'
              )
            }
            textColor={privacy == 'private' ? 'black':themeColor[1]}
            width={windowWidth * 0.3}
            height={windowHeight * 0.04}
            marginTop={moderateScale(20, 0.3)}
            fontSize={moderateScale(12,0.3)}
            onPress={() => {
              navigationService.navigate('ProfileList')
            }}
            bgColor={'#FFFFFF'}
            borderRadius={moderateScale(30, 0.3)}
            elevation
          />

        
          </LinearGradient>

       
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,    
    alignSelf: 'center',
  },

  profileSection: {
    height: windowWidth * 0.4,
    width: windowWidth * 0.4,
    backgroundColor: '#ACACAC',
    borderRadius: (windowWidth * 0.4) /2,
    marginTop: moderateScale(40, 0.3),
    overflow :'hidden' ,
    borderWidth: 4,
    // borderColor: '#33dd50',
    // justifyContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center',
  },

  textInput: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.8,
    borderWidth: 1,
    borderRadius: 10,
    margin: moderateScale(15, 0.3),
    fontSize: moderateScale(14, 0.6),
    paddingLeft: moderateScale(10, 0.6),
  },

  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
    paddingLeft: moderateScale(20, 0.3),
  },
  radioButton: {
    height: moderateScale(11,0.6),
    width: moderateScale(11,0.6),
    backgroundColor: '#e8e8e8',
    borderRadius: moderateScale(11,0.6),
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 8,
    width: 8,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: moderateScale(12, 0.6),
    fontWeight: '600',
    color: '#000',
  },
});

export default Profile;
