import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const Posting = () => {
  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Posting'} search/>

      <ImageBackground
        source={require('../Assets/Images/Main.png')}
        resizeMode={'cover'}
        style={{
          width: windowWidth * 1,
          height: windowHeight * 0.9,
          alignItems: 'center',
          justifyContent:'center',
        }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <CustomText style={styles.btnText}>Create New Profile</CustomText>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <CustomText style={styles.btnText}>Create New Bubble</CustomText>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <CustomText style={styles.btnText}>Create New post</CustomText>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
          <CustomText style={styles.btnText}>Create Feed</CustomText>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default Posting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btn: {
    height: height / 16,
    width: width / 1.3,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: moderateScale(15, 0.3),
  },
  btnText: {
    fontSize: moderateScale(14, 0.6),
    color: '#30a3b9',
  },
});
