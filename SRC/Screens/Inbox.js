import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Color from '../Assets/Utilities/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icon} from 'native-base';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
// const {height, width} = Dimensions.get('window');

const Inbox = () => {
  const [swipedRow, setSwipedRow] = useState(null);
  console.log('🚀 ~ file: Inbox.js:28 ~ Inbox ~ swipedRow:', swipedRow);
  const [BubbleListData, setBubbleListData] = useState([
    {
      id: 1,
      image: require('../Assets/Images/avatar.png'),
      name: 'Jameson',
      msg: ['Hello', 'Aliquyam erat, sed diam'],
      Time: 'Just Now',
    },
    {
      id: 2,
      image: require('../Assets/Images/avatar1.png'),
      name: 'Group 01',
      msg: ['Hello', '', '', '', 'Fashion'],
      Time: '15:00',
    },
    {
      id: 3,
      image: require('../Assets/Images/avatar2.png'),
      name: 'James Tavernier',
      msg: ['Hello', 'Aliquyam erat, sed diam'],
      Time: '8:40',
    },
    {
      id: 4,
      image: require('../Assets/Images/avatar3.png'),
      name: 'Jessica Milla',
      msg: ['Hello', 'missed voice call'],
      Time: '12:43',
    },
    {
      id: 5,
      image: require('../Assets/Images/avatar4.png'),
      name: 'Josh Verstappen',
      msg: ['Hello', 'missed video call'],
      Time: '11:35',
    },
    {
      id: 6,
      image: require('../Assets/Images/avatar2.png'),
      name: 'James Tavernier',
      msg: ['Hello', 'Aliquyam erat, sed diam'],
      Time: '8:40',
    },
    {
      id: 7,
      image: require('../Assets/Images/avatar3.png'),
      name: 'Jessica Milla',
      msg: ['Hello', 'missed voice call'],
      Time: '12:43',
    },
    {
      id: 8,
      image: require('../Assets/Images/avatar4.png'),
      name: 'Josh Verstappen',
      msg: ['Hello', 'missed video call'],
      Time: '11:35',
    },
    {
      id: 9,
      image: require('../Assets/Images/avatar2.png'),
      name: 'James Tavernier',
      msg: ['Hello', 'Aliquyam erat, sed diam'],
      Time: '8:40',
    },
    {
      id: 10,
      image: require('../Assets/Images/avatar3.png'),
      name: 'Jessica Milla',
      msg: ['Hello', 'missed voice call'],
      Time: '12:43',
    },
    {
      id: 11,
      image: require('../Assets/Images/avatar4.png'),
      name: 'Josh Verstappen',
      msg: ['Hello', 'missed video call'],
      Time: '11:35',
    },
    {
      id: 12,
      image: require('../Assets/Images/avatar2.png'),
      name: 'James Tavernier',
      msg: ['Hello', 'Aliquyam erat, sed diam'],
      Time: '8:40',
    },
    {
      id: 13,
      image: require('../Assets/Images/avatar3.png'),
      name: 'Jessica Milla',
      msg: ['Hello', 'missed voice call'],
      Time: '12:43',
    },
    {
      id: 14,
      image: require('../Assets/Images/avatar4.png'),
      name: 'Josh Verstappen',
      msg: ['Hello', 'missed video call'],
      Time: '11:35',
    },
  ]);

  

  const deleteRow = index => {
    // closeRow(rowMap, rowKey);
    const newData = [...BubbleListData];
    // const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(index, 1);
    setBubbleListData(newData);
  };



  const renderHiddenItem = (data, rowMap) => {
    // console.log('data', data);
    // console.log('rowMap', rowMap);
    return (
      // {data?.item?.id == SwipeRow?.} &&
      <View
        style={{
          alignItems: 'flex-end',
          // justifyContent: 'center',
          marginRight: moderateScale(-20, 0.3),
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          //   opacity: 0.25,
          paddingHorizontal: moderateScale(5, 0.6),
          borderRadius: 10,
        }}>
        {/* <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteRow(rowMap, data.item.key)}
        > */}
        {/* <Icon name ='delete' as={AntDesign} color={'white'}/> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Inbox'} />

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
            width: windowWidth,
            // backgroundColor: 'red',
            // height: windowHeight / 0.,
            marginTop: moderateScale(10, 0.3),
            marginBottom: moderateScale(10, 0.3),

            // paddingLeft: moderateScale(20, 0.6),
            // paddingRight: moderateScale(20, 0.6),
          }}>
          <CustomText
            numberOfLines={1}
            style={{
              fontSize: moderateScale(20, 0.3),
              marginBottom: moderateScale(10, 0.3),
              paddingLeft: moderateScale(20, 0.6),
              color: Color.white,
            }}>
            Today
          </CustomText>
          <SwipeListView
            data={BubbleListData}
            renderHiddenItem={renderHiddenItem}
            // key={item?.id}
            keyExtractor={(item)=>item.id}
            // leftOpenValue={75}
            rightOpenValue={-40}
            previewRowKey={'0'}
            
           
            // stopLeftSwipe={swipedRow !== null}
            // stopRightSwipe={swipedRow !== null}
            // renderItem={renderItem}
            contentContainerStyle={{
                paddingBottom : moderateScale(100,0.6)
            }}
            renderItem={({item, index}) => {
              console.log('New Data1', item);

              return (
                <>
                  <TouchableOpacity
                    onPress={() => handleSwipe(item.id)}
                    style={[
                      styles.rowFront,
                      {
                        // backgroundColor : 'yellow',
                        height: windowHeight * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor: 'green',
                        paddingLeft: moderateScale(20, 0.6),
                        width: windowWidth * 0.95,
                        // overflow : 'hidden'

                        // paddingRight : moderateScale(20,0.6)
                      },
                    ]}
                    underlayColor={'#AAA'}>
                    {/* <View
                      style={{
                        width: windowWidth,
                        height: windowHeight * 0.08,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor : 'green'
                        //   alignItems: 'center',
                        //   paddingLeft: moderateScale(20, 0.6),
                        //   marginBottom: moderateScale(15, 0.3),
                      }}> */}
                    <View
                      style={{
                        width: windowWidth * 0.6,
                        height: windowHeight * 0.08,
                        flexDirection: 'row',
                        //   alignItems: 'center',
                        //   paddingLeft: moderateScale(20, 0.6),
                        //   marginBottom: moderateScale(15, 0.3),
                      }}>
                      <View style={styles.profileSection}>
                        <CustomImage
                          source={item?.image}
                          style={{
                            width: '100%',
                            height: '100%',
                            //   borderRadius:100,
                          }}
                        />
                      </View>

                      <View
                        style={{
                          paddingLeft: moderateScale(20, 0.6),
                          justifyContent: 'center',
                        }}>
                        <CustomText
                          style={{
                            fontSize: moderateScale(14, 0.6),
                            marginTop: moderateScale(-10, 0.3),
                            color: '#000',
                            fontWeight: '500',
                          }}
                          isBold>
                          {item?.name}
                        </CustomText>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop: moderateScale(5, 0.3),
                          }}>
                          {item?.msg[item?.msg.length - 1] ==
                          'missed voice call' ? (
                            <Icon
                              name="phone-missed"
                              as={MaterialIcons}
                              size={4}
                              color="#FF0000"
                            />
                          ) : item?.msg[item?.msg.length - 1] ==
                            'missed video call' ? (
                            <Icon
                              name="missed-video-call"
                              as={MaterialIcons}
                              size={4}
                              color="#FF0000"
                            />
                          ) : (
                            <></>
                          )}
                          <CustomText
                            style={{
                              marginLeft: moderateScale(3, 0.3),
                              fontSize: moderateScale(11, 0.6),
                              color: Color.themeLightGray,
                            }}>
                            {item?.msg[item?.msg.length - 1]}
                          </CustomText>
                        </View>

                        {/* <CustomText
                            style={{
                              fontSize: moderateScale(11, 0.6),
                              color: Color.themeLightGray,
                            }}>
                            {item?.msg[item?.msg.length - 1]}
                          </CustomText> */}
                      </View>
                    </View>

                    <View
                      style={{
                        width: windowWidth * 0.4,
                        height: windowHeight * 0.08,
                        paddingLeft: moderateScale(20, 0.6),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          marginTop: moderateScale(-10, 0.3),
                          color: Color.white,
                          fontWeight: '500',
                        }}>
                        {item?.Time}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(11, 0.6),
                          marginTop: moderateScale(5, 0.6),

                          color: Color.themeLightGray,
                          backgroundColor: 'white',
                          paddingHorizontal: moderateScale(6, 0.6),
                          padding: moderateScale(3, 0.6),
                          borderRadius: 5,
                        }}>
                        {item?.msg.length}
                      </CustomText>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        left: -20,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        //   opacity: 0.25,
                        paddingHorizontal: moderateScale(5, 0.6),
                        borderRadius: 5,
                      }}>
                      <Icon
                        name="delete"
                        as={AntDesign}
                        color={'white'}
                        onPress={() => deleteRow(index)}
                      />
                    </View>
                    {/* </View> */}
                  </TouchableOpacity>
                  <View
                    style={{
                      width: windowWidth * 0.9,
                      height: 2.5,
                      backgroundColor: 'white',
                      // backgroundColor:'white',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      opacity: 0.4,
                      marginBottom: moderateScale(10, 0.3),
                    }}></View>
                </>
              );
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    // alignItems: 'center',
    // backgroundColor: 'transparent',
    // borderBottomColor: 'black',
    // borderBottomWidth: 1,
    // justifyContent: 'cente/r',
    // height: 50,
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor: '#DDD',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    // bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    // top: 0,
    width: 20,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  profileSection: {
    height: windowWidth * 0.13,
    width: windowWidth * 0.13,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
  },
});
