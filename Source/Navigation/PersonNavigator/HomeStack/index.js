import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../Screens/PersonScreens/HomeScreen';
import HomeScreenItemDeailScreen from '../../../Screens/PersonScreens/HomeScreenItemDetailScreen';
import {useSelector} from 'react-redux';
import MapScreen from '../../../Screens/PersonScreens/MapTestScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <HomeStack.Screen
          name={'HomeScreenItemDeailScreen'}
          component={HomeScreenItemDeailScreen}
        />
        <HomeStack.Screen name={'MapScreen'} component={MapScreen} />
      </HomeStack.Navigator>
    </View>
  );
};

export default HomeStackNavigator;
