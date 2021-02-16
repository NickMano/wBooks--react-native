import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/app';
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const bookStruct = {
  title: 'A Little Bird Told Me',
  author: 'Timothy Cross',
  year: '1982',
  genre: 'Novel',
};
const reducer = () => ({
  books: [
    bookStruct,
    bookStruct,
    bookStruct,
    bookStruct,
    bookStruct,
    bookStruct,
  ],
});
const store = createStore(reducer);

const AppWithState = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithState);
