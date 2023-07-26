import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
// const {height, width} = Dimensions.get('window');

const BubbleList = () => {
  const BubbleListData = [
    {
      id: 1,
      image: require('../Assets/Images/gallery1.png'),
      name: 'Book Autor',
      Time: 'Today 9:00 am',
    },
    {
      id: 2,
      image: require('../Assets/Images/gallery2.png'),
      name: 'Alternative Fitness',
      Time: 'Today 9:00 am',
    },
    {
      id: 3,
      image: require('../Assets/Images/gallery3.png'),
      name: 'Alchol',
      Time: 'Today 9:00 am',
    },
    {
      id: 4,
      image: require('../Assets/Images/gallery4.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 5,
      image: require('../Assets/Images/gallery5.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 6,
      image: require('../Assets/Images/gallery6.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 7,
      image: require('../Assets/Images/gallery7.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 8,
      image: require('../Assets/Images/gallery8.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 9,
      image: require('../Assets/Images/gallery7.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
    {
      id: 10,
      image: require('../Assets/Images/gallery8.png'),
      name: 'Bird Shooting',
      Time: 'Today 9:00 am',
    },
  ];

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Bubble List'}  search/>

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth ,
            marginTop: moderateScale(5, 0.3),
            marginBottom:moderateScale(20,.3)
            
          }}>
          <FlatList
            data={BubbleListData}
            contentContainerStyle={{
              marginBottom:moderateScale(10,.3)
            }}
            renderItem={({item, index}) => {

              return (
                <>
                  <View
                    style={styles.row}>
                    <View style={styles.profileSection}>
                      <CustomImage
                        source={item?.image}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: moderateScale(25, 0.6),
                        justifyContent: 'center',
                      }}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(16, 0.6),
                          color: '#000',
                          fontWeight: '500',
                          textAlign:'left',
                          
                        }} isBold>
                        {item?.name}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(11, 0.6),
                          color: '#000',
                          textAlign:'left',

                        }}>
                        {item?.Time}
                      </CustomText>
                    </View>
                  </View>

                  <View
                    style={styles.line}></View>
                </>
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default BubbleList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    height: windowWidth *0.2,
    width: windowWidth * 0.2,
    backgroundColor: '#fff',
    borderRadius:  (windowWidth *0.2 )/2,
    overflow:'hidden',

    
  },
  line:{
    width: windowWidth * 0.9,
    height: 2,
    backgroundColor: 'white',
  // backgroundColor:'white',
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.5,
    marginBottom: moderateScale(10, 0.3),
  },
  row:{
    width: windowWidth * 1,
    height: windowHeight *0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20, 0.6),
    marginBottom:moderateScale(5,0.3),
  }
});
