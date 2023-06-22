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
          initialRouteName={LoginScreen}
          screenOptions={{headerShown: false}}>

          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen name="EnterPhone" component={EnterPhone} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />


          {/* <RootNav.Screen name="EnterPhone" component={EnterPhone} />
        
          <RootNav.Screen name="HomeScreen" component={HomeScreen} />
          <RootNav.Screen name="MyAccounts" component={MyAccounts} />
          <RootNav.Screen name="FriendRequest" component={FriendRequest} />
          <RootNav.Screen name="SeeAllScreen" component={SeeAllScreen} />
          <RootNav.Screen name="Support" component={Support} />
          <RootNav.Screen name="SelectedChat" component={SelectedChat} /> */}

          {/* 
          <RootNav.Screen
            name="NegotiatorPortfolio"
            component={NegotiatorPortfolio}
          />
          <Tabs.Screen name={'ChatScreen'} component={ChatScreen} />
      <Tabs.Screen name={'Settings'} component={Settings} /> */}
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
