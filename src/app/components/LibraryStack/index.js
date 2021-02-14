import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStackNavigator from '../../../utils/AppStackNavigator';
import BookList from '../BookList';
import BookDetailScreen from '../../screens/BookDetailScreen';

const Stack = createStackNavigator();
const book = {
  title: 'UX Stories',
  author: 'Timothy Cross',
  year: '1982',
  genre: 'Novel',
  id: Math.random() * (999 - 0) + 0,
};

const LibraryStack = () => (
  <AppStackNavigator>
    <Stack.Screen name="Book Detail" component={BookDetailScreen} />
    <Stack.Screen name="Library" component={BookList} />
  </AppStackNavigator>
);

export default LibraryStack;
