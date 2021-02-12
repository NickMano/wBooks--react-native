/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Colors from '../utils/colors';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.blueJeans,
    shadowColor: Colors.blueJeans,
  },
  headerTintColor: Colors.white,
};
const book = {
  title: 'UX Stories',
  author: 'Timothy Cross',
  year: '1982',
  genre: 'Novel',
  id: Math.random() * (999 - 0) + 0,
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="BOOK DETAIL">
            {(props) => <BookDetail book={book} />}
          </Stack.Screen>
          <Stack.Screen name="Home" component={BookList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.aliceBlue,
  },
  body: {
    backgroundColor: Colors.aliceBlue,
  },
});

export default App;
