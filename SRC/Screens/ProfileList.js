import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const privacy = useSelector(state=> state.authReducer.privacy)


  const ProfileListData = [
    {
      id: 1,
      image: require('../Assets/Images/dummyman1.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 2,
      image: require('../Assets/Images/dummyman4.png'),
      name: 'Jameson',
      title: 'Private Account',
    },
    {
      id: 3,
      image: require('../Assets/Images/avatar.png'),
      name: 'Jessica milla',
      title: 'Public Account',
    },
    {
      id: 4,
      image: require('../Assets/Images/dummyUser.png'),
      name: 'Josh verstappen',
      title: 'Private Account',
    },
    {
      id: 5,
      image: require('../Assets/Images/dummyUser1.png'),
      name: 'JonaThan',
      title: 'Private Account',
    },
    {
      id: 6,
      image: require('../Assets/Images/dummyman1.png'),
      name: 'Jomes taverneir',
      title: 'Public Account',
    },
    {
      id: 7,
      image: require('../Assets/Images/avatar1.png'),
      name: 'JonaThan',
      title: 'Private Account',
    },
    {
      id: 8,
      image: require('../Assets/Images/avatar3.png'),
      name: 'JonaThan',
      title: 'Public Account',
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
              marginBottom: moderateScale(16, 0.3),
            }}
            renderItem={({item, index}) => {
              return (
                <>
                  <View style={styles.row}>
                    <View style={styles.profileSection}>
                      <CustomImage
                        source={item.image}
                        style={{width: '100%', height: '100%'}}
                        // resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: moderateScale(25, 0.6),
                        // justifyContent: 'center',
                        // alignItems: 'center',
                      }}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(18, 0.6),
                          color: '#000',
                          fontWeight: '500',
                          textAlign:'left'
                        }}>
                        {item.name}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(11, 0.6),
                          color: '#000',
                          textAlign:'left'
                        }}>
                        {item.title}
                      </CustomText>
                    </View>
                  </View>

                  <View style={styles.line}></View>
                </>
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
  },
  line: {
    width: '90%',
    height: 2,
    backgroundColor: 'white',
    opacity: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: moderateScale(10, 0.3),
  },
  row: {
    width: windowWidth * 1,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20, 0.6),
    marginBottom: moderateScale(5, 0.3),
  },
});
