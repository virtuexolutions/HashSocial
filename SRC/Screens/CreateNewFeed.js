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
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';
import ImagePickerModal from '../Components/ImagePickerModal';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

const CreateNewFeed = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const [feedTitle, setFeedTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Details, setDetails] = useState('');
  const [radio, setRadio] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [image, setImage] = useState({});
  const [showModal, setShowModal] = useState(false);

  const architecture = ['#architecture', 'ABC', 'BCD', 'CDE'];
  const [dropDownValue, setDropDownValue] = useState('#Architecture');
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Create New Feed'} showBack />
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
          <View
            style={
              {
                // borderWidth : 1,
                // paddingRight : moderateScale(7,0.6),
                // paddingBottom : moderateScale(7,0.6),
                // paddingVertical:moderateScale(10,.6),
                // backgroundColor:'green '
              }
            }>
              <View
            style={[
              {
                height: windowHeight * 0.27,
                width: windowWidth *0.95,
                backgroundColor: 'white',
                borderRadius: moderateScale(20, 0.6),
                marginLeft: moderateScale(5, 0.3),
                justifyContent: 'center',
                overflow: 'hidden',
              },
              Object.keys(image).length == 0 && {
                alignItems: 'center',
              },
            ]}>
            {Object.keys(image).length > 0 ? (
              <CustomImage
                source={{uri: image?.uri}}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                onPress={() => {
                  setShowModal(true);
                }}
              />
            ) : (
              // <TouchableOpacity activeOpacity={0.7} style={styles.image}>

              <Icon
                name={'camera'}
                as={Entypo}
                size={moderateScale(45, 0.6)}
                onPress={() => {
                  setShowModal(true);
                }}
              />

              // </TouchableOpacity>
            )}
          </View>
            <CustomText
              style={{
                textAlign: 'left',
                // width: windowWidth * 0.5,
                marginTop:moderateScale(10,.3),
                fontSize: moderateScale(15, 0.6),
                marginLeft: moderateScale(30, 0.3),
              }}
              isBold>
              Feed Title
            </CustomText>
            <TextInputWithTitle
              titleText={'Feed title'}
              placeholder={'Feed Title'}
              setText={setFeedTitle}
              value={feedTitle}
              viewHeight={0.05}
              viewWidth={0.5}
              inputWidth={0.6}
              marginBottom={moderateScale(-10, 0.3)}
              color={Color.black}
              placeholderColor={Color.themeLightGray}
              style={{fontWeight: 'bold'}}
              multiline
              numberOfLines={4}
            />

            {/* <TextInputWithTitle
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
              border={1}
              // marginLeft ={moderateScale(10,0.3)}
              borderColor={Color.white}
              placeholderColor={Color.themeLightGray}
              multiline
            /> */}
          </View>

          
        </View>
        {/* <View style={styles.line}></View> */}
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
            Add The description
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
        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator color={'#01E8E3'} size={'small'} />
            ) : (
              'Submit'
            )
          }
          textColor={themeColor[1]}
          width={windowWidth * 0.4}
          height={windowHeight * 0.06}
          // marginTop={moderateScale(10, 0.3)}
          bgColor={['#FFFFFF', '#FFFFFF']}
          borderRadius={moderateScale(30, 0.3)}
          isGradient
          isBold={true}
          marginTop={moderateScale(30, 0.3)}
          // marginBottom={moderateScale(50)}
          onPress={() => {
            navigationService.navigate('HomeScreen');
          }}
        />
      </ImageBackground>
      <ImagePickerModal
        show={showModal}
        setShow={setShowModal}
        setFileObject={setImage}
      />
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
  image: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.3,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    // height: windowHeight * 0.28,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    // marginTop: moderateScale(20, 0.3),
    // marginLeft: moderateScale(-20, 0.3),
    // backgroundColor: 'black',
    paddingVertical: moderateScale(10, 0.6),
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
