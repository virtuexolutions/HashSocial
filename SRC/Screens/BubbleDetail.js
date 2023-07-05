import {
  StyleSheet,
  View,
  ImageBackground,
 
} from 'react-native';
import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';

const BubbleDetail = () => {
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Notifications'} search />

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View style={styles.profileSection}>
          <CustomImage
            source={require('../Assets/Images/dummyman1.png')}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.Box}>
          <CustomText
            style={{
              marginTop: moderateScale(45, 0.3),
              fontSize: moderateScale(17, 0, 6),
              // fontWeight: '700',
              textAlign: 'center',
              color: '#000',
            }}
            isBold>
            Bubble Title
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(10, 0, 6),
              color: '#000',
              // marginTop: moderateScale(50, 0.3),
              textAlign: 'center',
            }}>
            #Architecture
          </CustomText>

          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              width: windowWidth * 0.85,
              alignSelf:'center',
              textAlign: 'center',
              lineHeight:18,
              marginTop: moderateScale(10, 0.3),
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </CustomText>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth * 0.85,
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
            //   marginTop: moderateScale(10, 0.3),
            }}>Moderator: </CustomText>
            <CustomText style={{
              fontSize: moderateScale(14, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
            //   marginTop: moderateScale(10, 0.3),
            }} isBold>
              Jonathan
            </CustomText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth * 0.85,
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
            //   marginTop: moderateScale(10, 0.3),
            }}>Admin: </CustomText>
            <CustomText style={{
              fontSize: moderateScale(14, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
            //   marginTop: moderateScale(10, 0.3),
            }} isBold>
              Jonathan
            </CustomText>
          </View>
          <CustomText style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
              width: windowWidth * 0.85,
              marginTop: moderateScale(10, 0.3),
            //   marginTop: moderateScale(10, 0.3),
            }} >
              Approval for admittance
            </CustomText>

         

            <CustomText style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
              width: windowWidth * 0.85,
              marginTop: moderateScale(10, 0.3),
            //   marginTop: moderateScale(10, 0.3),
            }} >
              Approval to post
            </CustomText>

            <CustomText style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              alignSelf:'center',
              textAlign: 'center',
              width: windowWidth * 0.85,
              marginTop: moderateScale(10, 0.3),
            //   marginTop: moderateScale(10, 0.3),
            }} >
              Membership Cost
            </CustomText>
        </View>
      </ImageBackground>
    </>
  );
};

export default BubbleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    borderRadius: (windowWidth * 0.3) / 2,
    overflow: 'hidden',
    // backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#00801f',
    // justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1,
    marginTop: moderateScale(40, 0.3),
  },

  Box: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: moderateScale(-40, 0.3),
    borderRadius: 15,
    elevation: 10,
  },
});
