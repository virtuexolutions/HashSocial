import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import CustomStatusBar from '../Components/CustomStatusBar';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {Icon, } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PostComponent from '../Components/PostComponent';

const PostScreen = () => {
  const privacy = useSelector(state => state.authReducer.privacy);
  const [placeholdertext, setPlaceholderText] = useState('');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Top'},
    {key: 'second', title: 'Latest'},
  ]);

  const PostData = [
    {
      id: 1,
      Name: 'Travelling Tour Posted a video to playlist Special Content',
      date: '17 July',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
      profileImage: require('../Assets/Images/avatar4.png'),
      image: require('../Assets/Images/travel.jpg'),
      video: null,
      Like: 157,
      love: 1100,
      comment: 405,
      View: null,
    },
    {
      id: 2,
      Name: 'We hope you got to enjoy the great weather today, Vienna! 🥂✨ by WaitsForYou ',
      date: '24 Aug',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
      profileImage: require('../Assets/Images/avatar3.png'),
      image: null,
      video: 'https://vjs.zencdn.net/v/oceans.mp4',
      Like: 357,
      love: 4100,
      comment: 205,
      View: 1084,
    },

    {
      id: 3,
      Name: 'Traveling Post We hope you got to enjoy the great weather today Vienna',
      date: '1 May',
      desc: 'The beauty of our private island paradise rests in its enhanced interior decorum. Minimalist, monochromatic interior design emphasizes',
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
      desc: `📍Italy Gorgeous pastel buildings picture-perfect harbors, and crystal-clear waters — experience everything this Italian seaside oasis has to offer on our trip to Northern Italy`,
      profileImage: require('../Assets/Images/avatar1.png'),
      image: require('../Assets/Images/travel3.jpg'),
      video: null,
      Like: 457,
      love: 1800,
      comment: 905,
      View: null,
    },
  ];

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );

  const FirstRoute = () => (
  
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
  );

  const SecondRoute = () => (
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
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      {/* Header START  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: windowWidth,
          height: windowHeight * 0.07,
          backgroundColor: Color.white,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: Color.veryLightGray,
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          <AntDesign name="arrowleft" size={28} color={Color.black} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: windowWidth * 0.82,
            height: windowHeight * 0.05,
            borderRadius: moderateScale(20, 0.3),
            backgroundColor: '#eff3f6',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="search1" size={20} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            onChangeText={setPlaceholderText}
            value={placeholdertext}
            placeholder="Search"
            keyboardType="numeric"
          />
        </View>
      </View>
      {/* Header END */}

      <ImageBackground
        source={
          privacy == 'private'
            ? require('../Assets/Images/theme2.jpg')
            : require('../Assets/Images/Main.png')
        }
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight,
        }}>
       
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: moderateScale(15, 0.6),
              paddingTop : moderateScale(10,0.6),
              width: windowWidth,
              backgroundColor: Color.white,
              alignItems: 'center',
            }}>
            <LinearGradient
              style={{
                width: windowWidth * 0.19,
                height: windowHeight * 0.09,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(15, 0.3),
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#f5eefe', '#f4edfd']}>
              <CustomText
                style={{
                  fontSize: moderateScale(25, 0.6),
                  color: Color.veryLightGray,
                }}
                isBold>
                #
              </CustomText>
            </LinearGradient>
            <View
              style={{
                width: windowWidth * 0.5,
                marginLeft: moderateScale(15, 0.3),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(18, 0.6),
                  color: Color.black,
                  textAlign: 'left',
                }}
                isBold>
                #Travelling
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.veryLightGray,
                  textAlign: 'left',
                }}>
                39M Posts
              </CustomText>
            </View>
 

          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              style={{
                width: windowWidth * 0.18,
                height: windowHeight * 0.05,
                backgroundColor: Color.black,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: moderateScale(10, 0.3),
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#e9f4ff', '#e8f4ff']}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(15, 0.6),
                  color: '#0942a0',
                }}>
                Follow
              </CustomText>
            </LinearGradient>
          </TouchableOpacity>
          </View>

          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: windowWidth}}
            renderTabBar={renderTabBar}
          />

      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.7,
    padding: 5,
    fontSize: moderateScale(15, 0.6),
  },

  indicator: {
    backgroundColor: Color.black,
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 15,
    color: Color.black,
  },
});

export default PostScreen;
