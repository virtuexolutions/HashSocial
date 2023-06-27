import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';

const Notifications = () => {
  const Notificationdata = [
    {
      id: 1,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'Penny B. Bruce',
      desc: 'Lorem ispum dolor sit amet,',
    },
    {
      id: 2,
      image: require('../Assets/Images/Ellipse3.png'),
      name: 'Peter D. Tovar',
      desc: 'Lorem ispum dolor sit amet,',
    },
    {
      id: 3,
      image: require('../Assets/Images/Ellipse4.png'),
      name: 'Brooke D. Branch',
      desc: 'Lorem ispum dolor sit amet,',
    },
    {
      id: 4,
      image: require('../Assets/Images/Ellipse5.png'),
      name: 'R Bartels',
      desc: 'Lorem ispum dolor sit amet,',
    },
    {
      id: 5,
      image: require('../Assets/Images/Ellipse6.png'),
      name: 'S Smith',
      desc: 'Lorem ispum dolor sit amet,',
    },
  ];

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Notifications'} />

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
            height: windowHeight / 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: moderateScale(8, 0.3),
            // marginTop: moderateScale(10, 0.3),
          }}>
          <View style={styles.profileSection}>
            <CustomImage
              source={require('../Assets/Images/Ellipse1.png')}
              style={{
                height:'100%',
                width: '100%',
                // borderRadius: 50,
                // borderWidth: 3,
                // borderColor: '#33dd50',
              }}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              width: windowWidth / 1.45,
              height: windowHeight / 17,
              backgroundColor: '#fff',
              borderRadius: 50,
              justifyContent: 'center',
              //   marginLeft:moderateScale(10,0.3)
            }}>
            <TextInput
              placeholder="Alchole"
              style={{
                // paddingLeft: moderateScale(10, 0.6),
                paddingLeft: moderateScale(20, 0.6),
              }}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{justifyContent: 'center'}}>
            <Entypo name="images" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: windowWidth / 1,
            height: windowHeight / 1,
            marginTop: moderateScale(10, 0.3),
          }}>
          <FlatList
            data={Notificationdata}
            renderItem={({item, index}) => {
              console.log('New Data1', item);

              return (
                <>
                  <View
                    style={{
                      width: windowWidth / 1,
                      height: windowHeight / 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: moderateScale(10, 0.6),
                      marginBottom: moderateScale(10, 0.3),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <View style={styles.profileSection1}>
                        <CustomImage
                          source={item.image}
                          style={{
                            height:'100%',
                            width: '100%',
                            // borderRadius: 50,
                            // borderWidth: 2,
                            // borderColor: '#33dd50',
                          }}
                          resizeMode="contain"
                        />
                      </View>

                      <View
                        style={{
                          paddingLeft: moderateScale(15, 0.6),
                          justifyContent: 'center',
                        }}>
                        <CustomText
                          style={{
                            fontSize: moderateScale(16, 0.6),
                            color: '#000',
                            fontWeight: '500',
                          }} isBold>
                          {item?.name}
                        </CustomText>
                        <CustomText
                          style={{
                            fontSize: moderateScale(9, 0.6),
                            color: '#000',
                          }}>
                          {item?.desc}
                        </CustomText>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <CustomText
                        style={{
                          color: '#000',
                          fontSize: moderateScale(10, 0.6),
                        }}>
                        5 min
                      </CustomText>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{justifyContent: 'center'}}>
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={30}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      width: '90%',
                      height: 0.7,
                      backgroundColor: 'white',
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

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowHeight * 0.07,
    width: windowHeight * 0.07,
    backgroundColor: '#fff',
    borderRadius: 50,
    // borderWidth: 3,
    // borderColor: '#33dd50',
    justifyContent: 'center',
    // alignItems:'center',
    // alignSelf: 'center',
    overflow:'hidden',
  },

  profileSection1: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    backgroundColor: '#fff',
    borderRadius: 50,
    // borderWidth: 3,
    // borderColor: '#33dd50',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
