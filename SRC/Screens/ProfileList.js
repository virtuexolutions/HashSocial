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
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';

const ProfileList = () => {
  const ProfileListData = [
    {
      id: 1,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 2,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 3,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 4,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 5,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 6,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 7,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'JonaThan',
      title: 'Public Account',
    },
    {
      id: 8,
      image: require('../Assets/Images/Ellipse2.png'),
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
      <Header right Title={'Profile'} />

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth / 1,
            height: windowHeight / 1,
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
                  <View
                    style={{
                      width: windowWidth * 1,
                      height: windowHeight *0.1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: moderateScale(20, 0.6),
                      marginBottom:moderateScale(5,0.3),
                    }}>
                    <View style={styles.profileSection}>
                      <CustomImage
                        source={item.image}
                        style={{width: 75, height: 75, borderRadius: 50}}
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: moderateScale(25, 0.6),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(18, 0.6),
                          color: '#000',
                          fontWeight: '500',
                        }}>
                        {item.name}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(11, 0.6),
                          color: '#000',
                        }}>
                        {item.title}
                      </CustomText>
                    </View>
                  </View>

                  <View
                    style={{
                      width: '90%',
                      height: 2,
                      backgroundColor: '#77d6dd',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginBottom: moderateScale(10, 0.3),
                    }}></View>
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
    height: windowHeight / 9.7,
    width: windowWidth / 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#33dd50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
