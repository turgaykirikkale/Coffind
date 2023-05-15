import store from '../../../GlobalStore/Stores';
import {setTheme} from '../../../GlobalStore/Stores/ThemeStore';
import {setLanguage} from '../../../GlobalStore/Stores/LanguageStore';
import {selectedItem} from '../../../GlobalStore/Stores/menuStore';
import {
  addToBasket,
  deleteAllProductsFromBasket,
  deleteItemFromBasket,
  addItemFromBasketScreen,
  clearItemFromBasket,
} from '../../../GlobalStore/Stores/ShoppinBasketStore';
import {
  loginAndSetUser,
  loginAndSetCompanies,
  registerUser,
  deleteUserFromStore,
} from '../../../GlobalStore/Stores/AccountControl';

//for theme
export const themeHandle = name => {
  store.dispatch(setTheme(name));

  console.log('StoreNewStore', store.getState());
};

//for language
export const languageHandle = type => {
  store.dispatch(setLanguage(type));
};

//for Menü

export const setSelectedMenuItem = item => {
  store.dispatch(selectedItem(item));
};

export const addProductsToBasket = item => {
  console.log('item', item);
  store.dispatch(addToBasket(item));
};

export const deleteAllProduct = () => {
  store.dispatch(deleteAllProductsFromBasket());
};

export const deleteItemFromBasketControl = item => {
  store.dispatch(deleteItemFromBasket(item));
};

export const addItemFromBasketScreenControl = item => {
  store.dispatch(addItemFromBasketScreen(item));
};
export const clearItemFromBasketScreenControl = id => {
  store.dispatch(clearItemFromBasket(id));
};

export const loginUserControl = data => {
  store.dispatch(loginAndSetUser(data));
};

export const loginCompanyControl = data => {
  store.dispatch(loginAndSetCompanies(data));
};

export const setUserAndCompaniesStorage = data => {
  store.dispatch(registerUser(data));
};

export const deleteUser = () => {
  store.dispatch(deleteUserFromStore());
};
