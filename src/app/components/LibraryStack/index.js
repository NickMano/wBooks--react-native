import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStackNavigator from '../../../utils/AppStackNavigator';
import BookDetailScreen from '../../screens/BookDetailScreen';
import BookScreen from '../../screens/BookScreen';

const Stack = createStackNavigator();

const LibraryStack = () => (
  <AppStackNavigator>
    <Stack.Screen name="Library" component={BookScreen} />
    <Stack.Screen name="Book Detail" component={BookDetailScreen} />
  </AppStackNavigator>
);

export default LibraryStack;
