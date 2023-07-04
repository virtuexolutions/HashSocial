import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {Icon, ScrollView} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomSwitch from '../Components/CustomSwitch';
import CustomButton from '../Components/CustomButton';

const CreateNewBubble = () => {
  const [CreateBubble, setCreateBubble] = useState('');
  const [Admin, setAdmin] = useState('');
  const architecture = ['#architecture', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue, setDropDownValue] = useState('#Architecture');

  const ApprovalForAdmittance = [
    'Approval For Admittance',
    'ABC',
    'BCD',
    'CDE',
  ];

  const [dropDownValue1, setDropDownValue1] = useState(
    'Approval For Admittance',
  );

  const ApprovaltoPost = ['Approval To Post', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue2, setDropDownValue2] = useState('Approval To Post');

  const MembershipCost = ['Member ship Cost', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue3, setDropDownValue3] = useState('Member ship Cost');

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right />

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
        }}>
        <ScrollView nestedScrollEnabled>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(15, 0.3),
              padding: moderateScale(10, 0.6),
            }}>
            <CustomText
              style={{
                color: Color.black,
                width: windowWidth * 0.2,
                marginTop: moderateScale(12, 0.3),
              }}
              isBold>
              Bubble Title
            </CustomText>

            <DropDownSingleSelect
              array={architecture}
              item={dropDownValue}
              setItem={setDropDownValue}
              width={windowWidth * 0.3}
              placeholder={dropDownValue}
              dropdownStyle={{
                borderBottomWidth: 0,
                width: windowWidth * 0.3,
                height: windowHeight * 0.05,
                // backgroundColor: 'red',
              }}
              btnStyle={{
                backgroundColor: '#fff',
                width: windowWidth * 0.2,
                height: windowHeight * 0.04,
              }}
            />

            <View
              style={{
                height: windowHeight * 0.27,
                width: width * 0.4,
                backgroundColor: '#dddbdb',
                borderRadius: moderateScale(20, 0.6),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: height * 0.04,
                  width: windowWidth * 0.3,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    color: Color.black,
                    fontSize: moderateScale(9, 0.6),
                  }}>
                  Choose Your File
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Divider Start */}

          <View
            style={{
              width: '90%',
              height: 2,
              backgroundColor: '#a0e8eb',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: moderateScale(10, 0.3),
            }}></View>

          {/* Bottom Divider END */}

          <View
            style={{
              height: windowHeight * 0.27,
              width: windowWidth * 0.9,
              alignSelf: 'center',
              marginTop: moderateScale(18, 0.3),
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: windowHeight * 0.03,
                width: windowWidth * 0.9,
                backgroundColor: '#fff',
                borderRadius: 20,
                marginTop: moderateScale(10, 0.3),
              }}>
              <CustomText
                style={{
                  width: windowWidth * 0.35,
                  color: Color.black,
                  fontSize: moderateScale(11, 0.6),
                  paddingLeft: moderateScale(5, 0.6),
                }}>
                Moderator :
              </CustomText>

              <TextInputWithTitle
                placeholder={'Jonathan'}
                setText={setCreateBubble}
                value={CreateBubble}
                viewHeight={0.06}
                viewWidth={0.7}
                inputWidth={0.8}
                color={Color.black}
                placeholderColor={Color.black}
                borderRadius={moderateScale(20, 0.3)}
                style={{fontWeight: '800'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: windowHeight * 0.03,
                width: windowWidth * 0.9,
                backgroundColor: '#fff',
                borderRadius: 20,
                paddingLeft: moderateScale(20, 0.6),
                marginTop: moderateScale(10, 0.3),
              }}>
              <TextInputWithTitle
                placeholder={'Admin'}
                setText={setAdmin}
                value={Admin}
                viewHeight={0.06}
                viewWidth={0.7}
                inputWidth={0.9}
                color={Color.black}
                placeholderColor={Color.black}
                borderRadius={moderateScale(20, 0.3)}
              />
            </View>

            <DropDownSingleSelect
              array={ApprovalForAdmittance}
              item={dropDownValue1}
              setItem={setDropDownValue1}
              width={windowWidth * 0.9}
              placeholder={dropDownValue1}
              dropdownStyle={{
                borderBottomWidth: 0,
                width: windowWidth * 0.9,
                marginTop: 10,
              }}
              btnStyle={{
                backgroundColor: '#fff',
                height: windowHeight * 0.03,
              }}
            />

            <DropDownSingleSelect
              array={ApprovaltoPost}
              item={dropDownValue2}
              setItem={setDropDownValue2}
              width={windowWidth * 0.9}
              placeholder={dropDownValue2}
              dropdownStyle={{
                borderBottomWidth: 0,
                width: windowWidth * 0.9,
              }}
              btnStyle={{
                backgroundColor: '#fff',
                height: windowHeight * 0.03,
              }}
            />

            <DropDownSingleSelect
              array={MembershipCost}
              item={dropDownValue3}
              setItem={setDropDownValue3}
              width={windowWidth * 0.9}
              placeholder={dropDownValue3}
              dropdownStyle={{
                borderBottomWidth: 0,
                width: windowWidth * 0.9,
              }}
              btnStyle={{
                backgroundColor: '#fff',
                height: windowHeight * 0.03,
              }}
            />
          </View>

          {/*  Divider Start */}
          <View
            style={{
              width: '90%',
              height: 2,
              backgroundColor: '#a0e8eb',
              justifyContent: 'center',
              alignSelf: 'center',
            }}></View>

          {/*  Divider END */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              height: windowHeight * 0.12,
              width: width * 0.9,
              alignSelf: 'center',
              marginTop: moderateScale(10, 0.3),
            }}>
            <LinearGradient
              style={{
                height: windowWidth * 0.2,
                width: windowWidth * 0.2,
                borderWidth: 1,
                borderColor: '#975e18',
                borderRadius: (windowWidth * 0.2) / 2,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={['#f0cd60', '#f8e290', '#d8ad3f', '#915711']}>
              <Icon
                name="crown"
                as={MaterialCommunityIcons}
                size={50}
                color="#fff"
              />
            </LinearGradient>

            <LinearGradient
              style={{
                height: windowWidth * 0.2,
                width: windowWidth * 0.2,
                borderWidth: 1,
                borderColor: '#dfdfe0',
                borderRadius: (windowWidth * 0.2) / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={['#ebebeb', '#b3b3b5', '#9c9a9f']}>
              <Icon
                name="crown"
                as={MaterialCommunityIcons}
                size={50}
                color="#fff"
              />
            </LinearGradient>

            <LinearGradient
              style={{
                height: windowWidth * 0.2,
                width: windowWidth * 0.2,
                borderWidth: 1,
                borderColor: '#dfdfe0',
                borderRadius: (windowWidth * 0.2) / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={['#ebebeb', '#b3b3b5', '#9c9a9f']}>
              <Icon
                name="crown"
                as={MaterialCommunityIcons}
                size={50}
                color="#fff"
              />
            </LinearGradient>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(12, 0.6),
              }}
              isBold>
              Gold{`\n`}Membership
            </CustomText>

            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(12, 0.6),
              }}
              isBold>
              Platinum{`\n`}Membership
            </CustomText>

            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(12, 0.6),
              }}
              isBold>
              Silver{`\n`}Membership
            </CustomText>
          </View>

          <View
            style={{
              height: windowHeight * 0.10,
              width: windowWidth * 0.8,
              marginTop: moderateScale(15, 0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              padding: moderateScale(20, 0.6),
            }}>
            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(13, 0.6),
              }}>
              Privacy Setting
            </CustomText>

            <CustomSwitch
              selectionMode={2}
              roundCorner={true}
              option1={'Private'}
              option2={'Public'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#12d50e'}
            />
          </View>

          <CustomButton
            text={'Next'}
            textColor={'#0E9AB0'}
            width={windowWidth * 0.4}
            height={windowHeight * 0.06}
            marginTop={moderateScale(10, 0.3)}
            bgColor={['#FFFFFF', '#FFFFFF']}
            borderRadius={moderateScale(30, 0.3)}
            isGradient  
            isBold={true}
            marginBottom={moderateScale(50)}
          />


         
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default CreateNewBubble;
