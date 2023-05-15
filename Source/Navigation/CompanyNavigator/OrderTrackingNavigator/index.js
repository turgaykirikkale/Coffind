import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import MenüTrackingScreen from '../../../Screens/CompnyScreens/MenuTrackingScreen';

const OrderTrackingStack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <OrderTrackingStack.Navigator screenOptions={{headerShown: false}}>
        <OrderTrackingStack.Screen
          name={'MenüTrackingScreen'}
          component={MenüTrackingScreen}
        />
      </OrderTrackingStack.Navigator>
    </View>
  );
};

export default HomeStackNavigator;
