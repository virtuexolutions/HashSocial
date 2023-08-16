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
import AntDesign from 'react-native-vector-icons/AntDesign'

const CardComponent = ({item, pending, check, close, edit}) => {
  return (
    // <>
    <View style={styles.row}>
      <View style={styles.profileSection}>
        <CustomImage
          source={item.image}
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <View
        style={{
          paddingLeft: moderateScale(15, 0.6),
          width: windowWidth * 0.45,
          // backgroundColor:'red',
          // justifyContent:'center',
          // alignItems:'center'
        }}>
        <CustomText
          numberOfLines={1}
          style={{
            fontSize: moderateScale(16, 0.6),
            color: '#000',
            fontWeight: '500',
            textAlign: 'left',
          }}>
          {item?.name}
        </CustomText>
        <CustomText
          numberOfLines={1}
          style={{
            fontSize: moderateScale(11, 0.6),
            color: '#000',
            textAlign: 'left',
          }}>
          {item?.Time}
        </CustomText>
        <CustomText
          style={{
            fontSize: moderateScale(11, 0.6),
            color: '#000',
            textAlign: 'left',
          }}>
          {item?.title}
        </CustomText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          // backgroundColor: 'red',
          width: windowWidth * 0.3,
        }}>
        {pending && (
          <CustomButton
            text={'Pending'}
            textColor={Color.black}
            // width={windowWidth * 0.13}
            height={windowHeight * 0.05}
            fontSize={moderateScale(10, 0.6)}
            bgColor={'#FFFFFF'}
            borderRadius={moderateScale(10, 0.3)}
            paddingHorizontal={moderateScale(5, 0.3)}
            marginRight={moderateScale(5, 0.3)}
          />
        )}
        {check && (
          <CustomButton
            iconName={'check'}
            iconType={Entypo}
            iconStyle={{
              // width: 20,
              // height: 20,
              color: Color.black,
              // padding: 55,
              // marginLeft: 92,
            }}
            textColor={Color.black}
            // width={windowWidth * 0.15}
            height={windowHeight * 0.05}
            fontSize={moderateScale(12, 0.6)}
            borderRadius={moderateScale(10, 0.3)}
            bgColor={'#FFFFFF'}
            paddingHorizontal={moderateScale(15, 0.3)}
            marginRight={moderateScale(5, 0.3)}

            // onPress={}
          />
        )}
        {edit && (
          <CustomButton
            text={'Edit'}
            textColor={Color.black}
            width={windowWidth * 0.13}
            height={windowHeight * 0.05}
            fontSize={moderateScale(10, 0.6)}
            borderRadius={moderateScale(10, 0.3)}
            bgColor={'#FFFFFF'}
            paddingHorizontal={moderateScale(5, 0.3)}
            marginRight={moderateScale(5, 0.3)}
          />
        )}
        {close && (
          <CustomButton
            iconName={'cross'}
            iconType={Entypo}
            iconStyle={{
              // width: 120,
              // height: 120,
              color: Color.black,
              // padding: 55,
              // marginLeft: 92,
            }}
            textColor={Color.black}
            // width={windowWidth * 0.15}
            height={windowHeight * 0.05}
            fontSize={moderateScale(12, 0.6)}
            borderRadius={moderateScale(10, 0.3)}
            paddingHorizontal={moderateScale(15, 0.3)}
            marginRight={moderateScale(5, 0.3)}
            bgColor={'#FFFFFF'}
          />
        )}
        {!item?.bubble && (item?.title == 'Requestor' ? (
          <>
            <CustomButton
              iconName={'check'}
              iconType={Entypo}
              iconStyle={{
                // width: 120,
                // height: 120,
                color: Color.black,
                // padding: 55,
                // marginLeft: 92,
              }}
              textColor={Color.black}
              // width={windowWidth * 0.15}
              height={windowHeight * 0.05}
              fontSize={moderateScale(12, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(15, 0.3)}
              marginRight={moderateScale(5, 0.3)}
              bgColor={'#FFFFFF'}
            />
            <CustomButton
              iconName={'cross'}
              iconType={Entypo}
              iconStyle={{
                // width: 120,
                // height: 120,
                color: Color.black,
                // padding: 55,
                // marginLeft: 92,
              }}
              textColor={Color.black}
              // width={windowWidth * 0.15}
              height={windowHeight * 0.05}
              fontSize={moderateScale(12, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(15, 0.3)}
              marginRight={moderateScale(5, 0.3)}
              bgColor={'#FFFFFF'}
            />
          </>
        ) : item?.title == 'Member' ? (
          <>
            <CustomButton
              iconName={'pause'}
              iconType={AntDesign}
              iconStyle={{
                // width: 120,
                // height: 120,
                color: Color.black,
                // padding: 55,
                // marginLeft: 92,
              }}
              textColor={Color.black}
              // width={windowWidth * 0.15}
              height={windowHeight * 0.05}
              fontSize={moderateScale(12, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(15, 0.3)}
              marginRight={moderateScale(5, 0.3)}
              bgColor={'#FFFFFF'}
            />
            <CustomButton
              iconName={'cross'}
              iconType={Entypo}
              iconStyle={{
                // width: 120,
                // height: 120,
                color: Color.black,
                // padding: 55,
                // marginLeft: 92,
              }}
              textColor={Color.black}
              // width={windowWidth * 0.15}
              height={windowHeight * 0.05}
              fontSize={moderateScale(12, 0.6)}
              borderRadius={moderateScale(10, 0.3)}
              paddingHorizontal={moderateScale(15, 0.3)}
              marginRight={moderateScale(5, 0.3)}
              bgColor={'#FFFFFF'}
            />
          </>
        ) : item?.title == 'Invited' ? (
          <CustomButton
            text={'invited'}
            textColor={Color.black}
            // width={windowWidth * 0.13}
            height={windowHeight * 0.05}
            fontSize={moderateScale(10, 0.6)}
            bgColor={'#FFFFFF'}
            borderRadius={moderateScale(10, 0.3)}
            paddingHorizontal={moderateScale(5, 0.3)}
            marginRight={moderateScale(5, 0.3)}
          />
        ) : (
          <></>
        ))}
      </View>
    </View>

    //   {/* <View style={styles.line}></View>
    // </> */}
  );
};
export default CardComponent;

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
