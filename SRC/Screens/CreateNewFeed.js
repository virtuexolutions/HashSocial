import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {useSelector} from 'react-redux';

const CreateNewFeed = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const [feedTitle, setFeedTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Details, setDetails] = useState('');
  const [radio, setRadio] = useState('');

  const architecture = ['#architecture', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue, setDropDownValue] = useState('#Architecture');
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Create New Feed'} showBack search/>
      <ImageBackground
        source={
          privacy == 'private'
            ? require('../Assets/Images/theme2.jpg')
            : require('../Assets/Images/Main.png')
        }
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View style={styles.topContainer}>
          <View style={{}}>
            <TextInputWithTitle
              titleText={'Feed title'}
              placeholder={'Feed Title'}
              setText={setFeedTitle}
              value={feedTitle}
              viewHeight={0.05}
              viewWidth={0.5}
              inputWidth={0.6}
              marginBottom={moderateScale(-15, 0.3)}
              color={Color.black}
              placeholderColor={Color.black}
              style={{fontWeight: 'bold'}}
              multiline
              numberOfLines={4}
            />

            <TextInputWithTitle
              maxLength={2000}
              secureText={false}
              placeholder={'Description'}
              setText={setDescription}
              value={description}
              viewHeight={0.22}
              viewWidth={0.6}
              inputWidth={0.55}
              marginTop={moderateScale(5, 0.3)}
              color={Color.red}
              placeholderColor={Color.themeLightGray}
              multiline
            />
          </View>

          <View
            style={{
              height: windowHeight * 0.25,
              width: windowWidth * 0.32,
              backgroundColor: 'white',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <CustomImage
              source={require('../Assets/Images/gallery3.png')}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
              }}
              // key={it}
              resizeMode={'cover'}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            // width: windowWidth * 0.9,
            height: windowHeight * 0.14,
            marginTop: moderateScale(10, 0.3),
            // backgroundColor:'red',
            // marginLeft: moderateScale(-20, 0.3),
          }}>
          <CustomText
            style={{
              textAlign: 'left',
              // width: windowWidth * 0.5,
              fontSize: moderateScale(15, 0.6),
              marginLeft: moderateScale(30, 0.3),
            }}
            isBold>
            Add The Details
          </CustomText>
          <TextInputWithTitle
            maxLength={2000}
            secureText={false}
            placeholder={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            setText={setDetails}
            value={Details}
            viewHeight={0.13}
            viewWidth={0.99}
            inputWidth={0.99}
            color={Color.red}
            placeholderColor={Color.themeLightGray}
            // backgroundColor={Color.black}
            multiline
          />
        </View>

        <View style={styles.line}></View>
        <DropDownSingleSelect
          array={architecture}
          item={dropDownValue}
          setItem={setDropDownValue}
          width={windowWidth * 0.9}
          placeholder={dropDownValue}
          dropdownStyle={{
            borderBottomWidth: 0,
            width: windowWidth * 0.9,
            marginTop: 10,
          }}
          btnStyle={{
            backgroundColor: '#fff',
            height: windowHeight * 0.05,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.9,
            alignSelf: 'center',
            // backgroundColor:'red',
            marginTop: moderateScale(30, 0.3),
          }}>
          <CustomText
            style={{
              color: '#000',
              fontSize: moderateScale(12, 0.6),
              marginLeft: moderateScale(10, 0.3),
            }}>
            Privacy Setting
          </CustomText>

          <View style={[styles.radioButtonContainer]}>
            <TouchableOpacity
              onPress={() => {
                setRadio('private');
              }}
              style={[
                styles.radioButton,
                {
                  backgroundColor:
                    radio == 'private' ? themeColor[1] : Color.veryLightGray,
                },
              ]}>
              {/* <View style={styles.radioButtonIcon} /> */}
            </TouchableOpacity>
            <CustomText
              onPress={() => {
                setRadio('private');
              }}
              style={styles.radioButtonText}>
              Private
            </CustomText>

            <TouchableOpacity
              onPress={() => {
                setRadio('public');
              }}
              style={[
                styles.radioButton,
                {
                  backgroundColor:
                    radio == 'public' ? themeColor[1] : Color.veryLightGray,
                },
              ]}></TouchableOpacity>
            <CustomText
              onPress={() => {
                setRadio('public');
              }}
              style={styles.radioButtonText}>
              Public
            </CustomText>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  line: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.0004,
    // paddingVertical: moderateScale(15, 0.6),
    backgroundColor: 'white',
    alignSelf: 'center',
    // borderRadius: moderateScale(15, 0.6),
    // alignItems: 'center',
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
  bottomImage: {
    width: windowWidth * 0.4,
    backgroundColor: 'green',
  },

  textContainer: {
    marginTop: moderateScale(20, 0.3),
  },

  Heading: {
    fontSize: moderateScale(20, 0.3),
    // fontWeight: 'bold',
    color: '#ffffff',

    alignSelf: 'flex-start',
  },

  txt3: {
    fontSize: moderateScale(10, 0.6),
    alignSelf: 'center',
    fontWeight: '600',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    // marginTop: moderateScale(10,0.3),
  },
  txt4: {
    color: Color.purple,
    fontSize: moderateScale(15, 0.6),
    marginTop: moderateScale(8, 0.3),
    fontWeight: 'bold',
  },
  txt5: {
    color: Color.white,
    marginTop: moderateScale(10, 0.3),
    fontSize: moderateScale(12, 0.6),
  },
  dropDown: {
    backgroundColor: Color.red,
  },
  privacyContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10, 0.3),
  },
  topContainer: {
    width: windowWidth,
    height: windowHeight * 0.28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: moderateScale(20, 0.3),
    marginLeft: moderateScale(-20, 0.3),
    // backgroundColor:'black'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: windowWidth * 0.5,
    paddingLeft: moderateScale(20, 0.3),
  },
  radioButton: {
    height: moderateScale(11, 0.6),
    width: moderateScale(11, 0.6),
    backgroundColor: '#e8e8e8',
    borderRadius: moderateScale(11, 0.6),
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 8,
    width: 8,
    borderRadius: moderateScale(7, 0.6),
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: moderateScale(12, 0.6),
    fontWeight: '600',
    color: '#000',
  },
});

export default CreateNewFeed;
