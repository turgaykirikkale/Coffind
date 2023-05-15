import {createSlice} from '@reduxjs/toolkit';
import themeJson from './theme.json';
import _ from 'lodash';

const themeArr = themeJson;

const initialState = {
  theme: themeArr[2],
};

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const selectedTheme = _.find(themeArr, {Name: action.payload});
      state.theme = selectedTheme;
    },
  },
});

export const {setTheme} = theme.actions;
export default theme.reducer;
