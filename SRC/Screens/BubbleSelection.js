import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import FastImage from 'react-native-fast-image';
import {
  ImageBackground,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import {View} from 'react-native';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';

const BubbleSelection = () => {
  const [BubbleImageArraty, setBubbleImageArraty] = useState([
    {
      image: require('../Assets/Images/bubble1.png'),
      added: false,
      name: 'Alchol',
    },
    {
      image: require('../Assets/Images/bubble2.png'),
      added: false,
      name: 'Alternative Fitness',
    },
    {
      image: require('../Assets/Images/bubble3.png'),
      added: false,
      name: 'Archery',
    },
    {
      image: require('../Assets/Images/bubble4.png'),
      added: false,
      name: 'Architecture',
    },
    {image: require('../Assets/Images/bubble5.png'), added: false, name: 'Art'},
    {
      image: require('../Assets/Images/bubble6.png'),
      added: false,
      name: 'Astrology',
    },
    {
      image: require('../Assets/Images/bubble1.png'),
      added: false,
      name: 'Author books',
    },
    {
      image: require('../Assets/Images/bubble8.png'),
      added: false,
      name: 'Beer',
    },
    {
      image: require('../Assets/Images/bubble9.png'),
      added: false,
      name: 'Bird Watching',
    },
    {
      image: require('../Assets/Images/bubble10.png'),
      added: false,
      name: 'Bolging',
    },
    {
      image: require('../Assets/Images/bubble11.png'),
      added: false,
      name: 'politics',
    },
    {
      image: require('../Assets/Images/bubble3.png'),
      added: false,
      name: 'politics',
    },
  ]);
  console.log(
    '🚀 ~ file: BubbleSelection.js:29 ~ BubbleSelection ~ BubbleImageArraty:',
    BubbleImageArraty,
  );

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <Header right Title={'Select Bubble'} search />
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: moderateScale(100, 0.3),
            right: moderateScale(15, 0.6),
            zIndex: 1,
          }}>
          <CustomButton
            text={'Save'}
            textColor={Color.white}
            width={windowWidth * 0.2}
            height={windowHeight * 0.04}
            onPress={() => {
              ToastAndroid.show('Saved', ToastAndroid.SHORT);
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            fontSize={moderateScale(12, 0.6)}
            bgColor={['#01E8E3', '#1296AF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
          <CustomButton
            text={'cancel'}
            textColor={'#01E8E3'}
            width={windowWidth * 0.2}
            height={windowHeight * 0.04}
            fontSize={moderateScale(12, 0.6)}
            onPress={() => {
              navigationService.navigate('LoginScreen');
              // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            }}
            marginTop={moderateScale(10, 0.3)}
            bgColor={['#ffffff', '#ffffff']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // alignItems : 'center',
            paddingHorizontal: moderateScale(5, 0.6),
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingTop: moderateScale(10, 0.6),
            paddingBottom: moderateScale(40, 0.6),
            justifyContent: 'center',
          }}
          style={{
            width: windowWidth,
          }}>
          {BubbleImageArraty.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const data = [...BubbleImageArraty];
                  data[index].added = !data[index].added;

                  setBubbleImageArraty(data);
                }}
                style={{
                  width: windowWidth * 0.3,
                  height:
                    index % 2 == 0 ? windowHeight * 0.3 : windowHeight * 0.17,
                  borderRadius: moderateScale(15, 0.6),
                  overflow: 'hidden',
                  marginTop:
                    index == 4 || index == 10 ? -windowHeight * 0.13 : 0,
                  zIndex: 1,
                  marginVertical: moderateScale(5, 0.3),
                  marginHorizontal: moderateScale(2, 0.3),
                }}>
                  <CustomImage
                  onPress={() => {
                    const data = [...BubbleImageArraty];
                    data[index].added = !data[index].added;

                    setBubbleImageArraty(data);
                  }}
                  source={item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
                {item.added && (
                  <View style={{
                    width: windowWidth * 0.3,
                  height:
                    index % 2 == 0 ? windowHeight * 0.3 : windowHeight * 0.17,
                    backgroundColor:'rgba(0,0,0,0.5)',
                    position:'absolute',
                    zIndex:1,
                  }}>
                  <Animatable.View
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                      width: moderateScale(60, 0.6),
                      height: moderateScale(60, 0.6),
                      // position: 'absolute',
                      // zIndex: 1,
                      alignSelf: 'center',
                      top: '35%',
                    }}>
                    <CustomImage
                      onPress={() => {
                        const data = [...BubbleImageArraty];
                        data[index].added = !data[index].added;

                        setBubbleImageArraty(data);
                      }}
                      source={require('../Assets/Images/heart.png')}
                      resizeMode={'stretch'}
                      style={{width: '100%', height: '100%'}}
                    />
                  </Animatable.View>
                  </View>
                )}
                
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: 'center',
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.themeColor,
  },
});

export default BubbleSelection;
