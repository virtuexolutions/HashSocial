import React, {useCallback, useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {Icon, Image, ScrollView} from 'native-base';

import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import Entypo from 'react-native-vector-icons/Entypo';

const AddPost = () => {
  const [selectedTab, setSelectedTab] = useState('Tag People');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'ADD POST'} search />
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          // justifyContent : 'center',
          alignItems: 'center',
        }}>
        <CustomText
          style={styles.title}
          isBold={true}
          children={' Write Captions'}
        />
        <CustomText style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </CustomText>
        <View style={styles.plus}>
          <Icon name="plus" as={Entypo} size={25} color={'black'} />
        </View>

        <View style={styles.conatiner}></View>

        <View style={styles.tabStyles}>
          <CustomText
            style={{
              ...{color: selectedTab == 'Tag People' ? 'white' : '#353434'},
              ...styles.options,
            }}
            isBold={true}
            children={'Tag people'}
            onPress={() => {
              setSelectedTab('Tag People');
            }}
          />
          <View style={styles.line}></View>
          <CustomText
            style={{
              ...{color: selectedTab == 'Add Location' ? 'white' : '#353434'},
              ...styles.options,
            }}
            isBold={true}
            onPress={() => {
              setSelectedTab('Add Location');
            }}
            children={'Add Location'}
          />

          <View style={styles.line}></View>
          <CustomText
            style={{
              ...{color: selectedTab == 'Add Music' ? 'white' : '#353434'},
              ...styles.options,
            }}
            isBold={true}
            onPress={() => {
              setSelectedTab('Add Music');
            }}
            children={'Add Music'}
          />
        </View>

        <CustomButton
          text={
            loading ? (
              <ActivityIndicator color={'#01E8E3'} size={'small'} />
            ) : (
              'Post'
            )
          }
          textColor={Color.themeColor}
          width={windowWidth * 0.7}
          height={windowHeight * 0.06}
          marginTop={moderateScale(40, 0.3)}
          onPress={() => {
            // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            // navigationService.navigate('Signup');
          }}
          bgColor={['#FFFFFF', '#FFFFFF']}
          borderRadius={moderateScale(30, 0.3)}
          isGradient
          isBold={true}
        />
        <CustomButton
          text={
            loading ? (
              <ActivityIndicator color={'#01E8E3'} size={'small'} />
            ) : (
              'Add Bubble'
            )
          }
          textColor={Color.themeColor}
          width={windowWidth * 0.7}
          height={windowHeight * 0.06}
          marginTop={moderateScale(10, 0.3)}
          onPress={() => {
            // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            navigationService.navigate('CreateNewBubble');
          }}
          bgColor={['#FFFFFF', '#FFFFFF']}
          borderRadius={moderateScale(30, 0.3)}
          isGradient
          isBold={true}
        />
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  conatiner: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.0004,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(20, 0.3),
  },
  textInput: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.7,
    borderWidth: 1,
    borderColor: Color.darkGray,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: moderateScale(22, 0.6),
    color: '#353434',
    width: windowWidth * 0.9,
    textAlign: 'left',
    marginTop: moderateScale(30, 0.3),
  },
  plus: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.16,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(18, 0.3),
    alignSelf: 'flex-start',
    marginTop: moderateScale(10, 0.3),
  },
  line: {
    width: windowWidth * 0.006,
    height: windowHeight * 0.02,
    backgroundColor: 'black',
    marginTop: moderateScale(10, 0.3),
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    color: '#353434',
    width: windowWidth * 0.9,
    textAlign: 'left',
    marginTop: moderateScale(10, 0.3),
  },
  tabStyles: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-between',
    marginTop: moderateScale(20, 0.3),
  },
  options: {
    fontSize: moderateScale(12, 0.6),
    width: windowWidth * 0.2,
    marginTop: moderateScale(10, 0.3),
  },
});

export default AddPost;
