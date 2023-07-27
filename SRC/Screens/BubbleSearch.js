import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchData} from '../dummyData/SearchData';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import { useSelector } from 'react-redux';

const BubbleSearch = () => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state=> state.authReducer.privacy)
  const [search, setSearch] = useState('');
  const SearchData = [
    {
      id: 1,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'Alchole',
      Tags: '#Architecture',
    },
    {
      id: 2,
      image: require('../Assets/Images/Ellipse3.png'),
      name: 'Alternative Fitness',
      Tags: '#Architecture',
    },
    {
      id: 3,
      image: require('../Assets/Images/Ellipse4.png'),
      name: 'Archery',
      Tags: '#Architecture',
    },
    {
      id: 4,
      image: require('../Assets/Images/Ellipse5.png'),
      name: 'architecture',
      Tags: '#Architecture',
    },
    {
      id: 5,
      image: require('../Assets/Images/Ellipse6.png'),
      name: 'art',
      Tags: '#Architecture',
    }, {
      id: 6,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'Astrology',
      Tags: '#Architecture',
    },
    {
      id: 7,
      image: require('../Assets/Images/Ellipse3.png'),
      name: 'Beer',
      Tags: '#Architecture',
    },
    {
      id: 8,
      image: require('../Assets/Images/Ellipse4.png'),
      name: 'Author Books',
      Tags: '#Architecture',
    },
    {
      id: 9,
      image: require('../Assets/Images/Ellipse5.png'),
      name: 'Bird Watching',
      Tags: '#Architecture',
    },
    {
      id: 10,
      image: require('../Assets/Images/Ellipse6.png'),
      name: 'bolging',
      Tags: '#Architecture',
    }, {
      id: 11,
      image: require('../Assets/Images/Ellipse2.png'),
      name: 'Author books',
      Tags: '#Architecture',
    },
   
  ];
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Search'} search />

      <ImageBackground
       source={
        privacy == 'private'
          ? require('../Assets/Images/theme2.jpg')
          : require('../Assets/Images/Main.png')
      }
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          // alignItems: 'center',
        }}>
        <View
          style={styles.topContainer}>
          <View style={styles.profileSection}>
            <CustomImage
              source={require('../Assets/Images/dummyman1.png')}
              style={{
                height: '100%',
                width: '100%',
                
              }}
              resizeMode="contain"
            />
          </View>

          <TextInputWithTitle
            secureText={false}
            placeholder={'Alchole'}
            setText={setSearch}
            value={search}
            viewHeight={0.05}
            viewWidth={0.7}
            inputWidth={0.7}
            backgroundColor={'white'}
            color={themeColor[1]}
            placeholderColor={Color.veryLightGray}
            borderRadius={moderateScale(25, 0.3)}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={{justifyContent: 'center'}}>
            <Entypo name="images" size={28} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{width: windowWidth, marginBottom:moderateScale(35,.3) }}>
          <FlatList
            data={SearchData}
            contentContainerStyle={{
              marginBottom: moderateScale(10, 0.3),
              marginTop:moderateScale(10,.3)
            }}
            renderItem={({item, index}) => {
              return (
                <View
                  style={styles.row}>
                  <View style={styles.profileSection2}>
                    <CustomImage
                      source={item.image}
                      style={{
                        height:'100%',
                        width: '100%',
                      }}
                      resizeMode="contain"
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: moderateScale(15, 0.6),
                      justifyContent: 'center',
                    }}>
                    <CustomText
                      style={{
                        fontSize: moderateScale(16, 0.6),
                        color: '#000',
                        textAlign:'left',
                      }}
                      isBold>
                      {item?.name}
                    </CustomText>
                    <CustomText
                      style={{fontSize: moderateScale(9, 0.6),  textAlign:'left', color: '#000'}}>
                      {item.Tags}
                    </CustomText>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default BubbleSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer:{
    width: windowWidth,
    // height: windowHeight *0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(8, 0.3),
    marginTop: moderateScale(10, 0.3),
  },

  profileSection: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
    backgroundColor: '#fff',
    borderRadius:(windowHeight * 0.08 )/2,
    borderWidth: 3,
    borderColor: Color.green,
    justifyContent: 'center',
    overflow:'hidden',
    // alignSelf: 'center',
  },
  profileSection2: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    backgroundColor: '#fff',
    borderRadius:(windowHeight * 0.06 )/2,
    borderWidth: 2,
    borderColor: Color.green,
    justifyContent: 'center',
    overflow:'hidden',
    // alignSelf: 'center',
  },
  search:{
    width: windowWidth*0.7,
    height: windowHeight * 0.06,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
  //   marginLeft:moderateScale(10,0.3)
  },
  row:{
    width: windowWidth,
    height: windowHeight *0.08,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(14, 0.6),
  }
});
