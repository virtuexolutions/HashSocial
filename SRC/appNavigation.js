import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './Screens/LoginScreen';
// import EnterPhone from './Screens/EnterPhone';
// import VerifyNumber from './Screens/VerifyNumber';
import ResetPassword from './Screens/ResetPassword';
import Signup from './Screens/Signup';
import ChangePassword from './Screens/ChangePassword';
import EnterPhone from './Screens/EnterPhone';
import VerifyNumber from './Screens/VerifyNumber';
import AddPost from './Screens/AddPost';
import MyGallery from './Screens/MyGallery';
import CreateNewFeed from './Screens/CreateNewFeed';
import AccountSetting from './Screens/AccountSetting';
import BubbleList from './Screens/BubbleList';
import BubbleSearch from './Screens/BubbleSearch';
import Notifications from './Screens/Notifications';
import Posting from './Screens/Posting';
import Profile from './Screens/Profile';
import ProfileList from './Screens/ProfileList';
import BubbleSelection from './Screens/BubbleSelection';
import Inbox from './Screens/Inbox';
import Chat from './Screens/Chat';
import Bubble from './Screens/Bubble';
import BubbleDetail from './Screens/BubbleDetail';
// import BubbleEdit from './Screens/BubbleEdit';
import Feeds from './Screens/Feeds';
// import CreateNewBubble from './Screens/CreateNewBubble';
import HomeScreen from './Screens/HomeScreen';
import Color from './Assets/Utilities/Color';
import {windowHeight} from './Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icon} from 'native-base';
import CreateNewBubble from './Screens/CreateNewBubble';
import EmptyScreen from './Screens/EmptyScreen';
import AccountDetails from './Screens/AccountDetails';

// import AccountSetting from './Screens/AccountSetting';
// import HomeScreen from './Screens/HomeScreen';
// import MyAccounts from './Screens/MyAccounts';
// import ChangePassword from './Screens/ChangePassword';
// import Support from './Screens/Support';
// import FriendRequest from './Screens/FriendRequest';
// import SeeAllScreen from './Screens/SeeAllScreen';
// import SelectedChat from './Screens/SelectedChat';

const AppNavigator = () => {
  // const isLogin = false;
  const isGoalCreated = useSelector(state => state.authReducer.isGoalCreated);
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const isVerified = useSelector(state => state.authReducer.isVerified);
  const token = useSelector(state => state.authReducer.token);
  const bubbleSelected = useSelector(state => state.authReducer.bubbleSelected);
  console.log("🚀 ~ file: appNavigation.js:58 ~ AppNavigator ~ bubbleSelected:", bubbleSelected)

  // console.log('token>>>>', token);
  // console.log('isVerified', isGoalCreated);

  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
    bubbleSelected
        ? 'TabNavigation' :
      token != null
        ? 'BubbleSelection'
        : 'LoginScreen';
        // const firstScreen = token!=null ? 'BubbleSelection' :bubbleSelected? 'TabNavigation' : 'Loginscreen'

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={'Profile'}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="AccountDetails" component={AccountDetails} />
          <RootNav.Screen name="AddPost" component={AddPost} />
          <RootNav.Screen name="TabNavigation" component={TabNavigation} />
          <RootNav.Screen name="AccountSetting" component={AccountSetting} />
          <RootNav.Screen name="Posting" component={Posting} />
          <RootNav.Screen name="CreateNewBubble" component={CreateNewBubble} />
          <RootNav.Screen name="BubbleDetail" component={BubbleDetail} />
          <RootNav.Screen name="Bubble" component={Bubble} />
          <RootNav.Screen name="MyGallery" component={MyGallery} />
          <RootNav.Screen name="BubbleSelection" component={BubbleSelection} />
          <RootNav.Screen name="EnterPhone" component={EnterPhone} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="BubbleList" component={BubbleList} />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="ProfileList" component={ProfileList} />
          <RootNav.Screen name="Notifications" component={Notifications} />
          <RootNav.Screen name="BubbleSearch" component={BubbleSearch} />
          <RootNav.Screen name="CreateNewFeed" component={CreateNewFeed} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const TabNavigation = () => {
  const userRole = useSelector(state => state.commonReducer.selectedRole);
  console.log(
    '🚀 ~ file: appNavigation.js:83 ~ TabNavigation ~ userRole:',
    userRole,
  );
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          let color = Color.themeColor;
          let size = moderateScale(20, 0.3);
          let type = Ionicons;

          if (route.name === 'HomeScreen') {
            iconName = require('./Assets/Images/home.png');
            color = focused ? Color.themeColor : Color.themeLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route.name === 'AddPost') {
            iconName = require('./Assets/Images/plus.png');

            color = focused ? Color.themeColor : Color.themeLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route.name === 'EmptyScreen') {
            // type = AntDesign;
            iconName = require('./Assets/Images/loading.png');
            color = focused ? Color.themeColor : Color.themeLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route.name === 'Inbox') {
            type = Ionicons;
            iconName = require('./Assets/Images/messenger.png');

            color = focused ? Color.themeColor : Color.themeLightGray;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else {
            iconName = require('./Assets/Images/profile.png');
            color = focused ? Color.themeColor : Color.themeLightGray;
            size = focused ? moderateScale(25, 0.3) : moderateScale(20, 0.3);
          }
          return (
            <Image
              source={iconName}
              style={{
                width: size,
                height: size,
                tintColor: color,
                // color:'white',
                // backgroundColor:Color.themeColor
              }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor:'black',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
          // borderTopRightRadius: moderateScale(30, 0.6),
          // borderTopLeftRadius: moderateScale(30, 0.6),
          height: windowHeight * 0.08,
        },
      })}>
      <Tabs.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tabs.Screen name={'EmptyScreen'} component={EmptyScreen} />
      <Tabs.Screen name={'AddPost'} component={AddPost} />
      <Tabs.Screen name={'Inbox'} component={Inbox} />
      <Tabs.Screen
        name={'AccountDetails'}
        component={AccountDetails}
        // options={{
        //   // Pass data as a parameter to the component
        //   data: { fromSpotLight: true },
        // }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
