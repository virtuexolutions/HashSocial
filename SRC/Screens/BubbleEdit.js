import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
const {height, width} = Dimensions.get('window');

const BubbleEdit = () => {
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Bubble Edit'} search />

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
            width: width * 1,
            height: height * 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(10, 0.3),
            padding: moderateScale(10, 0, 3),
          }}>
          <View style={{backgroundColor:'black'}}>
            <CustomText
              style={{
                fontSize: moderateScale(15, 0, 6),
                // fontWeight: '700',
                textAlign: 'left',
                color: '#000',
              }}
              isBold>
              Bubble Title
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0, 6),
                // fontWeight: '700',
                textAlign: 'left',
                color: 'black',
              }}>
              lorem Ipsum
            </CustomText>
          </View>

          <TouchableOpacity
            style={{
              width: width * 0.3,
              height: height * 0.05,
              backgroundColor: '#fff',
            }}></TouchableOpacity>

          <View>
            <CustomImage
              source={require('../Assets/Images/fitness.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 2,
            backgroundColor: '#77d6dd',
            justifyContent: 'center',
            alignSelf: 'center',
          }}></View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BubbleEdit;
