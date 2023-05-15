import {configureStore} from '@reduxjs/toolkit';
import themeStore from '../Stores/ThemeStore/index';
import languageStore from '../Stores/LanguageStore/index';
import basketStore from '../Stores/ShoppinBasketStore';
import menuStore from './menuStore/index';
import userStore from './AccountControl';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  reducer: {
    themeStore,
    languageStore,
    menuStore,
    basketStore,
    userStore,
  },
});

export default store;
