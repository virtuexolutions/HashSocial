import React, {useCallback, useEffect, useState} from 'react';
import {ImageBackground, View, TouchableOpacity} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {FlatList, Icon, Image, ScrollView} from 'native-base';

import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomImage from '../Components/CustomImage';
import {mode} from 'native-base/lib/typescript/theme/tools';
import ImagePickerModal from '../Components/ImagePickerModal';

const MyGallery = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState({});
  const [selectedImages, setselectedImages] = useState([]);
  const [selected, setSelected] = useState(-1);
  console.log(
    '🚀 ~ file: MyGallery.js:23 ~ MyGallery ~ selectedImages:',
    selectedImages,
  );
  console.log(
    '🚀 ~ file: MyGallery.js:21 ~ MyGallery ~ profilePicture:',
    profilePicture,
  );

  const [images, setImages] = useState([
    {
      id: 1,
      uri: 'camera',
    },
    {
      id: 2,
      url: require('../Assets/Images/gallery1.png'),
    },
    {
      id: 3,
      url: require('../Assets/Images/gallery2.png'),
    },
    {
      id: 4,
      url: require('../Assets/Images/gallery3.png'),
    },
    {
      id: 5,
      url: require('../Assets/Images/gallery4.png'),
    },
    {
      id: 6,
      url: require('../Assets/Images/gallery5.png'),
    },

    {
      id: 7,
      url: require('../Assets/Images/gallery6.png'),
    },
    {
      id: 8,
      url: require('../Assets/Images/gallery7.png'),
    },
    {
      id: 9,
      url: require('../Assets/Images/gallery8.png'),
    },
  ]);
  console.log('🚀 ~ file: MyGallery.js:63 ~ MyGallery ~ images:', images);

  useEffect(() => {
    if (Object.keys(profilePicture).length > 0) {
      const newData = images.slice(1);
      newData.unshift(profilePicture);
      newData.unshift(images[0]);
      console.log('🚀 ~ file: MyGallery.js:67 ~ useEffect ~ newData:', newData);
      setImages(newData);
      setProfilePicture({});
    }
  }, [profilePicture]);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'My Gallery'} search/>
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            justifyContent: 'space-between',
            marginTop: moderateScale(20, 0.3),
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: selectedTab == 'All' ? 'white' : '#353434',
              width: windowWidth * 0.2,
              textAlign: 'center',
              marginTop: moderateScale(10, 0.3),
              //   alignSelf:'center',
            }}
            isBold={true}
            children={'All'}
            onPress={() => {
              setSelectedTab('All');
            }}
          />
          <View
            style={{
              width: windowWidth * 0.006,
              height: windowHeight * 0.02,
              backgroundColor: 'black',
              marginTop: moderateScale(10, 0.3),

            }}></View>
          <CustomText
            style={{
              color: selectedTab == 'Photos' ? 'white' : '#353434',
              fontSize: moderateScale(12, 0.6),
              width: windowWidth * 0.2,
              textAlign: 'center',
              marginTop: moderateScale(10, 0.3),
            }}
            isBold={true}
            onPress={() => {
              setSelectedTab('Photos');
            }}
            children={'Photos'}
          />

          <View
            style={{
              width: windowWidth * 0.006,
              height: windowHeight * 0.02,
              backgroundColor: 'black',
              marginTop: moderateScale(10, 0.3),

              // alignItems:'center',
              // justifyContent:'center',
            }}></View>
          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: '#353434',
              width: windowWidth * 0.2,
              color: selectedTab == 'Video' ? 'white' : '#353434',
              textAlign: 'center',
              marginTop: moderateScale(10, 0.3),
            }}
            isBold={true}
            onPress={() => {
              setSelectedTab('Video');
            }}
            children={'Video'}
          />
        </View>

        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.65,
            justifyContent: 'space-between',
            marginTop: moderateScale(20, 0.3),
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}>
          <FlatList
            numColumns={3}
            data={images}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              //   console.log('index:', item);
              return (
                <TouchableOpacity
                  style={{
                    height: windowHeight * 0.2,
                    width: windowWidth * 0.285,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    overflow: 'hidden',
                    marginVertical: moderateScale(5, 0.3),
                    marginHorizontal: moderateScale(2, 0.3),
                  }}>
                  {index == 0 ? (
                    <Icon
                      name="camera"
                      as={Entypo}
                      size={41}
                      color={'black'}
                      style={{alignSelf: 'center', top: 50}}
                      onPress={() => {
                        // console.log('here')
                        setShowModal(true);
                      }}
                    />
                  ) : (
                    <CustomImage
                      source={item?.uri ? {uri: item?.uri} : item?.url}
                      onPress={() => {
                        const isSelected = selectedImages.findIndex(data => data?.id == item?.id);
                        setSelected(isSelected);
                        console.log(
                          '🚀 ~ file: MyGallery.js:216 ~ MyGallery ~ index:',
                          isSelected
                        );
                        if (isSelected > -1) {
                          const dataNew = selectedImages.filter(data => data?.id != item?.id);
                          setselectedImages(dataNew);
                        } else {
                          setselectedImages(prev => [...prev, item]);
                        }
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                      }}
                      key={item?.id}
                    />
                  )}
                  {selectedImages.findIndex(data => data?.id == item?.id) >
                    -1 && (
                    <TouchableOpacity
                    onPress={() => {
                      const isSelected = selectedImages.findIndex(data => data?.id == item?.id);
                      setSelected(isSelected);
                      console.log(
                        '🚀 ~ file: MyGallery.js:216 ~ MyGallery ~ index:',
                        isSelected
                      );
                      if (isSelected > -1) {
                        const dataNew = selectedImages.filter(data => data?.id != item?.id);
                        setselectedImages(dataNew);
                      } else {
                        setselectedImages(prev => [...prev, item]);
                      }
                    }}
                      style={{
                        height: windowHeight * 0.2,
                        width: windowWidth * 0.285,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        position: 'absolute',
                        zIndex: 1,
                      }}>
                      <Icon
                        name="check"
                        as={Entypo}
                        color={'#0E9AB0'}
                        size={50}
                        zIndex={1}
                        style={{alignSelf: 'center', top: 50}}
                      />
                    
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <CustomButton
          text={'Next'}
          textColor={'#0E9AB0'}
          width={windowWidth * 0.4}
          height={windowHeight * 0.06}
          marginTop={moderateScale(10, 0.3)}
          onPress={() => {
            // disptach(setUserToken({token : 'fasdasd awdawdawdada'}))
            navigationService.navigate('Signup');
          }}
          bgColor={['#FFFFFF', '#FFFFFF']}
          borderRadius={moderateScale(30, 0.3)}
          isGradient
          isBold={true}
        />
      </ImageBackground>
      <ImagePickerModal
        show={showModal}
        setShow={setShowModal}
        setFileObject={setProfilePicture}
      />
    </>
  );
};

const styles = ScaledSheet.create({
  conatiner: {
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
});

export default MyGallery;
