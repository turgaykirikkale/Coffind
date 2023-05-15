import React from 'react';
import AppStackTabNavigator from './PersonNavigator/AppStackNavigator';
import CompanyAppStackNavigator from './CompanyNavigator/AppStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginAndRegisterScreen from '../Screens/LoginAndRegisterScreen';

import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const Entrypoint = props => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={'LoginAndRegisterScreen'}
            component={LoginAndRegisterScreen}
          />

          <Stack.Screen
            name={'AppStackTabNavigator'}
            component={AppStackTabNavigator}
          />
          <Stack.Screen
            name={'CompanyAppStackNavigator'}
            component={CompanyAppStackNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Entrypoint;
