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
  import React, {useState} from 'react';
  const {height, width} = Dimensions.get('window');
  import {moderateScale} from 'react-native-size-matters';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {SearchData} from '../dummyData/SearchData';
  import CustomStatusBar from '../Components/CustomStatusBar';
  import Header from '../Components/Header';
  import {windowHeight, windowWidth} from '../Utillity/utils';
  import CustomImage from '../Components/CustomImage';
  import CustomText from '../Components/CustomText';
  import Color from '../Assets/Utilities/Color';
  import TextInputWithTitle from '../Components/TextInputWithTitle';
  import { useSelector } from 'react-redux';

const SubscriptionScreen = () => {
    const themeColor = useSelector(state => state.authReducer.ThemeColor);
    const privacy = useSelector(state=> state.authReducer.privacy)
    return (
    <>
    <CustomStatusBar
      backgroundColor={Color.white}
      barStyle={'dark-content'}
    />
    <Header right Title={'Search'} search />

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
        // alignItems: 'center',
      }}>
        </ImageBackground></>
  )
}

export default SubscriptionScreen

const styles = StyleSheet.create({})