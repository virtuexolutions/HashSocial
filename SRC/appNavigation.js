import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
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
import BubbleEdit from './Screens/BubbleEdit';
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

  // console.log('token>>>>', token);
  // console.log('isVerified', isGoalCreated);

  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen = token != null ? 'HomeScreen' : 'LoginScreen';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={'BubbleEdit'}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="BubbleDetail" component={BubbleDetail} />
          <RootNav.Screen name="BubbleEdit" component={BubbleEdit} />
          <RootNav.Screen name="Bubble" component={Bubble} />
          <RootNav.Screen name="MyGallery" component={MyGallery} />
          <RootNav.Screen name="BubbleSelection" component={BubbleSelection} />
            <RootNav.Screen name="Chat" component={Chat} />
          <RootNav.Screen name="Inbox" component={Inbox} />
          <RootNav.Screen name="EnterPhone" component={EnterPhone} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          {/* <RootNav.Screen name="BubbleList" component={HomeScreen} /> */}
          <RootNav.Screen name="BubbleList" component={BubbleList} />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="Posting" component={Posting} />
          <RootNav.Screen name="ProfileList" component={ProfileList} />
          <RootNav.Screen name="Notifications" component={Notifications} />
          <RootNav.Screen name="BubbleSearch" component={BubbleSearch} />
          <RootNav.Screen name="AccountSetting" component={AccountSetting} />
          <RootNav.Screen name="CreateNewFeed" component={CreateNewFeed} />
          <RootNav.Screen name="AddPost" component={AddPost} />
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

// export const TabNavigation = () => {
//   const userRole = useSelector(state => state.commonReducer.selectedRole);
//   console.log(
//     '🚀 ~ file: appNavigation.js:83 ~ TabNavigation ~ userRole:',
//     userRole,
//   );
//   const Tabs = createBottomTabNavigator();
//   return (
//     <Tabs.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           let color = Color.themeColor;
//           let size = moderateScale(20, 0.3);
//           let type = Ionicons;

//           if (
//             route.name === 'HomeScreen' ||
//             route.name === 'NegotiatorHomeScreen'
//           ) {
//             iconName = focused ? 'home' : 'home-outline';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'ChatScreen') {
//             iconName = focused
//               ? 'ios-chatbubble-ellipses-sharp'
//               : 'ios-chatbubble-ellipses-outline';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'NotificationScreen') {
//             type = FontAwesome;
//             iconName = focused ? 'bell' : 'bell-o';

//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'CreateNew') {
//             type = AntDesign;
//             iconName = focused ? 'Plus' : 'Plus';

//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else {
//             iconName = focused ? 'settings-outline' : 'settings-sharp';
//             color = focused ? Color.themeColor : Color.themeLightGray;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           }
//           return route.name == 'CreateNew' ? (
//             <View
//               style={{
//                 borderWidth: 5,
//                 borderColor: Color.lightGrey,
//                 height: moderateScale(60, 0.3),
//                 width: moderateScale(60, 0.3),
//                 borderRadius: moderateScale(30, 0.3),
//                 backgroundColor: Color.themeColor,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: moderateScale(-30, 0.3),
//               }}>
//               <Icon
//                 name={'plus'}
//                 as={type}
//                 color={Color.white}
//                 size={moderateScale(30, 0.3)}
//               />
//             </View>
//           ) : (
//             <Icon name={iconName} as={type} color={color} size={size} />
//           );
//         },
//         tabBarShowLabel: false,
//       })}>
//       {userRole == 'Qbid Member' ? (
//         <Tabs.Screen name={'HomeScreen'} component={HomeScreen} />
//       ) : (
//         <Tabs.Screen
//           name={'NegotiatorHomeScreen'}
//           component={NegotiatorHomeScreen}
//         />
//       )}
//       <Tabs.Screen name={'NotificationScreen'} component={NotificationScreen} />
//       {userRole == 'Qbid Member' && (
//         <Tabs.Screen name={'CreateNew'} component={CreateNew} />
//       )}
//       <Tabs.Screen name={'ChatScreen'} component={ChatScreen} />
//       <Tabs.Screen name={'Settings'} component={Settings} />
//     </Tabs.Navigator>
//   );
// };

export default AppNavigator;
