import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  navigateItemToDetail: {},
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectedItem: (state, action) => {
      state.navigateItemToDetail = action.payload;
    },
  },
});

export const {selectedItem} = menu.actions;
export default menu.reducer;
