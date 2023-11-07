import {createSlice} from '@reduxjs/toolkit';
import Color from '../../Assets/Utilities/Color';

const initialState = {
  userData: {},
  categories: [],
  categoryProperties: [],
  financeBreakDown: [],
  notification: false,
  selectedProfile: [],
  selectedBubble:[],
  // theme: require('../../Assets/Images/Main.png'),

  selectedRole: '',
};

const CommonSlice = createSlice({
  name: 'commonReducer',
  initialState: initialState,
  reducers: {
    setCategoryProperties(state, action) {
      state.categoryProperties = action?.payload;
      // console.log("reduxxxx", state.categoryProperties);
    },

    setUserData(state, action) {
      state.userData = action?.payload;
      // state.userData = action?.payload?.userData;
    },

    setUserLogOut(state, action) {
      state.userData = {};
    },

    setServiceCategories(state, action) {
      state.categories = action?.payload;
    },

    setFinanceBreakDown(state, action) {
      state.financeBreakDown = action.payload;
    },

    setNotification(state, action) {
      state.notification = action.payload;
    },

    setSelectedRole(state, action) {
      state.selectedRole = action.payload;
    },

    setSelectedProfileData(state, action) {
      state.selectedProfile = action.payload;
    },

    setSelectedBubbles(state, action) {
      state.selectedBubble = action.payload;
    },
  },
});

export const {
  setUserData,
  setUserLogOut,
  setServiceCategories,
  setCategoryProperties,
  setFinanceBreakDown,
  setNotification,
  setSelectedRole,
  setSelectedBubbles,
  setSelectedProfileData,
} = CommonSlice.actions;

export default CommonSlice.reducer;
