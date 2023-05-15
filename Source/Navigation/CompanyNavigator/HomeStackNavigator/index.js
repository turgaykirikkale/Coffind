import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../Screens/CompnyScreens/HomeScreen';
import {useSelector} from 'react-redux';

const CompanyHomeStack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <CompanyHomeStack.Navigator screenOptions={{headerShown: false}}>
        <CompanyHomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      </CompanyHomeStack.Navigator>
    </View>
  );
};

export default HomeStackNavigator;
