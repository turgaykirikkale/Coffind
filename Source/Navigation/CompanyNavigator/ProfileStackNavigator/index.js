import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../../Screens/CompnyScreens/ProfileScreen';
import PayAcceptScreen from '../../../Screens/CompnyScreens/PayAcceptScreen';
import {useSelector} from 'react-redux';

const CompanyProfileStack = createNativeStackNavigator();

const HomeStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <CompanyProfileStack.Navigator screenOptions={{headerShown: false}}>
        <CompanyProfileStack.Screen
          name={'ProfileScreen'}
          component={ProfileScreen}
        />
        <CompanyProfileStack.Screen
          name={'PayAcceptScreen'}
          component={PayAcceptScreen}
        />
      </CompanyProfileStack.Navigator>
    </View>
  );
};

export default HomeStackNavigator;
