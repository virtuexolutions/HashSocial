import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import CustomText from './CustomText'
import CustomButton from './CustomButton'
import {Icon} from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Color from '../Assets/Utilities/Color'

const AlertModal = ({isvisible, setIsVisible}) => {
    
  return (
    <View
    isvisible={isvisible}
    style={{
        backgroundColor:Color.white,
        padding:moderateScale(15,.3),
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:moderateScale(20,.6),
        borderRadius:12
    }}>
        {/* <CustomButton
                    iconName={'cross'}
                    iconType={Entypo}
                    // iconSize={50}
                    // iconStyle={{
                    //   width: 120,
                    // //   height: 120,
                    //   color: Color.black,
                    //   padding: 55,
                    //   marginLeft: 92,
                    // }}
                    // text={'Cancel'}
                    textColor={Color.black}
                    width={windowHeight * 0.07}
                    height={windowHeight * 0.07}
                    borderRadius={windowHeight * 0.07/2}
                    // borderRadius={windowHeight * 0.05/2}
                    fontSize={moderateScale(12, 0.6)}
                    // paddingHorizontal={moderateScale(15, 0.3)}
                    // marginRight={moderateScale(5, 0.3)}
                    bgColor={'#FFFFFF'}
                  /> */}
      <CustomText style={{
        paddingVertical:moderateScale(20,.3),
        fontSize:moderateScale(15,.3),

      }}>Are you sure to switch this profile</CustomText>
      <View style={{
        // backgroundColor:'green',
       width : windowWidth*0.45,
        flexDirection:'row',
        justifyContent:'space-between',
      }}>


      <CustomButton
                    // iconName={'cross'}
                    // iconType={Entypo}
                    // iconStyle={{
                      // width: 120,
                      // height: 120,
                    //   color: Color.black,
                      // padding: 55,
                      // marginLeft: 92,
                    // }}
                    onPress={setIsVisible(false)}
                    text={'Cancel'}
                    textColor={Color.black}
                    // width={windowWidth * 0.15}
                    height={windowHeight * 0.05}
                    fontSize={moderateScale(12, 0.6)}
                    borderRadius={moderateScale(10, 0.3)}
                    paddingHorizontal={moderateScale(15, 0.3)}
                    marginRight={moderateScale(5, 0.3)}
                    bgColor={Color.lightGrey}
                  /> 
                  <CustomButton
                    // iconName={'cross'}
                    // iconType={Entypo}
                    // iconStyle={{
                      // width: 120,
                      // height: 120,
                    //   color: Color.black,
                      // padding: 55,
                      // marginLeft: 92,
                    // }}
                    text={'Confirm'}
                    textColor={Color.black}
                    // width={windowWidth * 0.5}
                    height={windowHeight * 0.05}
                    fontSize={moderateScale(12, 0.6)}
                    borderRadius={moderateScale(10, 0.3)}
                    paddingHorizontal={moderateScale(15, 0.3)}
                    marginRight={moderateScale(5, 0.3)}
                    bgColor={Color.lightGrey}
                  />
      </View>
    </View>
  )
}

export default AlertModal

const styles = StyleSheet.create({})