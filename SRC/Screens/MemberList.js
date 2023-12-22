import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    FlatList,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {moderateScale} from 'react-native-size-matters';
  import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
  import CustomStatusBar from '../Components/CustomStatusBar';
  import Header from '../Components/Header';
  import CustomImage from '../Components/CustomImage';
  import CustomText from '../Components/CustomText';
  import { useSelector } from 'react-redux'; 
  import CardComponent from '../Components/CardComponent';
import { Get } from '../Axios/AxiosInterceptorFunction';
import { useIsFocused } from '@react-navigation/native';
  // const {height, width} = Dimensions.get('window');
  
  const MemberList = (props) => {
    const focused = useIsFocused()
    const privacy = useSelector(state=> state.authReducer.privacy)
    const token = useSelector(state => state.authReducer.token);
    const BubbleId = props?.route?.params?.BubbleId
    const profileData = useSelector(state => state.commonReducer.selectedProfile)
    
   
    const [loading ,setLoading] =useState(false)
    const [members, setMembers] = useState([])
    console.log("🚀 ~ file: MemberList.js:32 ~ MemberList ~ members:", members)
  

    const GetBubblemembers = async () => {
      const url= `auth/community_member/list/${BubbleId}`
      
      setLoading(true)
      const response = await Get(url , token)
      setLoading(false)
      if(response != undefined){
      console.log("🚀 ~ file: MemberList.js:71 ~ GetBubblemembers ~ response:", response?.data)
      setMembers(response?.data?.member_info?.filter(data=> data?.profile_id != profileData?.id))

      }
    }

  

    useEffect(() => {
      GetBubblemembers()
    }, [focused])
    

    return (
      <>
        <CustomStatusBar
          backgroundColor={Color.white}
          barStyle={'dark-content'}
        />
        <Header right Title={'Member List'}  search showBack/>
  
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
            alignItems: 'center',
          }}>
          <View
            style={styles.FlatListview}>
            <FlatList
              data={members}
              contentContainerStyle={{
                marginBottom:moderateScale(10,.3)
              }}
              renderItem={({item, index}) => {
              console.log("🚀 ~ file: MemberList.js:83 ~ MemberList ~ item:", item)
  
                return (
                  <CardComponent
                  item={item}
                  MemberList={true}
                  pending={item?.pending}
                  invited={item?.role == 'admin' && item?.status == 'invite' ? true : false}
                  Requested={item?.role == 'admin' && item?.status == 'request' ? true : false}
                  bubbleId={BubbleId}
                  blocked={item?.status == 'blocked' ? true : false}
                />
                  
                );
              }}
            />
          </View>
        </ImageBackground>
      </>
    );
  };
  
  export default MemberList;
  
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
    },
    FlatListview:{
      width: windowWidth ,
      marginTop: moderateScale(5, 0.3),
      marginBottom:moderateScale(20,.3)
      
    }
  });
  