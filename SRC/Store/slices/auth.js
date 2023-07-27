import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  fcmToken: null,
  isVerified: false,
  userWalkThrough: false,
  isGoalCreated : false ,
  bubbleSelected: false,
  privacy:'public',
  ThemeColor : ['#01E8E3', '#1296AF']
};

const AuthSlice = createSlice({
  name: 'authReducer',
  initialState: initialState,
  reducers: {
    setUserToken(state, action) {
      state.token = action?.payload?.token;
    
    },
    
    SetFCMToken(state, action) {
      state.fcmToken = action?.payload?.fcmToken;
    },
    setUserLogin(state, action) {
      state.token = action?.payload;
    },
    setUserLogoutAuth(state, action) {
      state.token = null;
      state.fcmToken = null;
    },
    setWalkThrough(state, action) {
      state.userWalkThrough = action.payload;
    }, 
    setBubbleSelected(state, action) {
      state.bubbleSelected = action.payload;
    },
    setAccountPrivate(state,action){
      console.log("🚀 ~ file: common.js:68 ~ setAccountPrivate ~ action:", action.payload)
      if(action.payload == 'private'){
        state.ThemeColor = ['#FFDE3E','#EA9F04']
        // state.theme = require('../../Assets/Images/theme2.jpg')
        // themeColor = ['#FFDE3E','#EA9F04']
        // themeColor[1]='#EA9F04'
      }else{
        // state.theme = require('../../Assets/Images/Main.png')
        state.ThemeColor = ['#01E8E3', '#1296AF']
      

      }
      
      state.privacy = action.payload
    }
  },
});

export const {
  
  setUserLogin,
  setUserLogoutAuth,
  setUserToken,
  SetFCMToken,
  setWalkThrough,
  setBubbleSelected,
  setAccountPrivate
  
  
} = AuthSlice.actions;

export default AuthSlice.reducer;
