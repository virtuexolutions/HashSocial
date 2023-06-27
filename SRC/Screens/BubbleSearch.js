import {
  StyleSheet,
  
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchData} from '../dummyData/SearchData';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';

const BubbleSearch = () => {
  const SearchData = [
    {
      id: 1,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
    {
      id: 2,
      image: require('../Assets/Images/Ellipse3.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
    {
      id: 3,
      image: require('../Assets/Images/Ellipse4.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
    {
      id: 4,
      image: require('../Assets/Images/Ellipse5.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
    {
      id: 5,
      image: require('../Assets/Images/Ellipse6.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
  ];
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Search'} />

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
            // marginTop: moderateScale(60, 0.3),
          }}>
          <View style={styles.profileSection}>
            <CustomImage
              source={require('../Assets/Images/dummyman1.png')}
              style={{
                height: windowHeight * 0.07,
                width: windowHeight * 0.07,
                borderRadius: 50,
                borderWidth: 3,
                borderColor: '#33dd50',
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
            <Entypo name="images" size={25} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{width: windowWidth / 1, height: windowHeight / 0.9}}>
          <FlatList
            data={SearchData}
            contentContainerStyle={{
              marginBottom: moderateScale(10, 0.3),
            }}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: windowWidth / 1,
                    height: windowHeight / 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: moderateScale(14, 0.6),
                  }}>
                  <View style={styles.profileSection}>
                    <Image
                      source={item.image}
                      style={{
                        height: windowHeight * 0.06,
                        width: windowHeight * 0.06,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#33dd50'
                      }}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: moderateScale(15, 0.6),
                      justifyContent: 'center',
                    }}>
                    <CustomText
                      style={{
                        fontSize: moderateScale(16, 0.6),
                        color: '#000',
                        // fontWeight: '500',
                      }} isBold>
                      {item?.name}
                    </CustomText>
                    <CustomText
                      style={{fontSize: moderateScale(9, 0.6), color: '#000'}}>
                      {item.Tags}
                    </CustomText>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default BubbleSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    backgroundColor: '#fff',
    borderRadius: 50,
    // borderWidth: 3,
    // borderColor: '#33dd50',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
});
