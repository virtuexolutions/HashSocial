import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../Utillity/utils';
import React, {useState} from 'react';
import FeedContainer from '../Components/FeedContainer';
import {FlatList, ScrollView} from 'native-base';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

const Feeds = () => {
  const privacy = useSelector(state=> state.authReducer.privacy)
  const themeColor = useSelector(state => state.authReducer.ThemeColor);

  const [selectedTab, SetSelectedTab] = useState('Fitness');
  

  feedsArray = [
    {
      Image: require('../Assets/Images/Feed.png'),
      likes: 2,
      dislikes: 4,
      downloads: 4,
      enabled: true,
      postUser: {
        name: 'Johnathon',
        city: ' new york',
        profilepicture: require('../Assets/Images/avatar3.png'),
      },
      views: 22,
      comments: 20,
      description: 'lorem upsum',

      commentArray: [
        {
          name: 'test',
          date: 20 / 2 / 2022,
          message: 'lorem upsum',
          image: require('../Assets/Images/avatar2.png'),
        },
      ],
    },

    {
      Image: require('../Assets/Images/Feed.png'),
      likes: 2,
      dislikes: 4,
      downloads: 4,
      enabled: true,
      postUser: {
        name: 'steven',
        city: 'new york',
        profilepicture: require('../Assets/Images/avatar2.png'),
      },

      views: 22,
      comments: 20,
      description: 'lorem upsum',

      commentArray: [
        {
          name: 'test',
          date: 20 / 2 / 2022,
          message: 'lorem upsum',
          image: require('../Assets/Images/avatar2.png'),
        },
      ],
    },
  ];

  const Fitness = [
    {
      id: 1,
      name: 'Fitness',
    },
    {
      id: 2,
      name: 'Alchole',
    },
    {
      id: 3,
      name: 'Art',
    },
    {
      id: 4,
      name: 'Sport',
    },
  ];

  return (
   
      <View style={{width: windowWidth}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: moderateScale(40, 0.3),
            position: 'absolute',
            zIndex: 1,
            marginLeft: moderateScale(20, 0.3),
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              justifyContent: 'center',
              marginRight: moderateScale(5, 0.3),
            }}>
            <Icon name={'arrowleft'} as={AntDesign} color={'white'} size={5} />
          </TouchableOpacity>

          {Fitness?.map(item => {
            return (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.9}}
                colors={
                  selectedTab == item?.name
                    ? themeColor
                    : ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)']
                }
                style={{
                  width: windowWidth * 0.2,
                  height: windowHeight * 0.04,
                  borderRadius: (windowHeight * 0.04) / 5,
                  margin: moderateScale(10, 0.3),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    SetSelectedTab(item?.name);
                  }}
                  activeOpacity={0.8}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(12, 0.6),
                      color: Color.white,
                    }}>
                    {item?.name}
                  </CustomText>
                </TouchableOpacity>
              </LinearGradient>
            );
          })}
        </ScrollView>

        <FlatList
          vertical={true}
          showsVerticalScrollIndicator={true}
          data={feedsArray}
          contentContainerStyle={{
            zIndex: 0,
          }}
          renderItem={({item, index}) => {
            return <FeedContainer item={item} />;
          }}
        />
      </View>
  
  );
};

export default Feeds;
