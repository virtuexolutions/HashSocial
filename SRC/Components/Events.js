import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import Entypo from 'react-native-vector-icons/Entypo';
import {Icon} from 'native-base';
import TextInputWithTitle from './TextInputWithTitle';
import {useSelector} from 'react-redux';
import navigationService from '../navigationService';
import {FlatList} from 'react-native';
import { Get } from '../Axios/AxiosInterceptorFunction';
// import { TextInput } from 'react-native-gesture-handler';

const Events = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const token = useSelector(state => state.authReducer.token);
  const [search, setSearch] = useState('');
const [isLoading, setIsLoading] = useState(false)

  const getEvents =async()=>{
    const url = 'auth/event'
    setIsLoading(true)
    const response = await Get(url, token)
    setIsLoading(false)
    if(response != undefined){
      console.log("🚀 ~ file: Events.js:34 ~ getEvents ~ response:", response)

    }
    
  }

  const PostData = [
    {
      id: 1,
      Name: 'UI-Design Session',
      date: 'July 19 ',
      desc: `124 degrees can't stop us from running into the desert for some quick potraits`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/travel3.jpg'),
      video: null,
      place: 'New York, NY',
      time: 'thu 10:15',
      Like: 15,
      love: 1100,
      comment: 44,
      View: null,
    },
    {
      id: 2,
      Name: 'Coding Course',
      time: 'fri 9:20',
      date: 'Aug 24 ',
      place: 'New York, NY',
      desc: 'The mountains are calling, and I must go!',
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/travel.jpg'),
      video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      Like: 357,
      love: 4100,
      comment: 205,
      View: 1084,
    },

    {
      id: 3,
      Name: 'Gilan kamel ',
      date: 'Aug 01',
      time: 'Mon 12:15',
      place: 'New York, NY',
      desc: 'Pastries in paris or take a pasta making class in italy. Where would you go if you could save 70% or more on Europe',
      profileImage: require('../Assets/Images/avatar4.png'),
      image: require('../Assets/Images/travel2.jpg'),
      video: null,
      Like: 357,
      love: 4100,
      comment: 205,
      View: null,
    },
    {
      id: 4,
      Name: 'Gilan kamel',
      date: 'Dec 04',
      time: 'Sat  6:15',
      place: 'New York, NY',
      desc: `Capturing the pure joy of childhood creativity! These little artists are turning blank canvases into vibrant masterpieces. It's incredible to witness their boundless imaginations at work.`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/travel3.jpg'),
      video: null,
      Like: 457,
      love: 1800,
      comment: 905,
      View: null,
    },
  ];

  return (
    <View
      style={styles.container}>
      <View
        style={styles.cover}>
        <View
          style={{
            width: windowWidth * 0.08,
            height: windowWidth * 0.08,
            borderRadius: (windowWidth * 0.08) / 2,
            overflow: 'hidden',
          }}>
          <CustomImage
            source={require('../Assets/Images/fitness2.png')}
            style={{
              height: '100%',
              width: '100%',
            }}
            //   resizeMode={'stretch'}
          />
        </View>
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            navigationService.navigate('AddEvents');
          }}>
          <CustomText
            style={{
              color: 'black',
              fontSize: moderateScale(13, 0.6),
              width: windowWidth * 0.6,
            }}
            onPress={() => {
              navigationService.navigate('AddEvents');
            }}>
            any up Coming event?
          </CustomText>
        </TouchableOpacity>

        <View>
          <Icon name={'images'} as={Entypo} color={'white'} size={7} />
        </View>
      </View>

      <FlatList
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        data={PostData}
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                width: windowWidth,
                paddingHorizontal:moderateScale(15,.6),
                padding:moderateScale(5,.6),
                borderRadius:moderateScale(20,.6)
              }}>
              <CustomText
                style={{fontSize: moderateScale(20, 0.6), color: 'black'}}
                isBold>
                Popular Events
              </CustomText>
            </View>
          );
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(30, 0.6),
        }}
        renderItem={({item}) => {
          return (
            <>
              <TouchableOpacity
              onPress={()=>{
                navigationService.navigate('EventDetails', {item : item})}}
                style={styles.eventCard}>
                <View style={styles.profileImage}>
                  <CustomImage
                  onPress={()=>{
                    navigationService.navigate('EventDetails', {item : item})}}
                    source={item?.image}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    //   resizeMode={'stretch'}
                  />
                </View>
                <View
                  style={styles.dateContainer}>
                  <View
                    style={styles.detailContainer}>
                    <CustomText
                      numberOfLines={2}
                      style={styles.date}>
                      {item?.date}
                    </CustomText>
                  </View>
                  <View style={{paddingHorizontal: moderateScale(5, 0.6)}}>
                    <CustomText
                      numberOfLines={1}
                      style={[styles.text,{color:themeColor[1]}]}
                      isBold>
                      {item?.Name}
                    </CustomText>
                    <CustomText
                      numberOfLines={1}
                      style={[styles.text,{color:themeColor[1]}]}>
                      {item?.time} {item?.place}
                    </CustomText>
                  </View>
                  <View
                    style={styles.imageContainer}>
                    <View
                      style={[styles.image, {zIndex:-1, right:0}]}>
                      <CustomImage
                        source={require('../Assets/Images/avatar.png')}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <View
                      style={[styles.image, {zIndex:0,left:0}]}>
                      <CustomImage
                        source={require('../Assets/Images/avatar3.png')}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  search:{
    backgroundColor: 'white',
    borderRadius: moderateScale(10, 0.6),
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    paddingHorizontal: moderateScale(10, 0.6),
    // alignItems:'center',
    justifyContent: 'center',
  },
  cover:{
    flexDirection: 'row',
    width: windowWidth,
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.6),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  container:{
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  eventCard:{
    width: windowWidth * 0.9,
    height: windowWidth * 0.45,
    marginVertical: moderateScale(10, 0.3),
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: moderateScale(20, 0.6),
  },
  text:{
    fontSize: moderateScale(12, 0.6),
    // color: 'black',
    // color: themeColor[1],
    textAlign: 'center',
    width: windowWidth * 0.5,
    // backgroundColor:'red',
  },
  profileImage: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.45,
    overflow: 'hidden',
    borderRadius: (windowWidth * 0.1) / 2,
  },
  image :{
    width: windowHeight * 0.03,
    height: windowHeight * 0.03,
    position: 'absolute',
    // left: 0,
    // zIndex: 0,
    borderRadius: (windowHeight * 0.03) / 2,
  },
  imageContainer:{
    flexDirection: 'row',
    width: windowWidth * 0.1,
    height: windowHeight * 0.08,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  date:{
    fontSize: moderateScale(12, 0.6),
    color: 'white',
    width: windowWidth * 0.1,
    textAlign: 'center',
  },
  detailContainer:{
    backgroundColor: Color.themeColor,
    borderRadius: moderateScale(10, 0.6),
    justifyContent: 'center',
    marginVertical: moderateScale(5, 0.3),
    padding: moderateScale(5, 0.6),
  },
  dateContainer:{
    flexDirection: 'row',
    position: 'absolute',
    // justifyContent: 'center',
    paddingHorizontal: moderateScale(15, 0.6),
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: windowHeight * 0.08,
    backgroundColor: 'white',
    width: windowWidth * 0.9,
  },

});
