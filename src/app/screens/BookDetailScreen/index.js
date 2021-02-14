import React from 'react';
import {ScrollView, View} from 'react-native';
import BookDetail from '../../components/BookDetail';
import CommentList from '../../components/CommentList';
import styles from './styles';

const BookDetailScreen = () => {
  const bookStruct = {
    title: 'A Little Bird Told Me',
    author: 'Timothy Cross',
    year: '1982',
    genre: 'Novel',
    id: Math.random() * (999 - 0) + 0,
  };

  return (
    <ScrollView style={styles.container}>
      <BookDetail book={bookStruct} />
      <CommentList />
    </ScrollView>
  );
};

export default BookDetailScreen;
