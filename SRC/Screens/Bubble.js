import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../Components/CustomImage';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Icon, ScrollView} from 'native-base';

const Bubble = () => {
  const [isLoading, setIsLoading] = useState(false);
  const events = ['Members', 'Chats', 'Events', 'Store'];
  const [selectedEvent, setSelectedEvent] = useState('Members');
  const [selectedTab, setSelectedTab] = useState('Activity');
  const [activityData, setactivityData] = useState([
    {
      id: 2,
      url: require('../Assets/Images/activity1.png'),
    },
    {
      id: 3,
      url: require('../Assets/Images/activity2.png'),
    },
    {
      id: 4,
      url: require('../Assets/Images/activity3.png'),
    },
    {
      id: 5,
      url: require('../Assets/Images/activity1.png'),
    },
    {
      id: 6,
      url: require('../Assets/Images/activity2.png'),
    },

    {
      id: 7,
      url: require('../Assets/Images/activity3.png'),
    },
  ]);
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title="Bubble" search />
      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          alignItems: 'center',
        }}>
        <ImageBackground
          source={require('../Assets/Images/fitness.png')}
          resizeMode={'cover'}
          style={{
            width: windowWidth,
            height: windowHeight * 0.35,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: moderateScale(30, 0.3),
            }}>
            <CustomText
              numberOfLines={1}
              children={'naplesrunning'}
              style={{
                fontSize: moderateScale(17, 0.6),
                color: 'black',
                marginRight: moderateScale(8, 0.3),
                textAlign: 'center',
              }}
              isBold
            />
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,

                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                width: 25,
                padding: moderateScale(3, 0.6),
              }}>
              <Icon
                name="check"
                as={AntDesign}
                color={'#0E9AB0'}
                size={5}
                zIndex={1}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: moderateScale(30, 0.3),
              paddingHorizontal: moderateScale(30, 0.6),
            }}>
            <View style={{justifyContent: 'center'}}>
              <CustomText
                numberOfLines={1}
                children={'36'}
                style={{
                  fontSize: moderateScale(20, 0.6),
                  color: 'black',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
                isBold
              />
              <CustomText
                numberOfLines={1}
                children={'following'}
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: 'white',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
              />
            </View>
            <View
              style={{backgroundColor: 'white', height: 50, width: 1}}></View>
            <View style={{justifyContent: 'center'}}>
              <CustomText
                numberOfLines={1}
                children={'6.2M'}
                style={{
                  fontSize: moderateScale(20, 0.6),
                  color: 'black',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
                isBold
              />
              <CustomText
                numberOfLines={1}
                children={'followers'}
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: 'white',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
              />
            </View>
            <View
              style={{backgroundColor: 'white', height: 50, width: 1}}></View>
            <View style={{justifyContent: 'center'}}>
              <CustomText
                numberOfLines={1}
                children={'192.1M'}
                style={{
                  fontSize: moderateScale(20, 0.6),
                  color: 'black',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
                isBold
              />
              <CustomText
                numberOfLines={1}
                children={'Likes'}
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: 'white',
                  marginRight: moderateScale(8, 0.3),
                  textAlign: 'center',
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: moderateScale(30, 0.3),
            }}>
            <CustomButton
              text={
                isLoading ? (
                  <ActivityIndicator color={'#FFFFFF'} size={'small'} />
                ) : (
                  'Follow'
                )
              }
              textColor={'#30a3b9'}
              width={windowWidth * 0.5}
              height={windowHeight * 0.06}
              onPress={() => {}}
              fontSize={moderateScale(15, 0.6)}
              bgColor={['#FFFFFF', '#FFFFFF']}
              borderRadius={moderateScale(30, 0.3)}
              isGradient
              isBold
            />
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: (windowWidth * 0.11) / 2,
                // marginTop:moderateScale(10, 0.3),
                height: windowWidth * 0.11,
                justifyContent: 'center',
                marginLeft: moderateScale(8, 0.3),

                alignItems: 'center',
                width: windowWidth * 0.11,
                padding: moderateScale(3, 0.6),
              }}>
              <Icon
                name="chevron-down"
                as={EvilIcons}
                color={'#0E9AB0'}
                size={10}
                zIndex={1}
              />
            </View>
          </View>
        </ImageBackground>
        <ScrollView
          style={{
            width: windowWidth,
            marginTop: moderateScale(10, 0.3),
            paddingHorizontal: moderateScale(10, 0.6),
            marginBottom: moderateScale(70, 0.3),
          }}
          showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {events?.map(data => {
              return (
                <CustomText
                  numberOfLines={1}
                  children={data}
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: selectedEvent == data ? '#0E9AB0' : 'white',
                    marginRight: moderateScale(8, 0.3),
                    width: windowWidth * 0.22,
                    // height:windowHeight*0.04,
                    marginRight: moderateScale(17, 0.3),
                    paddingVertical: moderateScale(5, 0.6),
                    borderRadius: moderateScale(5, 0.6),
                    //   width: windowWidth*0.9,
                    backgroundColor:
                      selectedEvent == data ? 'white' : 'rgba(0,0,0,.4)',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setSelectedEvent(data);
                  }}
                />
              );
            })}
          </ScrollView>
          {selectedEvent == 'Members' && ( <>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: windowWidth * 0.45,
                  height: windowHeight * 0.2,
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  borderRadius: moderateScale(10, 0.6),
                  marginTop: moderateScale(12, 0.3),
                }}>
                <CustomImage
                  source={require('../Assets/Images/fitness2.png')}
                  style={{
                    height: '100%',
                    width: '100%',

                    // position:'absolute',
                    // top:-90,
                    // borderRadius: 80,
                  }}
                  resizeMode={'stretch'}
                  //   resizeMode="s"
                />
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      width: windowWidth * 0.1,
                      height: windowWidth * 0.1,
                      backgroundColor: 'white',
                      overflow: 'hidden',
                      borderColor: 'yellow',
                      borderWidth: 1,
                      borderRadius: (windowWidth * 0.1) / 2,
                      marginTop: moderateScale(12, 0.3),
                      marginLeft: moderateScale(5, 0.3),
                      marginRight: moderateScale(8, 0.3),
                    }}>
                    <CustomImage
                      source={require('../Assets/Images/fitness2.png')}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
              
                    />
                  </View>
                  <View>
                    <CustomText
                      numberOfLines={1}
                      children={'Meko Nakahara'}
                      style={{
                        fontSize: moderateScale(12, 0.6),
                        color: 'black',
                        marginTop: moderateScale(12, 0.3),
                        marginRight: moderateScale(8, 0.3),
                        textAlign: 'left',
                      }}
                      isBold
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: windowWidth * 0.3,
                      }}>
                      <CustomText
                        numberOfLines={1}
                        children={'New York, USA'}
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          color: Color.veryLightGray,
                          textAlign: 'center',
                        }}
                      />
                      <CustomText
                        numberOfLines={1}
                        children={'1h Ago'}
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          color: Color.veryLightGray,
                          textAlign: 'right',
                        }}
                      />
                    </View>
                  </View>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(9, 0.6),
                    color: '#353434',
                    width: windowWidth * 0.5,
                    textAlign: 'left',
                    marginTop: moderateScale(5, 0.3),
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CustomText>
              </View>
            </View>
            <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText
              numberOfLines={1}
              children={'Activity'}
              style={{
                fontSize: moderateScale(17, 0.6),
                color: 'white',
                // marginRight: moderateScale(8, 0.3),
                width: windowWidth * 0.4,
                height: windowHeight * 0.04,
                textAlign: 'center',
                borderBottomWidth: 1.5,
                borderBottomColor:
                  selectedTab == 'Activity' ? 'white' : 'black',
                // marginRight:moderateScale(10,0.3)
              }}
              onPress={() => {
                setSelectedTab('Activity');
              }}
              isBold
            />
            <CustomText
              numberOfLines={1}
              children={'Archive'}
              style={{
                fontSize: moderateScale(17, 0.6),
                width: windowWidth * 0.4,
                height: windowHeight * 0.04,
                color: 'white',
                borderBottomWidth: 1.5,
                borderBottomColor: selectedTab == 'Archive' ? 'white' : 'black',
                // marginRight: moderateScale(8, 0.3),
                //   width: windowWidth*0.9,
                textAlign: 'center',
              }}
              onPress={() => {
                setSelectedTab('Archive');
              }}
              isBold
            />
          </View>
            </>
          )}
          
          {selectedEvent == 'Members' && selectedTab == 'Activity' ? (
            <View
              style={{
                width: windowWidth * 0.9,
                height: windowHeight * 0.65,
                justifyContent: 'center',
                alignSelf:'center',
                // alignItems:'center',
                marginTop: moderateScale(20, 0.3),
                flexDirection: 'row',
                flexWrap: 'nowrap',
              }}>
              <FlatList
                numColumns={3}
                data={activityData}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                  //   console.log('index:', item);
                  return (
                    <TouchableOpacity
                      style={{
                        height: windowHeight * 0.2,
                        width: windowWidth * 0.285,
                        backgroundColor: 'white',
                        //   borderRadius: 20,
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        overflow: 'hidden',
                        marginVertical: moderateScale(5, 0.3),
                        marginHorizontal: moderateScale(2, 0.3),
                      }}>
                      <CustomImage
                        source={item?.uri ? {uri: item?.uri} : item?.url}
                        style={{
                          width: '100%',
                          height: '100%',
                          zIndex: 0,
                        }}
                        key={item?.id}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : selectedEvent == 'Members' && selectedTab == 'Archive'&&( 
            <>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: windowWidth * 0.13,
                    height: windowWidth * 0.13,
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    borderColor: 'yellow',
                    borderWidth: 1,
                    borderRadius: (windowWidth * 0.13) / 2,
                    marginTop: moderateScale(12, 0.3),
                    marginLeft: moderateScale(5, 0.3),
                    marginRight: moderateScale(8, 0.3),
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
                <View>
                  <CustomText
                    numberOfLines={1}
                    children={'Meiko Nakahara'}
                    style={{
                      fontSize: moderateScale(15, 0.6),
                      color: 'black',
                      marginTop: moderateScale(12, 0.3),
                      marginRight: moderateScale(8, 0.3),
                      //   width: windowWidth*0.9,
                      textAlign: 'left',
                    }}
                    isBold
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // backgroundColor:'red',
                      width: windowWidth * 0.4,
                    }}>
                    <CustomText
                      numberOfLines={1}
                      children={'New York, USA'}
                      style={{
                        fontSize: moderateScale(12, 0.6),
                        color: Color.veryLightGray,
                        // marginTop: moderateScale(12, 0.3),
                        // marginRight: moderateScale(8, 0.3),
                        //   width: windowWidth*0.9,
                        textAlign: 'center',
                      }}
                    />
                    <CustomText
                      numberOfLines={1}
                      children={'1h Ago'}
                      style={{
                        fontSize: moderateScale(12, 0.6),
                        color: Color.veryLightGray,
                        // marginTop: moderateScale(12, 0.3),
                        // marginRight: moderateScale(8, 0.3),
                        //   width: windowWidth*0.9,
                        textAlign: 'right',
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: windowWidth * 0.9,
                  height: windowHeight * 0.2,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  marginTop:moderateScale(10,0.3),
                  marginBottom:moderateScale(10,0.3),
                  alignSelf:'center',
                //   alignItems:'center',
                //   justifyContent:'center',
                }}>
                <CustomImage
                  source={require('../Assets/Images/archive.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  //   resizeMode={'stretch'}
                />
              </View>
            </>
          )}
          
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  conatiner: {
    width: windowWidth * 0.9,
    // height: windowHeight *0.4,
    paddingVertical: moderateScale(15, 0.6),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
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
});

export default Bubble;
