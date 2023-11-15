import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchData} from '../dummyData/SearchData';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Color from '../Assets/Utilities/Color';
import {useDispatch, useSelector} from 'react-redux';
import CustomModal from '../Components/CustomModal';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
import Modal from 'react-native-modal';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import navigationService from '../navigationService';
import { setProfileSelcted } from '../Store/slices/auth';

const QuestionScreen = props => {
  const themeColor = useSelector(state => state.authReducer.ThemeColor);
  const privacy = useSelector(state => state.authReducer.privacy);
  const type = props?.route?.params?.type;
  console.log('🚀 ~ file: QuestionScreen.js:33 ~ QuestionScreen ~ type:', type);

  const dispatch = useDispatch();

  const question1 = [
    {
      num: 'A',
      option:
        'a money-making, highly involved community around your passion that will not demonetize you',
    },
    {
      num: 'B',
      option:
        'a scalable business presence that creates an interactive community around my products and services and reach to digital marketing,partnerships/collaboration, investors and other limitless resources.',
    },
    {
      num: 'C',
      option:
        'Building an online presence for my self-moderated community to speak and share freely and connect with other like communities.',
    },
  ];
  const question2 = [
    {
      num: 'A',
      option:
        'Gain access to content and creators that help introduce me to new interests',
    },
    {
      num: 'B',
      option:
        'Gain access to content and creators that help me learn more deeply about my existing interests.',
    },
    {
      num: 'C',
      option: 'Connect with people in communities over shared interests',
    },
  ];
  const [questions, setQuestions] = useState(
    type != 'Learning & Exploring' ? question1 : question2,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState([]);
  const [showTicks, setShowTicks] = useState({});

  const handleAnswerSubmit = () => {
    setModalVisible(false);
    setAnswer('');

    setShowTicks(prevTicks => ({
      ...prevTicks,
      [selectedQuestion]: true,
    }));
  };

  const handleQuestionClick = question => {
    setSelectedQuestion(question);
    setModalVisible(true);
  };

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header right Title={'Question'} />

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
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(15, 0.6),
            paddingHorizontal: moderateScale(10, 0.6),
            marginTop: moderateScale(10, 0.3),
          }}>
          What are you most interested in building on Hatch:
        </CustomText>
        <View style={styles.container}>
          {questions.map((question, index) => (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: moderateScale(10, 0.6),
                justifyContent: 'space-around',
                width: windowWidth * 0.95,
                // backgroundColor:'red',
                alignItems: 'center',
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(20, 0.6),
                  // backgroundColor: 'green',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {question?.num}
              </CustomText>
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={
                  () => {
                    setAnswer([{question:'What are you most interested in building on Hatch:', answer:question?.option}])
                    // if (answer.includes(question?.option)) {
                    //   setAnswer(
                    //     answer.filter(item => item !== question?.option),
                    //   );
                    // } else {
                    //   setAnswer(prev => [...prev, question?.option]);
                    // }
                  }
                  // handleQuestionClick(question)
                }
                style={[
                  styles.questionContainer,
                  {
                    borderColor: answer.includes(question?.option)
                      ? themeColor[1]
                      : 'white',
                    borderWidth: 3,
                  },
                ]}>
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    width: windowWidth * 0.8,
                  }}>
                  {question?.option}
                </CustomText>
                {showTicks[question] && (
                  <Icon
                    name={'check'}
                    as={Feather}
                    color={Color.green}
                    size={moderateScale(20, 0.3)}
                  />
                )}
              </TouchableOpacity>
            </View>
          ))}

          <Modal
            animationType="slide"
            visible={modalVisible}
            backdropOpacity={0.7}
            onBackdropPress={() => {
              setModalVisible(false);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.modalContainer}>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.3),
                  width: windowWidth * 0.85,
                  textAlign: 'center',
                }}>
                Question : {selectedQuestion}
              </CustomText>

              <TextInputWithTitle
                placeholder={'Type your answer here'}
                setText={setAnswer}
                value={answer}
                viewHeight={0.07}
                viewWidth={0.7}
                inputWidth={0.65}
                border={1}
                borderColor={Color.black}
                backgroundColor={Color.themeBgColor}
                color={themeColor[1]}
                placeholderColor={Color.black}
                borderRadius={moderateScale(25, 0.3)}
                marginTop={30}
              />

              <CustomButton
                text={'Submit'}
                textColor={Color.white}
                width={windowWidth * 0.3}
                height={windowHeight * 0.05}
                marginTop={moderateScale(20, 0.3)}
                onPress={() => {
                  
                  navigationService.navigate('CreateNewBubble')
                  // handleAnswerSubmit();
                }}
                bgColor={Color.black}
                borderColor={Color.black}
                borderWidth={1}
                borderRadius={moderateScale(30, 0.3)}
              />
            </View>
          </Modal>
        </View>
        <CustomButton
          text={'Submit'}
          textColor={Color.white}
          width={windowWidth * 0.3}
          height={windowHeight * 0.05}
          marginTop={moderateScale(20, 0.3)}
          onPress={() => {
            dispatch(setProfileSelcted(true))
            // handleAnswerSubmit()
            navigationService.navigate('CreateNewBubble')

          }}
          bgColor={Color.black}
          borderColor={Color.black}
          borderWidth={1}
          borderRadius={moderateScale(30, 0.3)}
        />
      </ImageBackground>
    </>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10, 0.6),
    marginTop: moderateScale(10, 0.3),
    alignSelf: 'center',
  },
  questionContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: moderateScale(20, 0.3),
    width: windowWidth * 0.85,
    padding: moderateScale(10, 0.6),
    backgroundColor: Color.white,
    borderRadius: moderateScale(8, 0.3),
  },

  modalContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: windowWidth * 0.9,
    height: windowHeight * 0.45,
    borderRadius: moderateScale(10, 0.3),
    justifyContent: 'center',
    backgroundColor: Color.white,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
