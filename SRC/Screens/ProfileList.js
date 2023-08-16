import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import CardComponent from '../Components/CardComponent';

const ProfileList = () => {
  const privacy = useSelector(state => state.authReducer.privacy);

  const ProfileListData = [
    {
      id: 1,
      image: require('../Assets/Images/dummyman1.png'),
      name: 'Book Author',
      title: 'Private Account',
      close: true,
      check: false,
      edit: true,
      pending: false,
    },
    {
      id: 2,
      image: require('../Assets/Images/dummyman4.png'),
      name: 'Alternative fitness',
      title: 'Public Account',
      close: true,
      check: false,
      edit: true,
      pending: false,
    },
    {
      id: 3,
      image: require('../Assets/Images/avatar.png'),
      name: 'Alchol',
      title: 'Public Account',
      close: true,
      check: false,
      edit: true,
      pending: false,
    },
    {
      id: 4,
      image: require('../Assets/Images/dummyUser.png'),
      name: 'Bords Shooting',
      title: 'Private Account',
      close: true,
      check: false,
      edit: true,
      pending: false,
    },
  ];
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Profile List'} search />

      <ImageBackground
        source={
          privacy == 'private'
            ? require('../Assets/Images/theme2.jpg')
            : require('../Assets/Images/Main.png')
        }
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth,
            marginBottom: moderateScale(10, 0.3),
            marginTop: moderateScale(10, 0.3),
          }}>
          <FlatList
            data={ProfileListData}
            contentContainerStyle={{
              marginBottom: moderateScale(30, 0.3),
            }}
            renderItem={({item, index}) => {
              return (
                <CardComponent
                  item={item}
                  check={item?.check}
                  close={item?.close}
                  edit={item?.edit}
                  pending={item?.pending}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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

  row: {
    width: windowWidth * 0.97,
    // height: windowHeight  * 0.1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: moderateScale(20, 0.6),
    marginBottom: moderateScale(5, 0.3),
    // backgroundColor : 'green',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    // paddingBottom : 20,
  },
});


