import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from '../../../Screens/PersonScreens/MenuScreen';
import MenuItemDetailScreen from '../../../Screens/PersonScreens/MenuItemDetailScreen';
import {useSelector} from 'react-redux';
import BasketScreen from '../../../Screens/PersonScreens/BasketScreen';

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <MenuStack.Navigator screenOptions={{headerShown: false}}>
        <MenuStack.Screen name={'MenuScreen'} component={MenuScreen} />
        <MenuStack.Screen
          name={'MenuItemDetailScreen'}
          component={MenuItemDetailScreen}
        />
        <MenuStack.Screen name={'BasketScreen'} component={BasketScreen} />
      </MenuStack.Navigator>
    </View>
  );
};

export default MenuStackNavigator;
