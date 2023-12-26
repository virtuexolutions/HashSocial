import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import Modal from 'react-native-modal';
import navigationService from '../navigationService';
import TextInputWithTitle from './TextInputWithTitle';
import {baseUrl} from '../Config';
import moment from 'moment';
import {Post} from '../Axios/AxiosInterceptorFunction';

const ProfileComponent = ({
  item,
  pending,
  check,
  close,
  edit,
  MemberList,
  invited,
  Requested,
  blocked,
}) => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const token = useSelector(state => state.authReducer.token);
  const profileData = useSelector(state => state.commonReducer.profileData);
  console.log('Herere is s daaaaattttaaa=====', `${baseUrl}/${item?.photo}`);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch()

  return (
    <>
      <TouchableOpacity style={styles.row} 
      onPress={() => {
        
      }}>
        <View>
          <View style={styles.profileSection}>
            <CustomImage
              source={{uri: `${baseUrl}/${item?.photo}`}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>

        <View
          style={{
            paddingLeft: moderateScale(15, 0.6),
            width: windowWidth * 0.45,
          }}>
          <CustomText
            numberOfLines={1}
            style={{
              fontSize: moderateScale(16, 0.6),
              color: '#000',
              fontWeight: '500',
              textAlign: 'left',
            }}>
            {item?.name}
          </CustomText>
          <CustomText
            numberOfLines={1}
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#000',
              textAlign: 'left',
            }}>
            {moment(item?.created_at).format('ll')}
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#000',
              textAlign: 'left',
            }}>
            {item?.privacy}
          </CustomText>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default ProfileComponent;

const styles = StyleSheet.create({
  profileSection: {
    height: windowWidth * 0.2,
    width: windowWidth * 0.2,
    backgroundColor: '#fff',
    borderRadius: (windowWidth * 0.2) / 2,
    borderWidth: 3,
    borderColor: '#33dd50',
    overflow: 'hidden',
  },
  view: {
    backgroundColor: 'white',
    height: windowHeight * 0.03,
    width: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (windowHeight * 0.03) / 2,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  row: {
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.97,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },

  container: {
    width: windowWidth * 0.85,
    paddingBottom: moderateScale(20, 0.6),
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.6),
    overflow: 'hidden',
  },
  circle: {
    width: moderateScale(70, 0.6),
    height: moderateScale(70, 0.6),
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
