import {createSlice} from '@reduxjs/toolkit';
import LanguagesJson from './Languages.json';
import _ from 'lodash';

const languageArr = LanguagesJson;

const initialState = {
  language: languageArr[0],
};

const language = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const selectedLanguage = _.find(languageArr, {type: action.payload});
      state.language = selectedLanguage;
    },
  },
});

export const {setLanguage} = language.actions;
export default language.reducer;
