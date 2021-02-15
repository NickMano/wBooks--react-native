import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import bkImage from '../assets/bc_nav_bar.png';
import Colors from './colors';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.aliceBlue,
    shadowColor: 'transparent',
  },
  headerBackground: () => (
    <Image style={{height: 80, resizeMode: 'stretch'}} source={bkImage} />
  ),
  headerTintColor: Colors.white,
};

const AppStackNavigator = ({children}) => (
  <Stack.Navigator screenOptions={screenOptions}>{children}</Stack.Navigator>
);

export default AppStackNavigator;
