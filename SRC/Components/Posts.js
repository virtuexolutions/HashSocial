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
import { FlatList } from 'react-native';
import PostComponent from './PostComponent';
// import { TextInput } from 'react-native-gesture-handler';

const Posts = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const [search, setSearch] = useState('');

  const PostData = [
    {
      id: 1,
      Name: 'Travelling Tour Posted a video to playlist Special Content',
      date: '19 July',
      desc: `124 degrees can't stop us from running into the desert for some quick potraits`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/tour1.jpg'),
      video: null,
      Like: 15,
      love: 1100,
      comment: 44,
      View: null,
    },
    {
      id: 2,
      Name: 'We hope you got to enjoy the great weather today, Vienna! 🥂✨ by WaitsForYou ',
      date: '24 Aug',
      desc: 'The mountains are calling, and I must go!',
      profileImage: require('../Assets/Images/avatar3.png'),
      image: null,
      video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      Like: 357,
      love: 4100,
      comment: 205,
      View: 1084,
    },

    {
      id: 3,
      Name: 'Gilan kamel ',
      date: '1 Aug',
      desc: 'Pastries in paris or take a pasta making class in italy. Where would you go if you could save 70% or more on Europe',
      profileImage: require('../Assets/Images/avatar4.png'),
      image: null,
      video: null,
      Like: 357,
      love: 4100,
      comment: 205,
      View: null,
    },
    {
      id: 4,
      Name: 'Travelling Tour Posted We hope you got to enjoy the great',
      date: '4 Dec',
      desc: `Capturing the pure joy of childhood creativity! These little artists are turning blank canvases into vibrant masterpieces. It's incredible to witness their boundless imaginations at work.`,
      profileImage: require('../Assets/Images/avatar3.png'),
      image: require('../Assets/Images/art.png'),
      video: null,
      Like: 457,
      love: 1800,
      comment: 905,
      View: null,
    },
  ];
  
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'white',
          marginTop: moderateScale(10, 0.6),
          alignItems: 'center',
          paddingVertical: moderateScale(10, 0.6),
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <View style={styles.profileImage}>
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
          style={{
            backgroundColor: 'white',
            borderRadius: moderateScale(10, 0.6),
            width: windowWidth * 0.7,
            height: windowHeight * 0.05,
            paddingHorizontal: moderateScale(10, 0.6),
            // alignItems:'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log('here===========>>>>>>>>');
            navigationService.navigate('AddPost');
          }}>
          <CustomText
            style={{color: 'black', fontSize: moderateScale(13, 0.6), width:windowWidth*0.6}}
            onPress={() => {
              console.log('here===========>>>>>>>>');
              navigationService.navigate('AddPost');
            }}>
            What's on your mind?
          </CustomText>
        </TouchableOpacity>

        <View>
          <Icon name={'images'} as={Entypo} color={'white'} size={7} />
        </View>
      </View>
      <FlatList
        // scrollEnabled={false}
        data={PostData}
        contentContainerStyle={{
          paddingBottom: moderateScale(80, 0.3),
        }}
        renderItem={({item, index}) => {
          return <PostComponent item={item} />;
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  profileImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: Color.white,
    overflow: 'hidden',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: (windowWidth * 0.1) / 2,
    // marginTop: moderateScale(12, 0.3),
    // marginLeft: moderateScale(5, 0.3),
    // marginRight: moderateScale(8, 0.3),
  },
});
