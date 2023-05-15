import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accountType: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAndSetUser: (state, action) => {
      console.log('ACTIONB', action.payload);
      state.user = action.payload;
    },

    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },

    deleteUserFromStore: (state, action) => {
      state.user = null;
    },
  },
});

export const {loginAndSetUser, deleteUserFromStore} = user.actions;
export default user.reducer;
