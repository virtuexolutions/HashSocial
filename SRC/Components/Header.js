import React, {useState} from 'react';
import {Icon} from 'native-base';
import {View, Platform, Dimensions, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
const {height, width} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const Header = props => {
  const {
  showBack ,
  Title ,
  right ,

  } = props;

  return (
   <View style={{
    width : windowWidth ,
    height : windowHeight * 0.1 ,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
   }}>
    {
      showBack ?
      <Icon 
      name={'left'}
      as={FontAwesome}
      size={moderateScale(15,0.6)}
      color={Color.white}
      style={{
        position : 'absolute' ,
        left : moderateScale(20,0.6),
        // width : moderateScale(100,0.6),
        // height : windowHeight * 0.1,
  
      }}
      />
      :
    
      <View style={{
        position : 'absolute' ,
        left : 10,
        width : moderateScale(30,0.6),
        height : 40,
  
      }}>
    <CustomImage
    source={require('../Assets/Images/logosmall.png')}
    resizeMode={'stretch'}
    style={{
      width : '100%',
      height : '100%',

    }}
    />
    </View>
  }
    {Title && <CustomText style={{fontSize: 23}} isBold>{Title}</CustomText>}
      {
        right &&
        <Icon 
        name={'reorder-three'}
        as={Ionicons}
        size={moderateScale(40,0.6)}
        color={'#01E8E3'}
        style={{
          position : 'absolute' ,
          right : moderateScale(20,0.6),
          // width : moderateScale(100,0.6),
          // height : windowHeight * 0.1,
          
        }}
        />}
        </View>
  );
};
const styles = ScaledSheet.create({
  header1: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: Color.white,
    marginBottom: moderateScale(5, 0.3),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  statusModal: {
    alignSelf: 'flex-end',
    paddingVertical: moderateScale(15, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    backgroundColor: Color.white,
    // borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(60, 0.3),
    // borderWidth: 1,
    borderColor: Color.green,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  header2: {
    width: windowWidth,
    // height: windowHeight * 0.13,
    backgroundColor: Color.themeColor,
    // justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  notificationCircle: {
    position: 'absolute',
    height: moderateScale(10, 0.3),
    width: moderateScale(10, 0.3),
    borderRadius: moderateScale(5, 0.3),
    backgroundColor: Color.green,
    right: moderateScale(5, 0.3),
    // marginTop : moderateScale(10,0.3)
  },
});
export default Header;
