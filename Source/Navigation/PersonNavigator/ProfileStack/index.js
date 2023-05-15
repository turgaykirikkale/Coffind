import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../../Screens/PersonScreens/ProfileScreen';
import {useSelector} from 'react-redux';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = props => {
  const {theme} = useSelector(state => state.themeStore);

  return (
    <View style={{backgroundColor: theme?.colors?.gradientBottom, flex: 1}}>
      <ProfileStack.Navigator
        screenOptions={{headerShown: false, unmountOnBlur: true}}>
        <ProfileStack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      </ProfileStack.Navigator>
    </View>
  );
};

export default ProfileStackNavigator;
