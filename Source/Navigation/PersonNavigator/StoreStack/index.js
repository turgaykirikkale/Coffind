import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreScreen from '../../../Screens/PersonScreens/StoreScreen';
import {useSelector} from 'react-redux';

const StoreStack = createNativeStackNavigator();

const StoreStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <StoreStack.Navigator screenOptions={{headerShown: false}}>
        <StoreStack.Screen name={'StoreScreen'} component={StoreScreen} />
      </StoreStack.Navigator>
    </View>
  );
};

export default StoreStackNavigator;
