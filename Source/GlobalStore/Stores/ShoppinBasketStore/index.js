import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  products: [],
};

const basket = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log(state.products.includes(action.payload));
      let flag = false;
      _.each(state.products, (item, index) => {
        console.log(index);
        if (
          action.payload.size === item.size &&
          action.payload.name === item.name &&
          action.payload.milk === item.milk
        ) {
          state.products[index].count =
            state.products[index].count + action.payload.count;
          flag = true;
        }
      });
      if (flag) {
      } else {
        state.products = [action.payload, ...state.products];
      }
    },
    deleteItemFromBasket: (state, action) => {
      console.log('ACTION PAYLOAD', action.payload);
      _.each(state.products, (item, index) => {
        if (
          action.payload.size === item.size &&
          action.payload.name === item.name &&
          action.payload.milk === item.milk
        ) {
          let count = state.products[index].count;
          count = count - 1;
          if (count <= 1) {
            console.log('====0', count);
            state.products[index].count = 1;
          } else {
            state.products[index].count = count;
          }
        } else {
          console.log('AYNI DEGIL');
        }
      });
    },
    addItemFromBasketScreen: (state, action) => {
      console.log('ACTION PAYLOAD', action.payload);
      _.each(state.products, (item, index) => {
        if (
          action.payload.size === item.size &&
          action.payload.name === item.name &&
          action.payload.milk === item.milk
        ) {
          console.log('AYNI');
          state.products[index].count = state.products[index].count + 1;
        } else {
          console.log('AYNI DEGIL');
        }
      });
    },
    clearItemFromBasket: (state, action) => {
      state.products = state.products.filter(
        product => product.generatedId !== action.payload,
      );
    },
    deleteAllProductsFromBasket: state => {
      state.products = [];
    },
  },
});

export const {
  addToBasket,
  deleteAllProductsFromBasket,
  deleteItemFromBasket,
  addItemFromBasketScreen,
  clearItemFromBasket,
} = basket.actions;
export default basket.reducer;
